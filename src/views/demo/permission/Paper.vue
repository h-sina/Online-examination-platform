<template>
  <div>
    <a-button shape="round" type="button" class="m-5" @click="exit">返回</a-button>
    <a-button shape="round" type="button" class="m-5" @click="sub">提交</a-button>
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
    });
    async function get(paperId, stuId) {
      let res = await getExamByPaperIdAndStuId(paperId, stuId);
      console.log(res);
      if (res.code === 'ITEST-200') {
        data.list = res.data;
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

<style scoped></style>
