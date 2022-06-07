<template>
  <div>
    <div class="p-4" v-show="!data.detail">
      <BasicTable @register="registerTable" :dataSource="data.colList" @change="pageChange">
        <template #action="{ record, column }">
          <TableAction :actions="createActions(record, column)" />
        </template>
      </BasicTable>
    </div>

    <CollapseContainer :title="'题目ID：' + `${data.quesDetail.id}`" v-show="data.detail">
      <div class="m-15" style="font-size: 20px">{{ data.quesDetail.content }}</div>
      <BasicForm
        v-show="data.detail"
        @register="register1"
        @submit="handleSubmit"
        @reset="handleReset"
        :schemas="data.schemas"
      />
      <a-button @click="exit" class="m-5">退出训练</a-button>
      <a-button @click="lookAnswer" class="m-5">查看答案</a-button>
    </CollapseContainer>
    <CollapseContainer title="题目答案" v-show="data.answerIf" :canExpan="false">
      <h1 v-show="data.quesDetail.answer">答案：{{ data.quesDetail.answer }}</h1>
      <h1 v-show="data.quesDetail.rightAnswer">答案：{{ data.quesDetail.rightAnswer }}</h1>
      <h1 v-show="data.quesDetail.analysis">答案解析：{{ data.quesDetail.analysis }}</h1>
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, computed } from 'vue';
import Icon from '/@/components/Icon/index';
import { cardList } from './data';
import { PageWrapper } from '/@/components/Page';
import { Card, Row, Col, List } from 'ant-design-vue';
import { getCollection, delCollection, addCollection } from '/@/api/info/info';
import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
import { useTable, TableAction } from '/@/components/Table';
import { getBasicColumns, getBasicData } from './tableData';
import { BasicTable } from '/@/components/Table';
import { useMessage } from '/@/hooks/web/useMessage';

import { useUserStore } from '/@/store/modules/user';
import { getQuestionDetail } from '/@/api/question/question';
import { pd, dx, duox } from '../quesbank/choose';
import { CollapseContainer } from '/@/components/Container/index';

const { notification } = useMessage();

const userStore = useUserStore();
const userinfo = computed(() => userStore.getUserInfo);
import {
  BasicTable,
  useTable,
  TableAction,
  BasicColumn,
  ActionItem,
  EditRecordRow,
} from '/@/components/Table';

export default defineComponent({
  components: {
    Icon,
    PageWrapper,
    [Card.name]: Card,
    [List.name]: List,
    [List.Item.name]: List.Item,
    [Row.name]: Row,
    [Col.name]: Col,
    BasicTable,
    TableAction,
    BasicForm,
    CollapseContainer,
  },
  setup() {
    // 选项注册
    const [register1, { setFieldsValue, getFieldsValue, submit }] = useForm({
      labelWidth: 120,
      submitButtonOptions: {
        text: '提交',
      },
    });

    // 分页变量
    const pagination = ref<any>(true);

    // table配置
    const [
      registerTable,
      {
        setLoading,
        setColumns,
        getColumns,
        getDataSource,
        getRawDataSource,
        reload,
        getPaginationRef,
        setPagination,
        getSelectRows,
        getSelectRowKeys,
        setSelectedRowKeys,
        clearSelectedRowKeys,
      },
    ] = useTable({
      title: '点击删除按钮 注意不能撤销 没有确认框 请谨慎删除！',
      titleHelpMessage: '温馨提醒',
      columns: getBasicColumns(),
      showTableSetting: true,
      pagination: pagination,
      showTableSetting: true,
      tableSetting: { fullScreen: true },
      actionColumn: {
        width: 160,
        title: 'Action',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    });

    const data = reactive({
      colList: [],
      obj: {
        pageNum: 1,
        pageSize: 10,
      },
      quesDetail: {},
      detail: false,
      schemas: [],
      detailId: 0,
      answerIf: false,
    });

    async function getCollections() {
      console.log(111);
      const res = await getCollection(data.obj);
      data.colList = res.data.list;
      data.colList.map((item) => {
        switch (item.level) {
          case 1:
            item.level = '简单';
            break;
          case 2:
            item.level = '中等';
            break;
          case 3:
            item.level = '困难';
            break;
        }
        switch (item.type) {
          case 1:
            item.type = '判断题';
            break;
          case 2:
            item.type = '单选题';
            break;
          case 3:
            item.type = '多选题';
            break;
          case 4:
            item.type = '填空题';
            break;
          case 5:
            item.type = '论述题';
            break;
        }
      });

      pagination.value = { total: res.data.total };

      console.log(data.colList);
    }

    // 页面发送任何变化
    function pageChange() {
      if (
        Math.floor(getPaginationRef().total / getPaginationRef().pageSize) + 1 ==
        getPaginationRef().current
      ) {
        // data.obj.orderRule = (data.orderRule.value + 1) % 2;
        data.obj.pageNum = getPaginationRef().current;
        data.obj.pageSize = getPaginationRef().pageSize;
        getCollections();
      }
      data.obj.pageNum = getPaginationRef().current;
      data.obj.pageSize = getPaginationRef().pageSize;
      getCollections();
      console.log(getPaginationRef());
    }
    // 点击删除按钮
    async function del(quesId) {
      console.log(userinfo.value);
      console.log(quesId);
      const res = await delCollection({ questionId: quesId, userId: userinfo.value.id });
      if (res.code === 'ITEST-200') {
        notification.success({
          message: '删除成功',
          duration: 3,
        });
      } else {
        notification.error({
          message: '删除失败，请稍后再试',
          duration: 3,
        });
      }
      getCollections();
    }

    // 点击查看按钮
    // 点击某行试题触发获取试题详情
    async function questionDetail(record: EditRecordRow) {
      data.detailId = record.id;
      let type = typeToId(record.type);
      switch (type) {
        case 1:
          data.schemas = pd();
          break;
        case 2:
          data.schemas = dx();
          break;
        case 3:
          data.schemas = duox();
          break;
      }
      await QuestionDetail(record.id, type);
    }

    // 类型转ID
    const typeToId = (type) => {
      switch (type) {
        case '判断题':
          return 1;
        case '单选题':
          return 2;
        case '多选题':
          return 3;
        case '填空题':
          return 4;
        case '论述题':
          return 5;
      }
    };

    // 根据ID TYPE请求题目详情
    async function QuestionDetail(id, type) {
      const res = await getQuestionDetail(id, type);
      data.quesDetail = res.data;
      console.log(res);
      console.log('发起请求拿试题详情');
      data.detail = true;
    }

    onMounted(() => {
      getCollections();
    });

    function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
      return [
        {
          label: '查看',
          color: 'success',
          onClick: questionDetail.bind(null, record),
        },
        {
          label: '删除',
          color: 'error',
          onClick: del.bind(null, record.id),
        },
      ];
    }

    // 点击退出按钮
    const exit = () => {
      data.detail = false;
      closeAnswer();
    };

    // 提交选项
    const handleSubmit = () => {
      console.log(getFieldsValue().answer1);
      if (getFieldsValue().answer1 == undefined) {
        notification.error({
          message: '请输入答案',
          duration: 3,
        });
        return;
      }
      if (data.quesDetail.type === 1) {
        if (data.quesDetail.answer == getFieldsValue().answer1) {
          setFieldsValue({ answer1: null });
          closeAnswer();
          notification.success({
            message: '答案正确 系统将自动跳转到下一题...',
            duration: 3,
          });
          // del(data.detailId);
          nextQues();
        } else {
          setFieldsValue({ answer1: null });
          notification.error({
            message: '答案错误',
            duration: 3,
          });
        }
      } else if (data.quesDetail.type === 2) {
        console.log(data.quesDetail.rightAnswer);
        console.log(getFieldsValue());
        if (data.quesDetail.rightAnswer == getFieldsValue().answer1) {
          setFieldsValue({ answer1: null });
          closeAnswer();
          notification.success({
            message: '答案正确 系统将自动跳转到下一题...',
            duration: 3,
          });
          nextQues();
        } else {
          setFieldsValue({ answer1: null });
          notification.error({
            message: '答案错误',
            duration: 3,
          });
        }
      } else if (data.quesDetail.type === 3) {
        console.log(data.quesDetail.rightAnswer);
        console.log(getFieldsValue().answer1.join(''));
        if (data.quesDetail.rightAnswer == getFieldsValue().answer1.join('')) {
          setFieldsValue({ answer1: null });
          closeAnswer();
          notification.success({
            message: '答案正确 系统将自动跳转到下一题...',
            duration: 3,
          });
          nextQues();
        } else {
          setFieldsValue({ answer1: null });
          notification.error({
            message: '答案错误',
            duration: 3,
          });
        }
      }
    };

    // 下一题
    const nextQues = () => {
      try {
        data.colList.some((item, index, list) => {
          if (item.id == data.detailId) {
            if (index + 1 >= list.length) {
              notification.warning({
                message: '这已经是最后一题了',
                duration: 3,
              });
              throw '循环终止';
            } else {
              data.detailId = list[index + 1].id;
              QuestionDetail(data.detailId, typeToId(list[index + 1].type));
              throw '循环终止';
            }
          }
        });
      } catch (e) {}
    };

    const lookAnswer = () => {
      data.answerIf = true;
    };

    const closeAnswer = () => {
      data.answerIf = false;
    };

    return {
      prefixCls: 'list-card',
      list: cardList,
      getCollections,
      registerTable,
      data,
      pagination,
      columns: getBasicColumns(),
      pageChange,
      createActions,
      questionDetail,
      exit,
      handleSubmit,
      register1,
      nextQues,
      lookAnswer,
      closeAnswer,
    };
  },
});
</script>
<style lang="less" scoped>
.list-card {
  &__link {
    margin-top: 10px;
    font-size: 14px;

    a {
      margin-right: 30px;
    }

    span {
      margin-left: 5px;
    }
  }

  &__card {
    width: 100%;
    margin-bottom: -8px;

    .ant-card-body {
      padding: 16px;
    }

    &-title {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 500;
      color: @text-color;

      .icon {
        margin-top: -5px;
        margin-right: 10px;
        font-size: 38px !important;
      }
    }

    &-detail {
      padding-top: 10px;
      padding-left: 30px;
      font-size: 14px;
      color: @text-color-secondary;
    }
  }
}
</style>
