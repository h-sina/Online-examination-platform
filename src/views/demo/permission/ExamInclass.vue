<template>
  <div>
    <a-button shape="round" type="button" class="m-5" @click="exit" v-if="!visible">返回</a-button>
    <a-list
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="horizontal"
      :data-source="list"
      v-if="!visible"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a @click="mark(item.id)">点击批改</a>
          </template>
          <a-list-item-meta :description="item.userSex">
            <template #title>
              <a>{{ item.studentName }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.pic" />
            </template>
          </a-list-item-meta>
          <div>{{ item.number }}</div>
        </a-list-item>
      </template>
    </a-list>
    <Paper :paperId="paperId" :stuId="stuId" v-if="visible" @ret="ret" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';
import { GetStuByTeacher } from '/@/api/exam/exam';
import Paper from './Paper.vue';
export default defineComponent({
  components: {
    Paper,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    paperId: {
      type: String,
      required: true,
    },
  },
  emits: ['exit'],

  setup(props, actions) {
    onMounted(() => {
      data.paperId = props.paperId;
      getStusInOneClass(props.id);
    });
    const data = reactive({
      list: [],
      loading: true,
      visible: false,
      paperId: '',
      stuId: '',
      // loadingMore: true,
    });
    async function getStusInOneClass(id) {
      let res = await GetStuByTeacher(id);
      console.log(res);
      if (res.code === 'ITEST-200') {
        data.list = res.data;
        data.loading = false;
      }
    }
    const mark = (id) => {
      data.visible = !data.visible;
      data.stuId = id;
    };
    const exit = () => {
      actions.emit('exit');
    };
    const ret = () => {
      data.visible = !data.visible;
    };
    return {
      ...toRefs(data),
      mark,
      exit,
      ret,
    };
  },
});
</script>

<style scoped>
.demo-loadmore-list {
  min-height: 350px;
  margin: 20px 200px 0 200px;
}
</style>
