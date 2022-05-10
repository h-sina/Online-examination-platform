<template>
  <a-checkbox-group v-model:value="answer" @change="submit">
    <a-checkbox name="answer" value="a">A</a-checkbox>
    <a-checkbox name="answer" value="b">B</a-checkbox>
    <a-checkbox name="answer" value="c">C</a-checkbox>
    <a-checkbox name="answer" value="d">D</a-checkbox>
  </a-checkbox-group>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { getQuestionDetail } from '/@/api/question/question';
export default {
  props: {
    questionId: {
      type: String,
      required: true,
    },
    typeId: {
      type: Number,
      required: true,
    },
  },
  emits: ['score'],
  setup (props, actions) {
    const data = reactive({
      answer: [],
    });
    const submit = () => {
      getdetail(props.questionId, props.typeId);
    };
    async function getdetail (id, type) {
      let res = await getQuestionDetail(id, type);
      if (res.code == 'ITEST-200') {
        console.log(Object.values(data.answer).sort().join(''));
        console.log(res.data.rightAnswer);
        actions.emit(
          'score',
          res.data.rightAnswer == Object.values(data.answer).sort().join(''),
          id,
        );
      } else {
      }
    }
    return {
      ...toRefs(data),
      submit,
    };
  },
};
</script>
