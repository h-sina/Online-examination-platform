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
        <a-button shape="round" type="primary" @click="submit">提交试卷</a-button>
        <a-modal v-model:visible="visible" title="全卷预览" @ok="handleOk">
          <div v-for="i in list" style="margin: 10px">
            <div style="margin: 10px">
              <a>{{ i.name }}</a>
            </div>

            <a-button
              v-for="(j, index) in i.quesList"
              style="margin: 10px"
              :type="finished(j.id)"
              @click="jump(i.orderId)"
            >{{ 1 + index }}</a-button>
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
      <a-list item-layout="horizontal" :data-source="listCurrent.quesList" :loading="loading">
        <template #renderItem="{ item, index }">
          <a-list-item>
            <a-list-item-meta>
              <template #avatar>{{ 1 + index }}.</template>
              <template #title>{{ item.content }}</template>
            </a-list-item-meta>
          </a-list-item>
          <Panduan
            :questionId="item.id"
            :typeId="listCurrent.type"
            :value="getValue(item.id)"
            @score="computedScore"
            v-if="listCurrent.type === 1"
          />
          <Danxuan
            :select="item.selectionList"
            :questionId="item.id"
            :typeId="listCurrent.type"
            :value="getValue(item.id)"
            @score="computedScore"
            v-if="listCurrent.type === 2"
          />
          <Duoxuan
            :select="item.selectionList"
            :questionId="item.id"
            :typeId="listCurrent.type"
            :value="getValue(item.id)"
            @score="computedScore"
            v-if="listCurrent.type === 3"
          />
          <Tiank
            :questionId="item.id"
            :typeId="listCurrent.type"
            :value="getValue(item.id)"
            @score="computedScore"
            v-if="listCurrent.type === 4"
          />
          <Lunshu
            :questionId="item.id"
            :typeId="listCurrent.type"
            :value="getValue(item.id)"
            @score="computedScore"
            v-if="listCurrent.type === 5"
          />
        </template>
      </a-list>
      <!-- 答题区域 -->
    </a-page-header>
  </div>
</template>
<script lang="ts">
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons-vue';

import { defineComponent, reactive, ref, onMounted, onUnmounted, toRefs, computed } from 'vue';

import { getExam, submitExam } from '/@/api/exam/exam';

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
      examRe: [],
      examObj: {
        bigQuesId: 0,
        bigQuesOrderId: 0,
        corrected: 0,
        examId: 0,
        quesId: 0,
        score: 0,
        userAnswer: '',
        paperId: 0,
      },
      allNum: 0,
      loading: true,
    });
    onMounted(() => {
      getExams();
    });
    // 根据试卷ID获取试卷
    async function getExams() {
      // props.paperId
      let res = await getExam(props.paperId);

      if (res.code === 'ITEST-200') {
        data.list = res.data.bigQuesVoList;
        data.creatorId = res.data.creatorId;
        data.description = res.data.description;
        data.id = res.data.id;
        data.name = res.data.name;
        data.list.forEach((i) => {
          data.allNum += i.quesList.length;
        });
        chuli(res.data);
        currentBigQues(data.cur);
      }
    }
    const chuli = (res) => {
      data.examObj.paperId = res.id;
      data.examObj.examId = props.paperId;
    };
    // 上一题操作
    let timer;
    const last = () => {
      if (data.cur > 0) {
        currentBigQues(--data.cur);
      } else {
        if (!timer) {
          notification.warning({
            message: '已经是第一题了',
            duration: 3,
          });
          timer = 1;
          setTimeout(() => {
            timer = null;
          }, 2000);
        }
      }
    };
    // 下一题操作
    const next = () => {
      if (data.list.length - 1 > data.cur) {
        currentBigQues(++data.cur);
      } else {
        if (!timer) {
          notification.warning({
            message: '已经是最后一题了',
            duration: 3,
          });
          timer = 1;
          setTimeout(() => {
            timer = null;
          }, 2000);
        }
      }
    };
    // 当前页面呈现的大题
    const currentBigQues = (id) => {
      data.listCurrent = data.list[id];
      data.loading = false;
    };
    // 全卷预览的显示
    const lookAll = () => {
      data.visible = !data.visible;
    };
    // 计算属性计算每道单题的分数
    const oneScore = computed(() => data.listCurrent.totalScore / data.listCurrent.quesList.length);
    const m = new Map();
    // 每题改变计算触发计算分值
    const computedScore = (answer, id, answerRe, corrected) => {
      if (answer) {
        data.score += oneScore.value;
        m.set(id, 1);
      } else {
        if (m.has(id)) data.score -= oneScore.value;
      }
      if (data.examRe.length !== 0) {
        let f = 0;
        for (let i = 0; i < data.examRe.length; i++) {
          if (data.examRe[i].quesId === id) {
            if (answerRe == '') {
              console.log('null-qudiao');
              data.examRe.splice(i, 1);
            } else {
              data.examRe[i].score = data.score;
              data.examRe[i].userAnswer = answerRe;
            }
            f = 1;
            return;
          }
        }
        if (f == 0) {
          let obj = JSON.parse(JSON.stringify(data.examObj));
          obj.score = data.score;
          obj.userAnswer = answerRe;
          obj.corrected = corrected;
          obj.bigQuesOrderId = data.listCurrent.orderId;
          obj.bigQuesId = data.listCurrent.id;
          obj.quesId = id;
          data.examRe.push(obj);
        }
      } else {
        let obj = JSON.parse(JSON.stringify(data.examObj));
        obj.score = data.score;
        obj.userAnswer = answerRe;
        obj.corrected = corrected;
        obj.bigQuesOrderId = data.listCurrent.orderId;
        obj.bigQuesId = data.listCurrent.id;
        obj.quesId = id;
        data.examRe.push(obj);
      }
    };

    // 全卷预览的OK按钮 - 提交试卷
    const handleOk = () => {
      lookAll();
    };
    // 提交试卷
    const submit = () => {
      if (data.examRe.length !== data.allNum) {
        notification.warning({
          message: '答题未全部完成！',
          duration: 3,
        });
        return;
      }
      subExam();
    };
    async function subExam() {
      console.log(data.examRe);
      let res = await submitExam(props.paperId, data.examRe);
      if (res.code == 'ITEST-200') {
        notification.success({
          message: '提交试卷成功',
          duration: 3,
        });
        actions.emit('subExam');
      } else {
        notification.error({
          message: '出错啦，请联系管理员',
          duration: 3,
        });
      }
    }
    const getValue = (id) => {
      for (let i in data.examRe) {
        if (data.examRe[i].quesId === id) {
          return data.examRe[i].userAnswer;
        }
      }
    };

    const finished = (id) => {
      // data.examRe.forEach((i) => {
      //   console.log(i);
      //   if (i.quesId === id) {
      //     return 'primary';
      //   }
      // });
      for (let i = 0; i < data.examRe.length; i++) {
        if (data.examRe[i].quesId === id) {
          return 'primary';
        }
      }
    };
    const jump = (id) => {
      data.visible = !data.visible;
      data.loading = true;
      data.cur = id - 1;
      currentBigQues(data.cur);
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
      submit,
      getValue,

      finished,
      jump,
    };
  },
});
</script>
<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
