<template>
  <a-radio-group v-model:value="answer" @change="submit">
    <!-- <a-radio name="answer" v-for="(i, index) in select" :value="index">{{ i }}</a-radio> -->
    <a-radio name="answer" value="a">{{ select ? select[0] : '' }}</a-radio>
    <a-radio name="answer" value="b">{{ select ? select[1] : '' }}</a-radio>
    <a-radio name="answer" value="c">{{ select ? select[2] : '' }}</a-radio>
    <a-radio name="answer" value="d">{{ select ? select[3] : '' }}</a-radio>
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
    select: {
      type: Array,
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
      data.select = props.select;
      data.answer = props.value;
    });
    const data = reactive({
      answer: -1,
      select: [],
    });
    const submit = () => {
      getdetail(props.questionId, props.typeId);
    };
    async function getdetail (id, type) {
      let res = await getQuestionDetail(id, type);
      if (res.code == 'ITEST-200') {
        actions.emit('score', res.data.rightAnswer == data.answer, id, data.answer, 1);
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
