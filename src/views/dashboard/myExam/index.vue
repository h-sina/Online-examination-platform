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
            <p>{{ i.subject }}</p>
            <p>{{ i.totalScore }}</p>
            <p>{{ i.time }}</p>
            <p>{{ i.startTime }}</p>
            <p>{{ i.endTime }}</p>
            <a-button shape="round" type="primary" style="margin-top: 16px" @click="enterExam">进入考试</a-button>
          </a-card>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" :disabled="disabledExam">
        <template #tab>
          <span>
            <apple-outlined />答题中心
          </span>
        </template>
        <Answer @subExam="submitExam" />
        <!-- <a-button shape="round" @click="submitExam" class="m-5">提交试卷</a-button>
        <a-button shape="round" @click="submitExam" class="m-5">预览试卷</a-button>-->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, toRefs } from 'vue';
import { createFakeUserList } from '/@/../mock/falseData.ts';
import Answer from './Answer.vue';

import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

export default defineComponent({
  components: { Answer },
  setup() {
    const loading = ref(true);
    const EnterExamLoading = ref(false);
    const activeKey = ref('1');
    const data = reactive({
      examList: [],
      disabledCenter: false,
      disabledExam: true,
    });
    onMounted(() => {
      data.examList = createFakeUserList();
      loading.value = false;

      console.log(data.list);
    });
    const enterExam = () => {
      // 显示加载loading
      EnterExamLoading.value = true;

      // 加载试卷资源
      activeKey.value = '2';
      //
      data.disabledCenter = true;
      console.log(activeKey.value);
      // 跳转tab
    };
    const submitExam = () => {
      data.disabledCenter = false;
      data.disabledExam = true;
      activeKey.value = '1';
      notification.success({
        message: '提交试卷成功！',
        duration: 3,
      });
    };
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
