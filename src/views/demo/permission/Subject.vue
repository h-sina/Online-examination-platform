<template>
  <div>
    <div class="flex justify-center">
      <div class="demo-wrap p-10 m-5">
        <a-steps :current="currentStep">
          <a-step title="第一步" description="添加描述" />
          <a-step title="第二步" description="添加题目" />
          <a-step title="建题" description="将会花点时间..." />
        </a-steps>

        <div v-show="showF" class="m-10">
          <a-form-item label="题目名称">
            <a-input type="text" :value="formF.title" />
          </a-form-item>

          <a-form-item label="题目知识点">
            <a-input type="text" :value="formF.knowledgePointId" />
          </a-form-item>

          <a-form-item label="题目分析">
            <a-input type="text" :value="formF.analysis" />
          </a-form-item>

          <a-form-item label="题目内容">
            <a-input type="text" :value="formF.content" />
          </a-form-item>
          <a-form-item label="题目难度">
            <a-radio-group v-model:value="formF.level">
              <a-radio :value="++index" name="level" v-for="(item, index) in levelList">{{ item }}</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item label="题目权限">
            <a-radio-group v-model:value="formF.permission">
              <a-radio
                :value="--index"
                name="permission"
                v-for="(item, index) in permissionList"
              >{{ item }}</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item label="题目类型">
            <a-radio-group v-model:value="formF.type">
              <a-radio :value="++index" name="type" v-for="(item, index) in typeList">{{ item }}</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-button shape="round" @click="submitF">👉下一步</a-button>
        </div>

        <div v-show="showS" class="m-10">
          <div v-show="formF.type === 1">
            <b class="mb-5">判断题</b>
            <a-form-item label="题目答案">
              <a-input type="text" :value="quesList1.answer" />
            </a-form-item>
            <a-form-item label="答案规则">
              <a-textarea type="text" :value="quesList1.answerRule" />
            </a-form-item>
          </div>

          <div v-show="formF.type === 2">
            <b class="mb-5">单选题</b>
            <a-form-item label="题目答案">
              <a-input type="text" :value="quesList2.answer" />
            </a-form-item>
          </div>

          <div v-show="formF.type === 3">
            <b class="mb-5">多选题</b>
            <a-form-item label="题目答案">
              <a-input type="text" :value="quesList3.rightAnswer" />
            </a-form-item>
            <a-form-item label="答案规则">
              <a-textarea type="text" :value="quesList3.selection" />
            </a-form-item>
          </div>

          <div v-show="formF.type === 4">
            <b class="mb-5">填空题</b>
            <a-form-item label="题目答案">
              <a-input type="text" :value="quesList3.rightAnswer" />selection
            </a-form-item>
            <a-form-item label="答案规则">
              <a-textarea type="text" :value="quesList3.selection" />
            </a-form-item>
          </div>

          <div v-show="formF.type === 5">
            <b class="mb-5">论述题</b>
            <a-form-item label="题目答案">
              <a-input type="text" :value="quesList4.answer" />
            </a-form-item>
            <a-form-item label="答案规则">
              <a-textarea type="text" :value="quesList4.answerNum" />
            </a-form-item>
          </div>

          <a-button shape="round" @click="submitS" class="mt-5">创建试题</a-button>
        </div>

        <div v-show="showE" class="flex justify-center mt-20" style="flex-direction: column">
          <CheckCircleTwoTone :style="{ fontSize: '100px' }" />
          <div class="flex justify-center mt-5" style="font-size: 20px">完成建题</div>

          <div class="flex justify-center mt-10">
            <a-button shape="round" @click="againPaper">再次建题</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { CheckCircleTwoTone } from '@ant-design/icons-vue';

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
  components: { CheckCircleTwoTone },
  setup() {
    const data = reactive({
      levelList: ['简单', '中等', '困难'],
      permissionList: ['仅自己可见', '公开'],
      typeList: ['判断题', '单选题', '多选题', '填空题', '论述题'],
      showF: true,
      showS: false,
      showE: false,
      currentStep: 0,
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
      formFC: {
        analysis: '',
        content: '',
        creatorId: 0,
        knowledgePointId: 0,
        level: 1,
        permission: 0,
        title: '',
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
      quesList1C: {
        answer: '',
        answerRule: '',
        questionId: 0,
      },
      quesList2C: {
        answer: 0,
        questionId: 0,
      },
      quesList3C: {
        rightAnswer: '',
        selection: '',
        questionId: 0,
      },
      quesList4C: {
        answer: '',
        answerNum: 0,
        questionId: 0,
      },
      questionId: 0,
    });

    async function submitS() {
      console.log('创建试题第二步前' + data.formF.type);
      console.log(data.quesList2);

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
      // 处理反馈
      responseMsg(res);
      // 变换表格
      showformS(false);
      showformE(true);
    }
    async function submitF() {
      console.log('请求问题第一步前');
      const res = await addQuestionDetailF(data.formF);
      // 处理反馈
      responseMsg(res);
      // 变换表格
      showformF(false);
      showformS(true);
      // 获取试卷ID
      data.questionId = res.data;
    }

    // 根据返回的数据信息处理反馈
    function responseMsg(res) {
      if (res.code === 'ITEST-200') {
        notification.success({
          message: res.msg,
          duration: 3,
        });
      } else {
        notification.error({
          message: '创建失败请联系工作人员',
          duration: 3,
        });
      }
    }

    // 切换显示
    function showformF(show) {
      data.showF = show;
      if (show) data.currentStep = 0;
    }
    function showformS(show) {
      data.showS = show;
      if (show) data.currentStep = 1;
    }
    function showformE(show) {
      data.showE = show;
      if (show) data.currentStep = 2;
    }

    // 清除表单数据
    function clearFormF() {
      data.formF = JSON.parse(JSON.stringify(data.formFC));
    }
    function clearFormS() {
      data.quesList1 = JSON.parse(JSON.stringify(data.quesList1C));
      data.quesList2 = JSON.parse(JSON.stringify(data.quesList2C));
      data.quesList3 = JSON.parse(JSON.stringify(data.quesList3C));
      data.quesList4 = JSON.parse(JSON.stringify(data.quesList4C));
    }

    // 再次组卷
    function againPaper() {
      // 清空表单
      clearFormS();
      clearFormF();

      // 最后一步
      showformE(false);
      showformF(true);
    }

    return {
      ...toRefs(data),
      submitF,
      submitS,
      responseMsg,

      clearFormS,
      clearFormF,
      showformS,
      showformF,
      showformE,

      againPaper,
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
