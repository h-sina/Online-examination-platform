<template>
  <div>
    <a-button shape="round" type="button" class="m-5" @click="ret" v-if="!oneExam">返回</a-button>

    <a-list
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="horizontal"
      :data-source="list"
      v-if="!oneExam"
    >
      <!-- <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a @click="enterExam(item.id)">进入该次考试批阅</a>
          </template>
          <a-list-item-meta :description="`开始时间: ${item.startTime}   结束时间: ${item.endTime}`">
            <template #title>
              <a>{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.pic" />
            </template>
          </a-list-item-meta>
          <div>{{ item.state }}&nbsp</div>
          <div>未批改数：{{ item.unCorrected }}</div>
        </a-list-item>
      </template>-->
      <a-row :gutter="16">
        <a-card
          style="width: 260px; margin: 10px"
          :loading="loading"
          v-for="i in list"
          :title="`${i.title}`"
          :span="8"
        >
          <p>开始时间：{{ i.startTime }}</p>
          <p>结束时间：{{ i.endTime }}</p>
          <p>{{ i.state }}</p>
          <p>未批改数：{{ i.unCorrected }}</p>
          <a-button
            shape="round"
            type="primary"
            style="margin-top: 16px"
            @click="enterExam(i.id)"
          >考试批阅</a-button>
        </a-card>
      </a-row>
    </a-list>
    <ExamInclass :id="examId" :paperId="paperId" v-if="oneExam" @exit="exit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';
import { getExamByTeacher } from '/@/api/exam/exam';
import ExamInclass from './ExamInclass.vue';

export default defineComponent({
  components: {
    ExamInclass,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  emits: ['exit'],
  setup(props, actions) {
    onMounted(() => {
      getExamsInOneClass(props.id);
    });
    const data = reactive({
      list: [],
      loading: true,
      oneExam: false,
      examId: '',
      paperId: '',
      // loadingMore: true,
    });
    async function getExamsInOneClass(id) {
      let res = await getExamByTeacher(id);
      console.log(res);
      res.data.map((i) => {
        let state = i.state;
        switch (state) {
          case -1:
            state = '已结束';
            break;
          case 0:
            state = '未开始';
            break;
          case 1:
            state = '进行中';
            break;
          case 2:
            state = '待批阅';
            break;
        }
        i.state = state;
      });
      if (res.code === 'ITEST-200') {
        data.list = res.data;
        data.loading = false;
      }
    }
    const enterExam = (id) => {
      data.oneExam = !data.oneExam;
      data.examId = props.id;
      data.paperId = id;
    };
    const exit = () => {
      data.oneExam = !data.oneExam;
    };
    const ret = () => {
      actions.emit('ret');
    };
    return {
      ...toRefs(data),
      enterExam,
      exit,
      ret,
    };
  },
});
</script>

<style scoped>
.demo-loadmore-list {
  min-height: 350px;
  margin: 20px;
}
</style>
