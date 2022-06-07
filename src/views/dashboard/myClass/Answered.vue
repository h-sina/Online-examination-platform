<template>
  <div class="demo-wrap p-10 m-5">
    <div style="text-align: center">
      <a-typography-title :level="3">{{ data.list.examTitle }}</a-typography-title>
    </div>

    <a-list
      item-layout="horizontal"
      :data-source="data.list.scoreQuesVos"
      class="demo-loadmore-list"
      :loading="loading"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card
            :title="
              '第' +
              item.orderId +
              '大题-' +
              item.name +
              '（' +
              item.quesList.length +
              '道）' +
              '-总分' +
              item.totalScore +
              '分'
            "
          >
            <ul v-for="(i, index) in item.quesList">
              <a-list-item-meta>
                <template #title>
                  <b>小题{{ index + 1 }}(满分：{{ item.totalScore / item.quesList.length }}分)</b>
                </template>
              </a-list-item-meta>
              <li class="m-3">{{ i.content }}</li>
              <b>题目答案：</b>
              <li class="m-3">
                <ul v-for="j in i.answerList">
                  <li>{{ j }}</li>
                </ul>
              </li>
              <b>{{ list.stuName }}的答案：</b>
              <li class="m-3">
                <ul v-for="j in i.stuAnswerList">
                  <li>{{ j }}</li>
                </ul>
              </li>题目解析：
              <li class="m-3">{{ i.analysis }}</li>
              <!-- @change="changeScore(i.solutionId, score)" -->

              <a-input-number
                id="inputNumber"
                :min="0"
                :max="item.totalScore / item.quesList.length"
                v-model:value="score[index]"
              />
              得分{{
              socre
              }}
              <hr class="m-2" />
            </ul>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue';

import { useRoute } from 'vue-router';
import { getPapered } from '/@/api/exam/exam';
import { useUserStore } from '/@/store/modules/user';

export default {
  setup () {
    const route = useRoute();
    const userStore = useUserStore();
    const userinfo = computed(() => userStore.getUserInfo);

    onMounted(() => {
      data.examId = route.params.examId;
      lookPaper(data.examId);
    });
    const data = reactive({
      list: {},
      examId: '',
    });
    async function lookPaper (examId) {
      let res = await getPapered(examId, userinfo.value.id);
      console.log(res);
      if (res.code === 'ITEST-200') {
        data.list = res.data;
      }
    }
    return {
      data,
    };
  },
};
</script>

<style lang="less" scoped>
.demo-wrap {
  background-color: @component-background;
  border-radius: 10px;
}
</style>
