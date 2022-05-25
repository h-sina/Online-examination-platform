<template>
  <a-radio-group v-model:value="answer" @change="submit">
    <a-radio name="answer" value="1">对</a-radio>
    <a-radio name="answer" value="0">错</a-radio>
  </a-radio-group>
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
  },
  emits: ['score'],
  setup (props, actions) {
    onMounted(() => {
      data.answer = props.value;
    });
    const data = reactive({
      answer: props.value,
    });
    const submit = () => {
      getdetail(props.questionId, props.typeId);
    };
    async function getdetail (id, type) {
      let res = await getQuestionDetail(id, type);
      if (res.code == 'ITEST-200') {
        actions.emit('score', res.data.answer == data.answer, id, data.answer, 1);
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
