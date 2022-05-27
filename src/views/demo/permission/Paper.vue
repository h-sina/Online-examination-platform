<template>
  <div>
    <a-button shape="round" type="button" class="m-5" @click="exit">返回</a-button>
    <a-button shape="round" type="button" class="m-5" @click="sub">提交</a-button>
    <a-list
      item-layout="horizontal"
      :data-source="list"
      class="demo-loadmore-list"
      :loading="loading"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card :title="'第' + item.orderId + '大题-' + item.name + '-' + item.totalScore + '分'">
            <ul v-for="(i, index) in item.quesList">
              <a-list-item-meta>
                <template #title>
                  <b>小题{{ index + 1 }}</b>
                </template>
              </a-list-item-meta>
              <li class="m-3">{{ i.content }}</li>题目答案
              <li class="m-3">
                <ul v-for="j in i.answerList">
                  <li>{{ j }}</li>
                </ul>
              </li>学生答案
              <li class="m-3">
                <ul v-for="j in i.stuAnswerList">
                  <li>{{ j }}</li>
                </ul>
              </li>题目解析
              <li class="m-3">{{ i.analysis }}</li>
              <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="10" />
              当前值：{{
              value
              }}
            </ul>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';
import { getExamByPaperIdAndStuId, submitExamByPaperIdAndStuId } from '/@/api/exam/exam';

export default defineComponent({
  props: {
    paperId: {
      type: String,
      required: true,
    },
    stuId: {
      type: String,
      required: true,
    },
  },
  emits: ['ret'],
  setup(props, actions) {
    onMounted(() => {
      console.log(props.paperId, props.stuId);
      get(props.paperId, props.stuId);
    });
    const data = reactive({
      list: [],
      result: [],
      obj: {
        score: 0,
        solutionId: 0,
      },
      loading: true,
    });
    async function get(paperId, stuId) {
      let res = await getExamByPaperIdAndStuId(paperId, stuId);
      console.log(res);
      if (res.code === 'ITEST-200') {
        data.list = res.data.correctQuesVos;
        data.loading = false;
      }
    }
    const exit = () => {
      actions.emit('ret');
    };
    const sub = () => {
      submitExam();
    };
    async function submitExam() {
      let res = await submitExamByPaperIdAndStuId(props.stuId, props.paperId, data.result);
      console.log(res);
    }
    return {
      ...toRefs(data),
      exit,
      sub,
    };
  },
});
</script>

<style scoped>
.demo-loadmore-list {
  width: 90%;
  margin: 20px;
}
</style>
