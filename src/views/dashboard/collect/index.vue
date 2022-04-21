<template>
  <PageWrapper :class="prefixCls" title="收藏">
    <template #headerContent>
      健康的身体是实现目标的基石。
      <div :class="`${prefixCls}__link`"></div>
    </template>
    <div class="p-4">
      <BasicTable
        @register="registerTable"
        :dataSource="data.colList"
        @change="pageChange"
        @row-click="createActions"
      />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, reactive, computed } from 'vue';
import Icon from '/@/components/Icon/index';
import { cardList } from './data';
import { PageWrapper } from '/@/components/Page';
import { Card, Row, Col, List } from 'ant-design-vue';
import { getCollection, delCollection, addCollection } from '/@/api/info/info';
import { useTable } from '/@/components/Table';
import { getBasicColumns, getBasicData } from './tableData';
import { BasicTable } from '/@/components/Table';
import { useMessage } from '/@/hooks/web/useMessage';

import { treeOptionsListApi } from '/@/api/demo/tree';
import { optionsListApi } from '/@/api/demo/select';

import { useUserStore } from '/@/store/modules/user';

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
  },
  setup() {
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
      title: '点击要删除的行 注意不能撤销 没有确认框 请谨慎删除！',
      titleHelpMessage: '温馨提醒',
      columns: getBasicColumns(),
      showTableSetting: true,
      pagination: pagination,
      showTableSetting: true,
      tableSetting: { fullScreen: true },
    });

    const data = reactive({
      colList: [],
      obj: {
        pageNum: 1,
        pageSize: 10,
      },
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

    async function createActions(values) {
      console.log(userinfo.value);
      const res = await delCollection({ questionId: values.id, userId: userinfo.value.id });
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

    onMounted(() => {
      getCollections();
    });

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
