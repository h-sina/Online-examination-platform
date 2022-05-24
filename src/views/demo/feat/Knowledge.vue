<template>
  <div>
    <a-button shape="round" class="editable-add-btn m-5" @click="handleAdd">添加知识点</a-button>
    <a-table bordered :data-source="knowledgePointList" :columns="columns" class="m-5">
      <template
        v-for="col in ['id', 'courseName', 'name', 'pointDescribe', 'superPointName']"
        #[col]="{ text, record }"
        :key="col"
      >
        <div>
          <a-input
            v-if="editableData[record.id]"
            v-model:value="editableData[record.id][col]"
            style="margin: -5px 0"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>

      <template #operation="{ record }">
        <a-popconfirm
          v-if="knowledgePointList.length"
          title="Sure to delete?"
          @confirm="onDelete(record.id)"
        >
          <a>删除</a>
        </a-popconfirm>
      </template>

      <template #operation1="{ record }">
        <div class="editable-row-operations">
          <span v-if="editableData[record.id]">
            <a @click="save(record.id)">保存</a>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.id)">编辑</a>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  Ref,
  ref,
  UnwrapRef,
  toRefs,
  onMounted,
  toRefs,
} from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';
import {
  getknowledgeList,
  addknowledge,
  deltknowledge,
  updateknowledge,
  getknowledgeById,
} from '/@/api/knowledgePoint/knowledgePoint';

import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        width: '10%',
        slots: { customRender: 'id' },
      },
      {
        title: 'courseName',
        dataIndex: 'courseName',
        slots: { customRender: 'courseName' },
      },
      {
        title: 'name',
        dataIndex: 'name',
        slots: { customRender: 'name' },
      },
      {
        title: 'pointDescribe',
        dataIndex: 'pointDescribe',
        slots: { customRender: 'pointDescribe' },
      },
      {
        title: 'superPointName',
        dataIndex: 'superPointName',
        slots: { customRender: 'superPointName' },
      },
      {
        title: '操作1',
        dataIndex: 'operation',
        slots: { customRender: 'operation' },
      },
      {
        title: '操作2',
        dataIndex: 'operation1',
        slots: { customRender: 'operation1' },
      },
    ];
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        name: 'Edward King 0',
        age: 32,
        address: 'London, Park Lane no. 0',
      },
      {
        key: '1',
        name: 'Edward King 1',
        age: 32,
        address: 'London, Park Lane no. 1',
      },
    ]);

    const count = computed(() => dataSource.value.length + 1);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      console.log(key);
      editableData[key] = cloneDeep(data.knowledgePointList.filter((item) => key === item.id)[0]);
      console.log(editableData[key]);
    };

    const save = (key: string) => {
      console.log('save');
      console.log(key);

      // let obj = {
      //   id: 0,
      //   name: 'string',
      //   pointDescribe: 'string',
      //   superPoint: 0,
      // };
      let obj1 = data.knowledgePointList.filter((item) => key === item.id);
      console.log(obj1);
      // obj.id = obj1.id;
      // obj.name = obj1.name;
      // obj.pointDescribe = obj1.pointDescribe;
      // obj.superPoint = obj1.superPoint;
      // console.log(obj);
      Object.assign(
        data.knowledgePointList.filter((item) => key === item.id)[0],
        editableData[key],
      );
      delete editableData[key];
      // delete editableData[key];
      // 更新
      // updateTheKnowledge(obj);
    };

    const onDelete = (key: string) => {
      dataSource.value = dataSource.value.filter((item) => item.key !== key);
      // 删除
      console.log(key);
      delTheKnowledge(key);
      GetknowledgeList();
      data.knowledgePointList = data.knowledgePointList.filter((item) => item.key !== key);
    };
    const handleAdd = () => {
      const newData = {
        name: 'string',
        pointDescribe: 'string',
        superPoint: 0,
      };
      dataSource.value.push(newData);
      // 添加
      data.knowledgePointList.push(newData);
      addTheKnowledge(newData);
    };

    const data = reactive({
      knowledgePointList: [],
    });

    onMounted(() => {
      // 获取知识点列表
      GetknowledgeList();
    });

    async function GetknowledgeList() {
      let res = await getknowledgeList({
        pageNum: 10,
        pageSize: 0,
      });
      console.log(res);
      data.knowledgePointList = res.data.list;
    }

    async function delTheKnowledge(id) {
      let res = await deltknowledge(id);
      console.log(res);
      responseMsg(res);
    }

    async function addTheKnowledge(params) {
      let res = await addknowledge(params);
      console.log(res);
      responseMsg(res);
    }

    async function updateTheKnowledge(params) {
      let res = await updateknowledge(params);
      console.log(res);
      responseMsg(res);
    }

    // 根据返回的数据信息处理反馈
    function responseMsg(res) {
      if (res.code === 'ITEST-200') {
        notification.success({
          message: res.msg,
          duration: 3,
        });
      } else {
        notification.error({
          message: '处理失败请联系工作人员',
          duration: 3,
        });
      }
    }

    return {
      ...toRefs(data),
      columns,
      onDelete,
      handleAdd,
      dataSource,
      editableData,
      count,
      edit,
      save,
    };
  },
});
</script>
<style lang="less">
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
