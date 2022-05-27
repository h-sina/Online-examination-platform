<template>
  <a-input v-model:value="answer" @change="submit" placeholder="空格隔开" />
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
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
    value: {
      type: String,
      required: true,
    },
    answerNum: {
      type: Number,
      required: true,
    },
  },
  emits: ['score'],
  setup (props, actions) {
    onMounted(() => {
      let answer = props.value;
      if (answer && answer != '') {
        answer = answer.split('');
        answer.splice(0, 1);
        answer.splice(answer.length - 1);
        answer = answer.join('').split(',').join(' ');
      }
      data.answer = answer;
    });
    const data = reactive({
      answer: '',
    });
    const submit = () => {
      getdetail(props.questionId, props.typeId);
    };
    async function getdetail (id, type) {
      // let res = await getQuestionDetail(id, type);
      // if (res.code == 'ITEST-200') {
      //   // actions.emit('score', res.data.answer == data.answer, id);
      // } else {
      // }
      let answer = '[' + data.answer.split(' ').toString() + ']';
      actions.emit('score', '主观题', id, answer, 0);
    }
    return {
      ...toRefs(data),
      submit,
    };
  },
};
</script>
