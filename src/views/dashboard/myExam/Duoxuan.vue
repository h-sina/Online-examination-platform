<template>
  <a-checkbox-group v-model:value="answer" @change="submit">
    <!-- <a-checkbox name="answer" v-for="(i, index) in select" :value="index">{{ i }}</a-checkbox> -->
    <a-checkbox name="answer" value="a">{{ select ? select[0] : '' }}</a-checkbox>
    <a-checkbox name="answer" value="b">{{ select ? select[1] : '' }}</a-checkbox>
    <a-checkbox name="answer" value="c">{{ select ? select[2] : '' }}</a-checkbox>
    <a-checkbox name="answer" value="d">{{ select ? select[3] : '' }}</a-checkbox>
  </a-checkbox-group>
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
    const data = reactive({
      answer: [],
      select: [],
    });
    onMounted(() => {
      data.select = props.select;

      data.answer = props.value;
    });
    const submit = () => {
      // console.log(props.value);
      // console.log(data.answer);
      getdetail(props.questionId, props.typeId);
    };
    async function getdetail (id, type) {
      let res = await getQuestionDetail(id, type);
      if (res.code == 'ITEST-200') {
        // console.log(Object.values(data.answer).sort().join(''));
        actions.emit(
          'score',
          res.data.rightAnswer == Object.values(data.answer).sort().join(''),
          id,
          Object.values(data.answer).sort().join(''),
          1,
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
