<template>
  <div>
    <a-button shape="round" type="button" class="m-5" @click="exit">返回</a-button>
    <a-button shape="round" type="button" class="m-5" @click="sub">提交</a-button>
    <a-typography-title :level="2" class="m-5">{{ list.examTitle }}批卷中</a-typography-title>
    <a-list
      item-layout="horizontal"
      :data-source="list.correctQuesVos"
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
    <a-button shape="round" type="button" class="m-5" @click="sub">提交</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';
import { getExamByPaperIdAndStuId, submitExamByPaperIdAndStuId } from '/@/api/exam/exam';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();
export default defineComponent({
  props: {
    paperId: {
      type: String,
      required: true,
    },
    stuId: {
      type: String,
      required: true,
    },
  },
  emits: ['ret'],
  setup(props, actions) {
    onMounted(() => {
      console.log(props.paperId, props.stuId);
      get(props.paperId, props.stuId);
    });
    const data = reactive({
      list: {},
      result: [],
      obj: {
        score: 0,
        solutionId: 0,
      },
      loading: true,
      score: [],
    });
    async function get(paperId, stuId) {
      let res = await getExamByPaperIdAndStuId(paperId, stuId);
      console.log(res);
      if (res.code === 'ITEST-200') {
        data.list = res.data;
        data.loading = false;
      }
      let q = data.list.correctQuesVos;
      for (let i = 0; i < q.length; i++) {
        for (let j = 0; j < q[i].quesList.length; j++) {
          console.log(q[i].quesList[j]);
          data.result.push({
            score: 0,
            solutionId: q[i].quesList[j].solutionId,
          });
          data.score.push(0);
        }
      }
      console.log(data.result);
    }
    const exit = () => {
      actions.emit('ret');
    };
    const sub = () => {
      data.score.forEach((i, index) => {
        data.result[index].score = i;
      });
      console.log(data.result);
      submitExam();
    };
    async function submitExam() {
      let res = await submitExamByPaperIdAndStuId(props.stuId, props.paperId, data.result);
      console.log(res);
      if (res.code === 'ITEST-200') {
        exit();
        notification.success({
          message: '提交成功',
          duration: 3,
        });
      } else {
        notification.error({
          message: '创建失败请联系工作人员',
          duration: 3,
        });
      }
    }

    return {
      ...toRefs(data),
      exit,
      sub,
      submitExam,
    };
  },
});
</script>

<style scoped>
.demo-loadmore-list {
  width: 90%;
  margin: 20px;
}
</style>
