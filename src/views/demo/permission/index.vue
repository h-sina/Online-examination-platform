<template>
  <PageWrapper :class="prefixCls">
    <!-- <BasicForm
      @register="register"
      @submit="selectQuestions"
      @reset="resetQuestions"
      v-model="level"
      
    />-->
    <BasicForm
      @register="register"
      v-model="level"
      v-if="data.detail"
      style="margin: 10px"
      @reset="resetQuestions"
    />
    <!-- <a-button shape="round" @click="sortByTime" v-if="data.detail">点击按创建时间排序</a-button> -->

    <div class="p-4">
      <BasicTable
        @register="registerTable"
        @row-click="questionDetail"
        :dataSource="data.questionList"
        v-if="data.detail"
        @change="pageChange"
      >
        <template #action="{ record, column }">
          <TableAction :actions="createActions(record, column)" />
        </template>
      </BasicTable>
    </div>

    <CollapseContainer :title="'题目ID：' + `${data.quesDetail.id}`" v-if="!data.detail">
      <div class="m-15">{{ data.quesDetail.content }}</div>
      <ul class="m-15" v-for="i in data.quesDetail.selectionList" :key="data.quesDetail.id">
        <li>{{ i }}</li>
      </ul>
      <BasicForm
        v-if="!data.detail"
        @register="register1"
        @submit="handleSubmit"
        @reset="handleReset"
        :schemas="data.schemas"
      />
      <a-button @click="exit" class="m-5">退出训练</a-button>
      <a-button @click="lookAnswer" class="m-5">查看答案</a-button>
      <a-button @click="lastQues" class="m-5">上一个</a-button>
      <a-button @click="nextQues" class="m-5">下一个</a-button>
      <a-button @click="addErrK" class="m-5">添加到错题库</a-button>
      <a-button @click="addCollK" class="m-5">添加到收藏夹</a-button>
    </CollapseContainer>
    <CollapseContainer title="题目答案" v-if="data.answerIf" :canExpan="false">
      <h1 v-if="data.quesDetail.answer">答案：{{ data.quesDetail.answer }}</h1>
      <h1 v-if="data.quesDetail.rightAnswer">答案：{{ data.quesDetail.rightAnswer }}</h1>
      <h1 v-if="data.quesDetail.analysis">答案解析：{{ data.quesDetail.analysis }}</h1>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
import { CollapseContainer } from '/@/components/Container/index';
import { defineComponent, onMounted, reactive, toRefs, ref, computed } from 'vue';
import Icon from '/@/components/Icon/index';
import { PageWrapper } from '/@/components/Page';
import { Card, Row, Col, List } from 'ant-design-vue';
import { getQuestion, updateQuestionDetail } from '/@/api/question/question';
import {
  BasicTable,
  ColumnChangeParam,
  ActionItem,
  useTable,
  BasicColumn,
  TableAction,
} from '/@/components/Table';
import { getBasicColumns, getBasicData } from './tableData';
import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
import { useRouter } from 'vue-router';
import { demoListApi } from '/@/api/demo/table';
import { getQuestionDetail, deleteQuestionDetail } from '/@/api/question/question';
import { useMessage } from '/@/hooks/web/useMessage';
import { addRrr, addCollection } from '/@/api/info/info';

const { notification } = useMessage();
import { useUserStore } from '/@/store/modules/user';

const userStore = useUserStore();
const userinfo = computed(() => userStore.getUserInfo);

import { pd, dx, duox } from './choose';
// const typeList = ['简单', '中等', '困难'];
// const levelList = ['判断题', '单选题', '多选题', '填空题', '论述题'];
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
    BasicForm,
    TableAction,
    CollapseContainer,
  },

  setup() {
    const getSchamas = (): FormSchema[] => {
      return [
        {
          field: 'level',
          component: 'Select',
          label: '',
          colProps: {
            span: 3,
          },

          componentProps: {
            placeholder: '难度',
            options: [
              {
                label: '简单',
                value: '1',
                key: '1',
              },
              {
                label: '中等',
                value: '2',
                key: '2',
              },
              {
                label: '困难',
                value: '3',
                key: '3',
              },
            ],
            onChange: (e: ChangeEvent) => {
              selectQuestions(e, 'levelChange');
            },
          },
        },
        {
          field: 'type',
          component: 'Select',
          label: '',
          colProps: {
            span: 3,
          },
          componentProps: {
            placeholder: '类型',
            onChange: (e: ChangeEvent) => {
              selectQuestions(e, 'typeChange');
            },
            options: [
              {
                label: '判断',
                value: '1',
                key: '1',
              },
              {
                label: '单选',
                value: '2',
                key: '2',
              },
              {
                label: '多选',
                value: '3',
                key: '3',
              },
              {
                label: '填空',
                value: '4',
                key: '4',
              },
              {
                label: '论述',
                value: '5',
                key: '5',
              },
            ],
          },
        },
      ];
    };
    const currentEditKeyRef = ref('');

    // 选项注册
    const [register1, { setFieldsValue, getFieldsValue, submit }] = useForm({
      labelWidth: 120,
      submitButtonOptions: {
        text: '提交',
      },
    });

    // 筛选表单配置
    const [register] = useForm({
      labelWidth: 10,
      schemas: getSchamas(),
      showSubmitButton: false,
      // actionColOptions: {
      //   span: 24,
      // },
      // compact: true,
      // showAdvancedButton: true,
      // submitFunc: getQuestions(),
    });

    // 分页变量
    const pagination = ref<any>(true);
    // const [{ getPaginationRef }] = useTable();

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
      title: '题库',
      titleHelpMessage: '温馨提醒',
      columns: getBasicColumns(),
      showTableSetting: true,
      pagination: pagination,
      sortFn: () => {
        console.log(getSelectRows());
      },
      actionColumn: {
        width: 160,
        title: 'Action',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    });

    // 双向绑定变量
    const data = reactive({
      questionList: [],
      formData: {},
      obj: {
        orderRule: 0,
        pageNum: 1,
        pageSize: 10,
        level: 0,
        typ: 0,
      },
      detail: true,
      quesDetail: {},
      detailId: 0,
      schemas: [],
      answerIf: false,
    });

    // 点击筛选按钮
    const selectQuestions = (values, type) => {
      console.log(values);
      console.log(type == 'typeChange');

      if (values) {
        if (type == 'typeChange') {
          data.obj.type = values;
        } else {
          data.obj.level = values;
        }
      } else {
        if (type == 'typeChange') {
          data.obj.type = 0;
        } else {
          data.obj.level = 0;
        }
      }
      console.log(data.obj);
      getQuestions();
    };

    // 点击重置按钮
    const resetQuestions = () => {
      data.obj.type = 0;
      data.obj.level = 0;
      getQuestions();
    };

    // 获取试题列表
    async function getQuestions() {
      console.log(data.obj);
      const res = await getQuestion(data.obj);
      console.log(res);
      pagination.value = {
        total: res.data.total,
      };
      pagination.value = { total: res.data.total };

      data.questionList = res.data.list;
      console.log(data.questionList);
      data.questionList.map((item) => {
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
        // const typeList = ['简单', '中等', '困难'];
        // const levelList = ['判断题', '单选题', '多选题', '填空题', '论述题'];
      });
    }

    // 点击某行试题触发获取试题详情
    async function questionDetail(values) {
      data.detailId = values.id;
      let type = typeToId(values.type);
      if (type === 4 || type === 5) {
        notification.warning({
          message: '暂不支持练习',
          duration: 3,
        });
        return;
      }
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
      await QuestionDetail(values.id, type);
    }

    // 页面加载生命周期
    onMounted(() => {
      console.log('questionList-onmounted');
      getQuestions(data.obj);
    });

    const page = computed(() => {
      if (
        Math.floor(getPaginationRef().total / getPaginationRef().pageSize) + 1 ==
        getPaginationRef().current
      ) {
        // data.obj.orderRule = (data.orderRule.value + 1) % 2;
        data.obj.pageNum = getPaginationRef().current;
        data.obj.pageSize = getPaginationRef().pageSize;
        getQuestions();
      }
      return getPaginationRef().current;
    });

    // 页面发送任何变化
    async function pageChange() {
      data.obj.pageNum = getPaginationRef().current;
      data.obj.pageSize = getPaginationRef().pageSize;
      getQuestions();
    }

    // 点击退出按钮
    const exit = () => {
      data.detail = true;
    };

    // 根据ID TYPE请求题目详情
    async function QuestionDetail(id, type) {
      const res = await getQuestionDetail(id, type);
      data.quesDetail = res.data;
      console.log(res);
      console.log('发起请求拿试题详情');
      data.detail = false;

      // setFieldsValue(res.data);
    }

    // 根据id获取不同的界面
    const getContent = () => {};

    // 上一题
    const lastQues = () => {
      try {
        data.questionList.some((item, index, list) => {
          if (item.id == data.detailId) {
            if (index - 1 < 0) {
              notification.warning({
                message: '这已经是第一题了',
                duration: 3,
              });
              throw '循环终止';
            } else {
              data.detailId = list[index - 1].id;
              closeAnswer();
              QuestionDetail(data.detailId, typeToId(list[index - 1].type));
              throw '循环终止';
            }
          }
        });
      } catch (e) {}
    };

    // 下一题
    const nextQues = () => {
      try {
        data.questionList.some((item, index, list) => {
          if (item.id == data.detailId) {
            if (index + 1 >= list.length) {
              notification.warning({
                message: '这已经是最后一题了',
                duration: 3,
              });
              throw '循环终止';
            } else {
              data.detailId = list[index + 1].id;
              closeAnswer();
              QuestionDetail(data.detailId, typeToId(list[index + 1].type));
              throw '循环终止';
            }
          }
        });
      } catch (e) {}
    };

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

    // 添加到错题库
    async function addErrK() {
      const res = await addRrr({
        quesId: data.quesDetail.id,
        userId: +userinfo.value.id,
      });
      console.log(res);
      if (res.code === 'ITEST-200') {
        notification.success({
          message: '添加成功',
          duration: 3,
        });
      } else {
        notification.error({
          message: '添加失败，请稍后再试',
          duration: 3,
        });
      }
    }

    // 添加到收藏夹
    async function addCollK() {
      const res = await addCollection({
        questionId: data.quesDetail.id,
        userId: +userinfo.value.id,
      });
      console.log(res);
      if (res.code === 'ITEST-200') {
        notification.success({
          message: '添加成功',
          duration: 3,
        });
      } else {
        notification.error({
          message: '添加失败，请稍后再试',
          duration: 3,
        });
      }
    }

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
          addErrK();
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
            message: '答案错误 题目自动添加到错题库中...',
            duration: 3,
          });
          addErrK();
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
            message: '答案错误 题目自动添加到错题库中...',
            duration: 3,
          });
        }
      }
    };

    function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
      return [
        {
          label: '查看',
          color: 'success',
          onClick: questionDetail.bind(null, record),
        },
        {
          label: '删除',
          color: 'success',
          onClick: del.bind(null, record),
        },
        // {
        //   label: '编辑',
        //   color: 'success',
        //   onClick: updateQuestionDetail.bind(null, record),
        // },
        // {
        //   label: '编辑',
        //   disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
        //   onClick: handleEdit.bind(null, record),
        // },
      ];
    }

    async function del(record) {
      console.log(record);
      //  const res = await deleteQuestionDetail({questionId: record.id});
      //  console.log(res)
    }

    async function updateQuestionDetail(record) {
      console.log(record);
      //  const res = await deleteQuestionDetail({questionId: record.id});
      //  console.log(res)
    }

    function handleEdit(record: EditRecordRow) {
      currentEditKeyRef.value = record.key;
      record.onEdit?.(true);
    }
    function handleCancel(record: EditRecordRow) {
      currentEditKeyRef.value = '';
      record.onEdit?.(false, false);
    }
    async function handleSave(record: EditRecordRow) {
      // 校验
      msg.loading({ content: '正在保存...', duration: 0, key: 'saving' });
      // const valid = await record.onValid?.();
      // if (valid) {
      try {
        // const data = cloneDeep(record.editValueRefs);
        // console.log(data);
        const res = await deleteQuestionDetail({ questionId: record.id });
        console.log(res);
        //TODO 此处将数据提交给服务器保存
        // ...
        // 保存之后提交编辑状态
        const pass = await record.onEdit?.(false, true);
        if (pass) {
          currentEditKeyRef.value = '';
        }
        msg.success({ content: '数据已保存', key: 'saving' });
      } catch (error) {
        msg.error({ content: '保存失败', key: 'saving' });
      }
      // } else {
      // msg.error({ content: '请填写正确的数据', key: 'saving' });
      // }
    }

    const lookAnswer = () => {
      data.answerIf = true;
    };

    const closeAnswer = () => {
      data.answerIf = false;
    };

    // 按时间排序
    const sortByTime = () => {
      console.log('排序');
      data.obj.orderRule = (data.obj.orderRule + 1) % 2;
      data.obj.pageNum = getPaginationRef().current;
      data.obj.pageSize = getPaginationRef().pageSize;
      getQuestions();
    };
    return {
      prefixCls: 'list-card',
      getQuestions,
      selectQuestions,
      data,
      pagination,
      register,
      register1,
      questionDetail,
      registerTable,
      pageChange,
      resetQuestions,
      exit,
      QuestionDetail,
      lastQues,
      nextQues,
      typeToId,
      addErrK,
      addCollK,
      getContent,
      handleSubmit,
      createActions,
      lookAnswer,
      closeAnswer,
      sortByTime,
      del,
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
