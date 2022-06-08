<template>
  <div>
    <div class="flex justify-center">
      <div class="demo-wrap p-10 m-5">
        <a-steps :current="currentStep">
          <a-step title="第一步" description="添加描述" />
          <a-step title="第二步" description="添加大题" />
          <a-step title="组卷" description="将会花点时间..." />
        </a-steps>

        <div v-show="showF" class="m-10">
          <a-form-item label="试卷名称">
            <a-input v-model:value="formF.name" label="name" />
          </a-form-item>
          <a-form-item label="试卷描述">
            <a-input type="text" v-model:value="formF.description" />
          </a-form-item>
          <a-form-item label="试卷权限">
            <a-radio-group v-model:value="formF.permission">
              <a-radio :value="--index" name="level" v-for="(i, index) in permissionList">{{ i }}</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-button shape="round" @click="submitF">👉下一步</a-button>
        </div>

        <div v-show="showS" class="m-10">
          <a-form-item label="大题序号">
            <a-input type="text" v-model:value="formS.orderId" disabled :value="formS.orderId" />
          </a-form-item>
          <a-form-item label="大题名称">
            <a-input type="text" v-model:value="formS.name" label="name" />
          </a-form-item>
          <a-form-item label="大题总分">
            <a-input type="number" v-model:value="formS.totalScore" />
          </a-form-item>
          <a-form-item label="大题类型">
            <a-radio-group v-model:value="formS.type" @change="changeList">
              <a-radio :value="++index" name="type" v-for="(item, index) in typeList">{{ item }}</a-radio>
            </a-radio-group>
          </a-form-item>

          <a-form-item label="小题">
            <div
              style="height: 500px; border: 1px solid black; border-radius: 5px; overflow: auto"
              class="m-5 p-5"
              ref="seeHeight"
            >
              <a-checkbox-group v-model:value="quesTempList">
                <a-checkbox type="checkbox" :value="item.id" v-for="item in list" style="margin: 0">
                  <a-card style="width: 300px; margin-top: 5px">
                    {{ item.title }}-{{ item.knowledgeName }}-{{ item.level }}-{{
                    item.analysis
                    }}
                  </a-card>
                </a-checkbox>
              </a-checkbox-group>
              <img src="../../../../src/assets/images/null.jpg" v-show="list.length === 0" />
            </div>
          </a-form-item>

          <a-button shape="round" @click="submitSS" class="mt-5 mr-40">继续添加大题</a-button>
          <a-button shape="round" @click="submitS" class="mt-5">结束组卷</a-button>
        </div>

        <div v-show="showE" class="flex justify-center mt-20" style="flex-direction: column">
          <CheckCircleTwoTone :style="{ fontSize: '100px' }" />
          <div class="flex justify-center mt-5" style="font-size: 20px">完成组卷</div>

          <div class="flex justify-center mt-10">
            <a-button shape="round" @click="againPaper">再次组卷</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted, toRefs } from 'vue';
import { CheckCircleTwoTone } from '@ant-design/icons-vue';
import { addPaperF, addPaperS, getQuestion } from '/@/api/question/question';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

export default defineComponent({
  name: 'Exam',
  components: { CheckCircleTwoTone },

  setup() {
    const seeHeight = ref(null);
    const data = reactive({
      permissionList: ['仅自己可见', '公开'],
      typeList: ['判断题', '单选题', '多选题', '填空题', '论述题'],
      showF: true,
      showS: false,
      showE: false,
      currentStep: 0,
      paperId: 0,
      formF: {
        description: '',
        name: '',
        permission: -1,
      },
      quesTempList: [],
      quesItem: {
        orderId: 1,
        questionId: 0,
        score: 0,
      },
      formS: {
        name: '',
        orderId: 1,
        paperId: 0,
        quesTempList: [],
        totalScore: 0,
        type: 1,
      },
      obj: {
        orderRule: 0,
        pageNum: 1,
        pageSize: 20,
        level: 0,
        type: 0,
      },
      list: [],
    });

    // 再次组卷
    function againPaper() {
      // 清空表单
      clearFormS();
      clearFormF();

      // 最后一步
      showformE(false);
      showformF(true);
    }

    async function chuli() {
      // 处理小题连续添加的ID 并组合到formS
      data.quesTempList.forEach((i, index) => {
        let item = JSON.parse(JSON.stringify(data.quesItem));
        item.orderId = index + 1;
        item.questionId = i;
        item.score = 10;
        data.formS.quesTempList.push(item);
      });
      // 添加大题
      const res = await addPaperS(data.formS);
      responseMsg(res);
    }
    const pank = () => {
      let re = data.formS.name && data.formS.quesTempList && data.formS.totalScore;
      if (!re) {
        notification.error({
          message: '字段不能为空',
          duration: 3,
        });
      }
      return re;
    };
    // 处理连续添加大题
    async function submitSS() {
      console.log('继续添加大题');
      if (!pank()) return;
      chuli();
      // 清除第二步表格并对大题ID加1
      let orderId = data.formS.orderId;
      clearFormS();
      data.formS.orderId = orderId + 1;
    }

    // 处理添加最后一道大题
    async function submitS() {
      console.log('创建试卷第二步前');
      if (!pank()) return;
      chuli();
      // 清空表单
      clearFormS();
      // 最后一步
      showformS(false);
      showformE(true);
    }

    // 组卷第一步
    async function submitF() {
      console.log('请求试卷第一步前');
      console.log(data.formF);
      // 判断表单是否为空
      if (data.formF.description === '' || data.formF.name === '') {
        notification.error({
          message: '不能为空',
          duration: 3,
        });
      } else {
        // 为第二步的题目数据初始化
        getQuestionList();

        // 第一步提交
        let res = await addPaperF(data.formF);
        // 获取试卷ID
        data.formS.paperId = res.data;
        data.paperId = res.data;
        // 处理反馈
        responseMsg(res);
        // 变换表格
        showformF(false);
        showformS(true);

        // data.questionId = res.data;
      }
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

    // 获取题目根据类型
    async function getQuestionList() {
      // 有类型筛选就使用
      data.obj.type = data.formS.type | 0;
      // 调用处理数据
      let res = await getQuestion(data.obj);
      data.list = res.data.list;
      data.list.map((i) => {
        if (i.level === 1) {
          i.level = '简单题';
        } else if (i.level === 2) {
          i.level = '中等题';
        } else {
          i.level = '困难题';
        }
      });
    }

    onMounted(() => {
      console.log('mounted');
      seeHeight.value.addEventListener('scroll', throttle(Srcoll, 4000), true);
    });
    onUnmounted(() => {
      // seeHeight.value.removeEventListener('scroll', throttle(Srcoll, 4000), true);
    });

    // 节流用于滚动条
    function throttle(fn, delay) {
      let timer;

      return function () {
        if (!timer) {
          timer = setTimeout(() => {
            fn();
            timer = null;
          }, delay);
        }
      };
    }

    // 滚动触发
    function Srcoll() {
      // 划到了底部
      if (
        seeHeight.value.scrollTop + seeHeight.value.clientHeight + 1 >=
        seeHeight.value.scrollHeight
      ) {
        // 获取一页多十条数据
        lazyLoad();
      }
    }

    // 懒加载数据
    function lazyLoad() {
      data.obj.pageSize += 10;
      getQuestionList();
    }

    // 类型改变 初始化一页的数据并调用接口方法
    function changeList() {
      data.obj.pageSize = 10;
      data.quesTempList = [];
      getQuestionList();
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
      // data.formF = JSON.parse(JSON.stringify(data.formFC));
      clearForm(data.formF, { permission: -1 });
    }
    function clearFormS() {
      // data.formS = JSON.parse(JSON.stringify(data.formSC));
      data.quesTempList = [];
      clearForm(data.formS, { orderId: 1, type: 1, paperId: data.paperId });
      // data.formS.paperId = data.paperId;
    }

    function clearForm(data, obj) {
      Object.keys(data).forEach((i) => {
        switch (typeof data[i]) {
          case 'string':
            data[i] = '';
            break;
          case 'number':
            data[i] = 0;
            break;
          case 'object':
            data[i] = [];
            break;
        }
      });
      Object.keys(obj).map((i) => {
        data[i] = obj[i];
      });
    }

    return {
      ...toRefs(data),
      seeHeight,

      submitF,
      submitS,
      submitSS,

      changeList,
      lazyLoad,
      Srcoll,
      getQuestionList,
      throttle,

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
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
