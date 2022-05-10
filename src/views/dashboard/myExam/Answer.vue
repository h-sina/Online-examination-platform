<template>
  <div class="demo-page-header" style="background-color: #f5f5f5; padding: 24px">
    <a-page-header :ghost="false" title="作答" sub-title>
      <!-- TOP栏 上一题 下一题 -->
      <template #extra>
        <a-button @click="last">
          <ArrowLeftOutlined />上一大题
        </a-button>
        <a-button @click="next">
          下一大题
          <ArrowRightOutlined />
        </a-button>
        <a-button type="primary" @click="lookAll">预览全卷</a-button>
        <a-button shape="round" type="primary" @click="submitExam">提交试卷</a-button>
        <a-modal v-model:visible="visible" title="全卷预览" @ok="handleOk" v-for="i in list">
          <div v-for="i in list" style="margin: 10px">
            <div style="margin: 10px">
              <a-button>{{ i.name }}</a-button>
            </div>

            <a-button v-for="(j, index) in i.quesList" style="margin: 10px">{{ 1 + index }}</a-button>
          </div>
        </a-modal>
      </template>
      <!-- TOP栏 上一题 下一题 -->

      <!-- 大题类型 -->
      <a-descriptions size="small" :column="1">
        <a-descriptions-item label>{{ listCurrent.name }}</a-descriptions-item>
      </a-descriptions>
      <!-- 大题类型 -->

      <!-- 答题区域 -->
      <a-list item-layout="horizontal" :data-source="listCurrent.quesList">
        <template #renderItem="{ item, index }">
          <a-list-item>
            <a-list-item-meta>
              <template #avatar>{{ ++index }}.</template>
              <template #title>{{ item.content }}</template>
            </a-list-item-meta>
          </a-list-item>
          <Panduan
            :questionId="item.id"
            :typeId="listCurrent.type"
            @score="computedScore"
            v-show="listCurrent.type === 1"
          />
          <Danxuan
            :questionId="item.id"
            :typeId="listCurrent.type"
            @score="computedScore"
            v-show="listCurrent.type === 2"
          />
          <Duoxuan
            :questionId="item.id"
            :typeId="listCurrent.type"
            @score="computedScore"
            v-show="listCurrent.type === 3"
          />
          <Tiank v-show="listCurrent.type === 4" />
          <Lunshu v-show="listCurrent.type === 5" />
        </template>
      </a-list>
      <!-- 答题区域 -->
    </a-page-header>
  </div>
</template>
<script lang="ts">
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons-vue';

import { defineComponent, reactive, ref, onMounted, onUnmounted, toRefs, computed } from 'vue';

import { GetExam } from '/@/api/exam/exam';

import Danxuan from './Danxuan.vue';
import Panduan from './Panduan.vue';
import Duoxuan from './Duoxuan.vue';
import Tiank from './Tiank.vue';
import Lunshu from './Lunshu.vue';

import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

export default defineComponent({
  components: {
    ArrowRightOutlined,
    ArrowLeftOutlined,
    Danxuan,
    Panduan,
    Duoxuan,
    Tiank,
    Lunshu,
  },
  props: {
    paperId: {
      type: String,
      required: true,
    },
  },
  emits: ['subExam'],
  setup(props, actions) {
    const data = reactive({
      list: [],
      listCurrent: {},
      cur: 0,
      creatorId: 0,
      description: '',
      id: 0,
      name: '',
      type: 0,
      visible: false,
      score: 0,
      examRe: [
        {
          bigQuesId: 0,
          bigQuesOrderId: 0,
          corrected: 0,
          paperId: 0,
          quesId: 0,
          score: 0,
          userAnswer: 'string',
        },
      ],
    });
    onMounted(() => {
      getExam();
    });
    // 根据试卷ID获取试卷
    async function getExam() {
      // props.paperId
      let res = await GetExam(123456789);
      if (res.code === 'ITEST-200') {
        data.list = res.data.bigQuesVoList;
        data.creatorId = res.data.creatorId;
        data.description = res.data.description;
        data.id = res.data.id;
        data.name = res.data.name;
        console.log(data.list);
        currentBigQues(data.cur);
      }
      console.log(res);
    }
    // 上一题操作
    const last = () => {
      console.log('last');
      if (data.cur > 0) {
        currentBigQues();
        currentBigQues(--data.cur);
      } else {
        notification.warning({
          message: '已经是第一题了',
          duration: 3,
        });
      }
    };
    // 下一题操作
    const next = () => {
      if (data.list.length - 1 > data.cur) {
        currentBigQues(++data.cur);
      } else {
        notification.warning({
          message: '已经是最后一题了',
          duration: 3,
        });
      }
    };
    // 当前页面呈现的大题
    const currentBigQues = (id) => {
      data.listCurrent = data.list[id];
    };
    // 全卷预览的显示
    const lookAll = () => {
      data.visible = !data.visible;
    };
    // 计算属性计算每道单题的分数
    const oneScore = computed(() => data.listCurrent.totalScore / data.listCurrent.quesList.length);
    const m = new Map();
    // 每题改变计算触发计算分值
    const computedScore = (answer, id) => {
      if (answer) {
        data.score += oneScore.value;
        m.set(id, 1);
      } else {
        if (m.has(id)) data.score -= oneScore.value;
      }
      console.log(data.score);
    };
    // 全卷预览的OK按钮 - 提交试卷
    const handleOk = () => {
      lookAll();
      console.log('ok');
    };
    // 提交试卷
    const submitExam = () => {
      console.log('submit paper');
      actions.emit('subExam');
    };
    return {
      ...toRefs(data),
      oneScore,
      getExam,
      last,
      next,
      currentBigQues,
      lookAll,
      computedScore,
      handleOk,
      submitExam,
    };
  },
});
</script>
<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
