<template>
  <a-input v-model:value="answer" @change="submit" />
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
      answer: -1,
    });
    const submit = () => {
      getdetail(props.questionId, props.typeId);
    };
    async function getdetail (id, type) {
      let res = await getQuestionDetail(id, type);
      if (res.code == 'ITEST-200') {
        // actions.emit('score', res.data.answer == data.answer, id);
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
