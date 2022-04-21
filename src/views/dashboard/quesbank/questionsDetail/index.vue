<template>
  <div>{{ type }}</div>
  <div>{{ id }}</div>
  <h1>{{ data.quesDetail.analysis }}</h1>
  <h1>{{ data.quesDetail.answer }}</h1>
  <h1>{{ data.quesDetail.content }}</h1>
  <h1>{{ data.quesDetail.creatorId }}</h1>
  <h1>{{ data.quesDetail.id }}</h1>
  <h1>{{ data.quesDetail.isFavorited }}</h1>
  <h1>{{ data.quesDetail.knowledgeName }}</h1>
  <h1>{{ data.quesDetail.lastUpdatedTime }}</h1>
  <h1>{{ data.quesDetail.level }}</h1>
  <h1>{{ data.quesDetail.permission }}</h1>
  <h1>{{ data.quesDetail.state }}</h1>
  <h1>{{ data.quesDetail.title }}</h1>
  <h1>{{ data.quesDetail.type }}</h1>

  <button @click="lastQues">上一个</button>
  <button @click="nextQues">下一个</button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getQuestionDetail } from '/@/api/question/question';

export default defineComponent({
  name: 'QuestionsDetail',
  setup() {
    const route = useRouter();
    const type = ref(route.currentRoute.value.query.type);
    const id = ref(route.currentRoute.value.query.id);

    const data = reactive({
      quesDetail: {},
    });
    async function QuestionDetail() {
      const res = await getQuestionDetail(type.value, id.value);
      data.quesDetail = res.data;
      console.log(res);
      console.log('发起请求拿试题详情');
      console.log(id.value - 1);
    }
    const lastQues = () => {
      id.value = id.value - 1;
      QuestionDetail();
    };
    const nextQues = () => {
      id.value = id.value + 1;
      QuestionDetail();
    };
    onMounted(() => {
      QuestionDetail();
    });

    return {
      route,
      QuestionDetail,
      type,
      id,
      data,
      lastQues,
      nextQues,
    };
  },
});
</script>

<style scoped></style>
