<template>
  <div class="demo-wrap p-10 m-5">
    <div style="text-align: center">
      <a-typography-title :level="3">
        <PicRightOutlined />
        {{ data.list.examTitle }}
      </a-typography-title>
    </div>

    <a-list
      item-layout="horizontal"
      :data-source="data.list.scoreQuesVos"
      class="demo-loadmore-list"
      :loading="data.loading"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card style="background-color: #f0f2f5; width: 100%">
            <a-typography-title :level="4" class="mb-5">
              第 {{ item.orderId }} 大题 {{ item.name }} （ {{ item.quesList.length }} 道 -总分
              {{ item.totalScore }} 分）
            </a-typography-title>
            <ul v-for="(i, index) in item.quesList">
              <div class="mb-8">
                <a-list-item-meta>
                  <template #title>
                    <div style="display: flex; flex-direction: row; justify-content: space-between">
                      <a-typography-title :level="5">{{ index + 1 }}.{{ i.content }}</a-typography-title>
                      <CheckCircleTwoTone
                        :style="{ fontSize: '20px' }"
                        v-if="i.trueAnswer == i.stuAnswer"
                      />
                      <CloseCircleTwoTone :style="{ fontSize: '20px', color: '#08c' }" v-else />
                    </div>
                  </template>
                </a-list-item-meta>题目答案：
                <li class="m-3">{{ i.trueAnswer }}</li>你的答案：
                <li class="m-3">{{ i.stuAnswer }}</li>题目解析：
                <li class="m-3">{{ i.analysis }}</li>
              </div>
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
import { PicRightOutlined, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons-vue';
export default {
  components: {
    PicRightOutlined,
    CheckCircleTwoTone,
    CloseCircleTwoTone,
  },
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
      loading: true,
    });
    async function lookPaper (examId) {
      let res = await getPapered(examId, userinfo.value.id);
      console.log(res);
      if (res.code === 'ITEST-200') {
        data.list = res.data;
        data.loading = false;
        for (let i in data.list.scoreQuesVos) {
          if (data.list.scoreQuesVos[i].type === 1) {
            for (let j in data.list.scoreQuesVos[i].quesList) {
              let a = data.list.scoreQuesVos[i].quesList[j].stuAnswer;
              let b = data.list.scoreQuesVos[i].quesList[j].trueAnswer;
              data.list.scoreQuesVos[i].quesList[j].stuAnswer = a === 0 ? '错' : '对';
              data.list.scoreQuesVos[i].quesList[j].trueAnswer = b === 0 ? '错' : '对';
            }
          }
        }
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
