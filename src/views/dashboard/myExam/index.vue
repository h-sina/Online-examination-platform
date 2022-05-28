<template>
  <div style="padding: 20px">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" :disabled="disabledCenter">
        <template #tab>
          <span>
            <apple-outlined />试卷中心
          </span>
        </template>
        <a-row :gutter="16">
          <a-card
            style="width: 300px; margin: 10px"
            :loading="loading"
            v-for="i in examList"
            :title="`${i.title}`"
            :span="8"
          >
            <p>{{ i.teacherName }}</p>
            <!-- <p>{{ i.title }}</p> -->
            <!-- <p>{{ i.endTime }} - {{ i.startTime }}</p> -->
            <p>{{ i.startTime }}</p>
            <p>{{ i.endTime }}</p>
            <a-button
              shape="round"
              type="primary"
              style="margin-top: 16px"
              @click="enterExam(i.id)"
            >进入考试</a-button>
          </a-card>
        </a-row>
        <a-empty v-show="!examList" />
      </a-tab-pane>
      <a-tab-pane key="2" :disabled="disabledExam">
        <template #tab>
          <span>
            <apple-outlined />答题中心
          </span>
        </template>
        <Answer :paperId="paperId" @subExam="submitExam" />
        <!-- <a-button shape="round" @click="submitExam" class="m-5">提交试卷</a-button>
        <a-button shape="round" @click="submitExam" class="m-5">预览试卷</a-button>-->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, toRefs } from 'vue';
// import { createFakeUserList } from '/@/../mock/falseData.ts';
import { getExamList } from '/@/api/sys/user';

import Answer from './Answer.vue';

import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();
import { baseHandler } from '/@/layouts/default/setting/handler';
import { HandlerEnum } from '/@/layouts/default/setting/enum';
import { submitExam } from '/@/api/exam/exam';
export default defineComponent({
  components: { Answer },
  setup() {
    const loading = ref(true);
    const EnterExamLoading = ref(false);
    const activeKey = ref('1');
    const data = reactive({
      examList: [],
      // empty: false,
      // loading: false,
      disabledCenter: false,
      disabledExam: true,
      paperId: 0,
      answers: [
        {
          bigQuesId: 0,
          bigQuesOrderId: 0,
          corrected: 0,
          examId: 0,
          paperId: 0,
          quesId: 0,
          score: 0,
          userAnswer: 'string',
        },
      ],
    });
    onMounted(() => {
      // data.examList = getExamList();
      // 加载试卷列表
      getExamsList();
      loading.value = false;
    });

    async function getExamsList() {
      let res = await getExamList();
      data.examList = res.data;
      console.log(res);
    }
    const enterExam = (id) => {
      data.paperId = id;
      // 显示加载loading
      EnterExamLoading.value = true;

      // 加载试卷资源
      activeKey.value = '2';
      //
      data.disabledCenter = true;
      // 跳转tab

      // 全屏显示
      baseHandler(HandlerEnum.FULL_CONTENT, true);
    };
    const submitExam = () => {
      data.disabledCenter = false;
      data.disabledExam = true;
      activeKey.value = '1';

      baseHandler(HandlerEnum.FULL_CONTENT, false);
      // try {
      //   // handleExam();
      //   notification.success({
      //     message: '提交试卷成功！',
      //     duration: 3,
      //   });
      // } catch (e) {
      //   notification.error({
      //     message: e,
      //     duration: 3,
      //   });
      // }
    };
    async function handleExam() {
      let res = await submitExam(data.paperId, data.answers);
      console.log(res);
    }
    return {
      loading,
      EnterExamLoading,
      ...toRefs(data),
      enterExam,
      activeKey,
      submitExam,
    };
  },
});
</script>
