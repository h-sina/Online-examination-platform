<template>
  <div style="padding: 20px">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1">
        <template #tab>
          <span>
            <apple-outlined />所有课程
          </span>
        </template>
        <a-list v-show="visible">
          <a-row :gutter="16">
            <a-card
              style="width: 260px; margin: 10px"
              :loading="loading"
              v-for="i in list"
              :title="`${i.course}`"
              :span="8"
            >
              <template #cover>
                <img alt="课程图片" :src="i.pic" />
              </template>
              <p>{{ i.teacherName }}</p>
              <p>{{ i.startTime }}</p>
              <p>{{ i.endTime }}</p>
              <a-button
                shape="round"
                type="primary"
                style="margin-top: 16px"
                @click="enterClass(i.id)"
              >进入课程</a-button>
            </a-card>
          </a-row>
        </a-list>
        <a-empty v-show="list.length === 0" />
      </a-tab-pane>
      <a-tab-pane key="2" :disabled="disabledCenter">
        <template #tab>
          <span>
            <apple-outlined />课程中心
          </span>
        </template>
        <ClassIndex :classId="classId" @returnMyClass="changeVisiable" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue';
import Icon from '/@/components/Icon/index';
import { cardList } from './data';
import { PageWrapper } from '/@/components/Page';
import { Card, Row, Col, List } from 'ant-design-vue';
import { getClassList, getClassIndex, getStudentList, getExamList } from '/@/api/class/class';
import ClassIndex from './ClassIndex.vue';

export default defineComponent({
  components: {
    Icon,
    PageWrapper,
    [Card.name]: Card,
    [List.name]: List,
    [List.Item.name]: List.Item,
    [Row.name]: Row,
    [Col.name]: Col,
    ClassIndex,
  },
  setup() {
    const activeKey = ref('1');
    const data = reactive({
      list: [],
      visible: true,
      indexList: [],
      stuList: [],
      examList: [],
      classId: '',
      disabledCenter: true,
    });
    onMounted(() => {
      getClasslist();
    });
    async function getClasslist() {
      let res = await getClassList();
      console.log(res);
      data.list = res.data;
      console.log(data.list);
    }
    const enterClass = (id) => {
      data.classId = id;
      console.log('enter class');
      // data.visible = false;
      activeKey.value = '2';
      // data.disabledCenter = true;
      // getClassIndex1(data.classId);
      // getStudentList1(data.classId);
      // getExamList1(data.classId);
    };

    const changeVisiable = () => {
      data.visible = !data.visible;
    };
    return {
      ...toRefs(data),
      prefixCls: 'list-card',
      enterClass,
      changeVisiable,
      activeKey,
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
