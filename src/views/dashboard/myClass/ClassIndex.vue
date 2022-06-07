<template>
  <!-- <a-button
    shape="round"
    class="m-5"
    type="primary"
    style="margin-top: 16px"
    @click="returnIndex"
  >返回主页</a-button>-->
  <!-- 课程主页基本信息 -->
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="[indexList]">
    <template #renderItem="{ item }">
      <a-list-item key="item.id">
        <template #actions>
          <span v-for="{ type, text } in actions" :key="type">
            <component :is="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <template #extra>
          <img width="272" alt="logo" :src="item.pic" />
        </template>
        <a-list-item-meta :description="item.teacherName">
          <template #title>
            <a :href="item.href">{{ item.course }}</a>
          </template>
          <template #avatar>
            <a-avatar :src="item.pic" />
          </template>
        </a-list-item-meta>

        <a-list style="background-color: #ffffff" size="small" bordered>
          <div v-show="classListShow">
            <a-directory-tree :tree-data="treeData" default-expand-all />
          </div>
          <template #header>
            <div>课程开始</div>
          </template>
          <template #footer>
            <div>课程结束</div>
          </template>
        </a-list>
      </a-list-item>
    </template>
  </a-list>
  <!-- 课程主页基本信息 -->

  <!-- 课程考试基本信息 -->
  <div style="background-color: #ffffff; padding: 20px; margin: 10px">
    <!-- <a-typography-text code>课程考试</a-typography-text> -->
    <a-typography-title :level="4">课程考试({{ examList.length }})</a-typography-title>
    <a-row :gutter="16">
      <a-col :span="8" v-for="i in examList">
        <a-card
          :title="i.title"
          :bordered="false"
          style="
            margin: 10px;
            background-color: #f0f2f5;
            border: 2px solid #fff;
            border-radius: 10px;
          "
        >
          <p>开始时间：{{ i.startTime }}</p>
          <p>结束时间：{{ i.endTime }}</p>
          <p>{{ i.socre }}</p>
          <p>{{ i.state }}</p>
          <a-button v-if="i.state == '考试已结束'">
            <router-link :to="{ name: 'Answered', params: { examId: i.id } }">查看试卷</router-link>
          </a-button>
          <a-button v-if="i.state == '还未开始'" disabled="true">禁止答题</a-button>
          <a-tooltip title="考试请进入我的考试这里暂未联通">
            <a-button v-if="i.state == '正在考试...'">开始考试</a-button>
          </a-tooltip>
          <a-tooltip title="教师批阅中...">
            <a-button v-if="i.state == '待批阅'">禁止查看</a-button>
          </a-tooltip>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <!-- 课程考试基本信息 -->
  <!-- 班级成员信息 -->
  <div style="background-color: #ffffff; padding: 20px; margin: 10px">
    <!-- <a-typography-text code>班级成员({{ stuList.length }})</a-typography-text> -->
    <a-typography-title :level="4">班级成员({{ stuList.length }})</a-typography-title>

    <div v-for="i in stuList">
      <a-card hoverable style="width: 300px; margin: 10px; background-color: #f0f2f5">
        <a-card-meta :title="i.studentName" :description="i.userSex + ''">
          <template #avatar>
            <a-avatar :src="i.pic" />
          </template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
  <!-- 班级成员信息 -->
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted, watch, computed } from 'vue';
  import { getClassIndex, getStudentList, getExamList } from '/@/api/class/class';

  import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      StarOutlined,
      LikeOutlined,
      MessageOutlined,
    },
    props: {
      classId: {
        type: String,
        required: true,
      },
    },
    emits: ['returnMyClass'],
    setup(props, actions) {
      const userStore = useUserStore();
      const userinfo = computed(() => userStore.getUserInfo);

      watch(
        () => props.classId,
        (count, pre) => {
          getClassIndex1(count);
          getStudentList1(count);
          getExamList1(count);
        },
      );
      const state = reactive({
        indexList: [],
        stuList: [],
        examList: [],
        knowPointList: [],
        treeData: [
          {
            title: '所有章节',
            key: '0-0',
            slots: {
              icon: 'smile',
            },
            children: [{ title: '小节', key: '0-0-0', slots: { icon: 'meh' } }],
          },
        ],
        classListShow: false,
      });
      const returnIndex = () => {
        actions.emit('returnMyClass');
      };
      onMounted(() => {
        if (props.classId) {
          getClassIndex1(props.classId);
          getStudentList1(props.classId);
          getExamList1(props.classId);
        }
      });

      async function getClassIndex1(id) {
        let res = await getClassIndex(id);
        console.log(res);
        state.indexList = res.data;
        state.knowPointList = state.indexList.knowPointList;
        classToTree(state.knowPointList);
      }

      const classToTree = (arr) => {
        state.treeData = [];
        arr.forEach((i, index) => {
          let obj = {
            title: 'parent',
            id: 0,
            children: [],
          };
          let child = { title: 'leaf', id: 0 };

          obj.title = '第' + `${index + 1}` + '章' + ' ' + i.name;
          obj.id = i.id;

          if (i.knowPoint2) {
            i.knowPoint2.forEach((i, indexchild) => {
              let objchild = JSON.parse(JSON.stringify(child));
              objchild.title = '第' + `${indexchild + 1}` + '节' + ' ' + i.name;
              objchild.id = i.id;
              obj.children.push(objchild);
            });
          }
          state.classListShow = true;
          state.treeData.push(obj);
        });
        console.log(state.treeData);
      };

      async function getStudentList1(id) {
        let res = await getStudentList(id);
        console.log(res);
        state.stuList = res.data;
        state.stuList.map((i) => {
          if (i.userSex == 0) {
            i.userSex = '女';
          } else {
            i.userSex = '男';
          }
        });
      }
      async function getExamList1(id) {
        let res = await getExamList(id);
        console.log(res);
        state.examList = res.data;
        state.examList.map((i) => {
          if (i.state === 0) {
            i.state = '还未开始';
          } else if (i.state === 1) {
            i.state = '正在考试...';
          } else if (i.state === -1) {
            i.state = '考试已结束';
          } else {
            i.state = '待批阅';
          }
        });
      }

      return {
        ...toRefs(state),
        returnIndex,
      };
    },
  });
</script>

<style lang="scss" scoped></style>
