<template>
  <div>
    <div class="flex justify-center">
      <div class="demo-wrap p-10 m-5">
        <div v-show="data.showF">
          analysis
          <a-input type="text" :value="data.formF.analysis" />
          <br />content
          <a-input type="text" :value="data.formF.content" />
          <br />knowledgePointId
          <a-input type="text" :value="data.formF.knowledgePointId" />

          <br />title
          <a-input type="text" :value="data.formF.title" />

          <br />level
          <div v-for="(item, index) in data.levelList">
            <input
              type="radio"
              name="level"
              :value="++index"
              v-model="data.formF.level"
              :label="item"
            />
            {{ item }}
          </div>

          <br />permission
          <div v-for="(item, index) in data.permissionList">
            <input
              type="radio"
              name="permission"
              :value="--index"
              v-model="data.formF.permission"
              :label="item"
            />
            {{ item }}
          </div>

          <br />type
          <div v-for="(item, index) in data.typeList">
            <input
              type="radio"
              name="type"
              :value="++index"
              v-model="data.formF.type"
              :label="item"
            />
            {{ item }}
          </div>
          <br />
          <a-button @click="submitF">提交问题第一步</a-button>
        </div>

        <div v-show="data.showS">
          <div v-show="data.formF.type === 1">
            <h1>判断题</h1>answer
            <a-input type="text" :value="data.quesList1.answer" />answerRule
            <a-input type="text" :value="data.quesList1.answerRule" />
          </div>
          <div v-show="data.formF.type === 2">
            <h1>单选题</h1>answer
            <a-input type="text" :value="data.quesList2.answer" />
          </div>
          <div v-show="data.formF.type === 3">
            <h1>多选题</h1>rightAnswer
            <a-input type="text" :value="data.quesList3.rightAnswer" />selection
            <a-input type="text" :value="data.quesList3.selection" />
          </div>
          <div v-show="data.formF.type === 4">
            <h1>填空题</h1>rightAnswer
            <a-input type="text" :value="data.quesList3.rightAnswer" />selection
            <a-input type="text" :value="data.quesList3.selection" />
          </div>
          <div v-show="data.formF.type === 5">
            <h1>论述题</h1>answer
            <a-input type="text" :value="data.quesList4.answer" />answerNum
            <a-input type="text" :value="data.quesList4.answerNum" />
          </div>
          <a-button @click="submitS" class="mt-5">创建试题</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import {
  addQuestionDetailF,
  addQuestionDetail1,
  addQuestionDetail2,
  addQuestionDetail3,
  addQuestionDetail4,
  addQuestionDetail5,
  addQuestionDetail1,
} from '/@/api/question/question';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

export default defineComponent({
  name: 'Subject',
  components: {},
  setup() {
    const data = reactive({
      levelList: ['简单', '中等', '困难'],
      permissionList: ['仅自己可见', '公开'],
      typeList: ['判断题', '单选题', '多选题', '填空题', '论述题'],
      showF: true,
      showS: false,
      formF: {
        analysis: 'string',
        content: 'string',
        creatorId: 0,
        knowledgePointId: 0,
        level: 1,
        permission: 0,
        title: 'string',
        type: 1,
      },
      quesList1: {
        answer: 'string',
        answerRule: 'string',
        questionId: 0,
      },
      quesList2: {
        answer: 0,
        questionId: 0,
      },
      quesList3: {
        rightAnswer: 'string',
        selection: 'string',
        questionId: 0,
      },
      quesList4: {
        answer: 'string',
        answerNum: 0,
        questionId: 0,
      },
      questionId: 0,
    });
    const submit = () => {
      const type = submitF();
      submitS(type);
      getList();
    };
    async function submitS() {
      console.log('创建试题第二步前' + data.formF.type);
      data.quesList1.questionId = data.questionId;
      data.quesList2.questionId = data.questionId;
      data.quesList3.questionId = data.questionId;
      data.quesList4.questionId = data.questionId;

      let res;
      switch (data.formF.type) {
        case 1:
          res = await addQuestionDetail1(data.quesList2);
          break;
        case 2:
          res = await addQuestionDetail2(data.quesList3);
          break;
        case 3:
          res = await addQuestionDetail3(data.quesList3);
          break;
        case 4:
          res = await addQuestionDetail4(data.quesList4);
          break;
        case 5:
          res = await addQuestionDetail5(data.quesList1);
          break;
      }
      if (res.code === 'ITEST-200') {
        notification.success({
          message: res.msg,
          duration: 3,
        });
        data.showF = true;
        data.showS = false;
      } else {
        notification.error({
          message: '创建失败请联系工作人员',
          duration: 3,
        });
      }
    }
    async function submitF() {
      console.log('请求问题第一步前');
      console.log(data.formF);
      const res = await addQuestionDetailF(data.formF);
      console.log(res);
      if (res.code === 'ITEST-200') {
        notification.success({
          message: res.msg,
          duration: 3,
        });
        data.showF = false;
        data.showS = true;
        data.questionId = res.data;
      } else {
        notification.error({
          message: '创建失败请联系工作人员',
          duration: 3,
        });
      }

      // return res.type;
    }
    async function getList() {
      // const res = await getQuestion();
      // console.log(res);
      // data.quesList = res.data.list;
    }
    async function deleteQues() {
      // const res = await deleteQuestion();
      // console.log(res);
      // getList()
    }
    async function updateQues() {
      // const res = await updateQuestionDetail(formF);
      // console.log(res);
      // getList()
    }
    return {
      prefixCls: 'list-card',
      data,
      submit,
      submitF,
      submitS,
      getList,
      deleteQues,
      updateQues,
    };
  },
});
</script>

<style lang="less" scoped>
.demo-wrap {
  width: 50%;
  background-color: @component-background;
  border-radius: 10px;
}
</style>
