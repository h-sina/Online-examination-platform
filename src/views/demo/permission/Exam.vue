<template>
  <div>
    <div class="flex justify-center">
      <div class="demo-wrap p-10 m-5">
        <div v-show="data.showF">
          <!-- <a-form :model="data.formF">
            <a-form-item label="name">
            </a-form-item>
          </a-form>-->
          name
          <a-input v-model:value="data.formF.name" />
          <br />description
          <a-input type="text" v-model:value="data.formF.description" />
          <br />permission
          <div v-for="(item, index) in data.permissionList">
            <input
              type="radio"
              name="level"
              v-model="data.formF.permission"
              :value="--index"
              :label="item"
            />
            {{ item }}
          </div>
          <br />

          <a-button @click="submitF">创建试卷第一步</a-button>
        </div>

        <div v-show="data.showS">
          name
          <a-input type="text" v-model:value="data.formS.name" label="name" />
          <br />orderId
          <a-input
            type="text"
            v-model:value="data.formS.orderId"
            disabled
            :value="data.formS.orderId"
          />
          <br />totalScore
          <a-input type="number" v-model:value="data.formS.totalScore" />
          <br />type
          <div v-for="(item, index) in data.typeList">
            <input
              type="radio"
              name="type"
              v-model="data.formS.type"
              @change="changeList"
              :value="++index"
            />
            {{ item }}
          </div>
          <br />quesTempList
          <div
            style="height: 270px; border: 1px solid black; border-radius: 5px; overflow: auto"
            class="mt-5"
            ref="seeHeight"
          >
            <div v-for="item in data.list">
              <input
                type="checkbox"
                name="type"
                v-model="data.quesTempList"
                :value="item.id"
                class="m-2"
              />
              {{ item.title }}-{{ item.knowledgeName }}-{{ item.level }}-{{ item.content }}-{{
                item.analysis
              }}
            </div>
            <img src="../../../../src/assets/images/null.jpg" v-show="data.list.length === 0" />
          </div>

          <a-button @click="submitSS" class="mt-5">提交继续添加大题</a-button>
          <a-button @click="submitS" class="mt-5">添加之后结束组卷</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue';

  import { addPaperF, addPaperS, getQuestion } from '/@/api/question/question';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { notification } = useMessage();

  export default defineComponent({
    name: 'Exam',
    components: {},

    setup() {
      const seeHeight = ref(null);
      const data = reactive({
        permissionList: ['仅自己可见', '公开'],
        typeList: ['判断题', '单选题', '多选题', '填空题', '论述题'],
        showF: true,
        showS: false,
        formF: {
          description: '试卷描述',
          name: '试卷名',
          permission: -1,
        },
        formFC: {
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
          name: 'string',
          orderId: 1,
          paperId: 0,
          quesTempList: [],
          totalScore: 0,
          type: 1,
        },
        formSC: {
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
          pageSize: 10,
          level: 0,
          type: 0,
        },
        list: [],
      });

      // 处理连续添加大题
      async function submitSS() {
        console.log('继续添加大题');
        // 处理小题连续添加的ID 并组合到formS
        data.quesTempList.forEach((i, index) => {
          let item = data.quesItem;
          item.orderId = index + 1;
          item.questionId = i;
          item.score = 10;
          data.formS.quesTempList.push(item);
        });
        // 添加大题
        const res = await addPaperS(data.formS);
        responseMsg(res);
        // 清除第二步表格并对大题ID加1
        let orderId = data.formS.orderId;
        clearFormS();
        data.formS.orderId = orderId + 1;
      }

      // 处理添加最后一道大题
      async function submitS() {
        console.log('创建试卷第二步前');
        // 处理多选框数据
        data.quesTempList.forEach((i, index) => {
          let item = data.quesItem;
          item.orderId = index + 1;
          item.questionId = i;
          item.score = 10;
          data.formS.quesTempList.push(item);
        });
        // 调用接口
        const res = await addPaperS(data.formS);
        // 清空表单
        clearFormS();
        // 返回
        showformF();
        showformS();
        // 处理反馈
        responseMsg(res);
      }

      // 组卷第一步
      async function submitF() {
        console.log('请求试卷第一步前');

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
          // 处理反馈
          responseMsg(res);
          // 变换表格
          showformF();
          showformS();
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
        //
        // data.list1 = data.list.filter((i) => {
        //   return i.type === data.formS.type;
        // });
      }

      onMounted(() => {
        console.log('mounted');
        seeHeight.value.addEventListener('scroll', Srcoll, true);
      });
      onUnmounted(() => {
        seeHeight.value.removeEventListener('scroll', throttle(Srcoll, 4000), true);
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
        getQuestionList();
      }

      // 切换显示
      function showformF() {
        data.showF = !data.showF;
      }
      function showformS() {
        data.showS = !data.showS;
      }

      // 清除表单数据
      function clearFormF() {
        // data.formF = data.formFC;
      }
      function clearFormS() {
        // data.formS = data.formSC;
        data.quesTempList = [];
      }

      return {
        data,
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
