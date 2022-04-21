<template>
  <PageWrapper :class="prefixCls" title="题库">
    <template #headerContent>
      热情和欲望可以突破一切难关。
      <div :class="`${prefixCls}__link`">
        <a>
          <Icon icon="bx:bx-paper-plane" color="#1890ff" />
          <span>开始自测</span>
        </a>
        <a>
          <Icon icon="ion:document-text-outline" color="#1890ff" />
          <span>开始错题训练</span>
        </a>
      </div>
    </template>
    <BasicForm
      @register="register"
      @submit="selectQuestions"
      @reset="resetQuestions"
      v-model="level"
      v-if="data.detail"
    />

    <div class="p-4">
      <BasicTable
        @register="registerTable"
        @row-click="questionDetail"
        :dataSource="data.questionList"
        v-if="data.detail"
        @change="pageChange"
      />
    </div>

    <div v-if="!data.detail">
      <div>ID{{ data.quesDetail.id }}</div>
      <h1>答案{{ data.quesDetail.answer }}</h1>
      <h1>问题{{ data.quesDetail.content }}</h1>

      <button @click="lastQues">上一个</button>
      <button @click="nextQues">下一个</button>
      <button @click="addErrK">添加到错题库</button>
      <button @click="addCollK">添加到收藏夹</button>
    </div>

    <button v-if="!data.detail" @click="exit">退出训练</button>

    <!-- autoFocusFirstItem
      :labelWidth="200"
      :schemas="schemas"
    :actionColOptions="{ span: 24 }"-->
    <BasicForm
      v-if="!data.detail"
      @register="register1"
      @submit="handleSubmit"
      @reset="handleReset"
      :schemas="data.schemas"
    />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, computed } from 'vue';
import Icon from '/@/components/Icon/index';
import { cardList } from './data';
import { PageWrapper } from '/@/components/Page';
import { Card, Row, Col, List } from 'ant-design-vue';
import { getQuestion } from '/@/api/question/question';
import { BasicTable, ColumnChangeParam, ActionItem, useTable } from '/@/components/Table';
import { getBasicColumns, getBasicData } from './tableData';
import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
import { useRouter } from 'vue-router';
import { demoListApi } from '/@/api/demo/table';
import { getQuestionDetail } from '/@/api/question/question';
import { useMessage } from '/@/hooks/web/useMessage';
import { addRrr, addCollection } from '/@/api/info/info';

const { notification } = useMessage();
import { useUserStore } from '/@/store/modules/user';

const userStore = useUserStore();
const userinfo = computed(() => userStore.getUserInfo);
const getSchamas = (): FormSchema[] => {
  return [
    {
      field: 'level',
      component: 'Select',
      label: 'level',
      colProps: {
        span: 8,
      },
      componentProps: {
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
      },
    },
    {
      field: 'type',
      component: 'Select',
      label: 'type',
      colProps: {
        span: 8,
      },
      componentProps: {
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
  },

  setup() {
    // 选项注册
    const [register1, { setFieldsValue, getFieldsValue, submit }] = useForm({
      labelWidth: 120,
      submitButtonOptions: {
        text: '提交',
      },
    });

    // 筛选表单配置
    const [register] = useForm({
      labelWidth: 120,
      schemas: getSchamas(),
      actionColOptions: {
        span: 24,
      },
      compact: true,
      showAdvancedButton: true,
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
    });

    // 点击筛选按钮
    const selectQuestions = (values) => {
      if (values) {
        console.log(values);
        data.formData = values;
        if (data.formData.level != undefined) {
          data.obj.level = +data.formData.level;
        } else {
          data.obj.level = 0;
        }
        if (data.formData.type != undefined) {
          data.obj.type = +data.formData.type;
        } else {
          data.obj.type = 0;
        }
        getQuestions();
      }
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

    const handleSubmit = () => {
      console.log(getFieldsValue());
      if (data.quesDetail.type === 1) {
        if (data.quesDetail.answer == getFieldsValue().answer1) {
          setFieldsValue({ answer1: null });
          notification.success({
            message: '答案正确',
            duration: 3,
          });
          nextQues();
        } else {
          setFieldsValue({ answer1: null });
          notification.success({
            message: '答案错误 即将添加到错题库...',
            duration: 3,
          });
          addErrK();
        }
      }
    };

    return {
      prefixCls: 'list-card',
      list: cardList,
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
