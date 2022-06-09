<template>
  <div>
    <a-button shape="round" type="button" class="m-5" @click="ret" v-if="!oneExam">返回</a-button>
    <a-button type="primary" class="m-5" v-if="!oneExam">
      <router-link :to="{ name: 'Mypapers', params: { examId: id } }">发布考试</router-link>
    </a-button>

    <a-list
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="horizontal"
      :data-source="list"
      v-if="!oneExam"
    >
      <CollapseContainer :title="'班级成员(' + `${stuList.length}` + ')'" :canExpan="true">
        <a-list
          class="demo-loadmore-list"
          :loading="loading"
          item-layout="horizontal"
          :data-source="stuList"
        >
          <!-- <template #loadMore>
          <div
            :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
          >
            <a-spin v-if="loadingMore" />
            <a-button v-else @click="loadMore">loading more</a-button>
          </div>
          </template>-->
          <template #renderItem="{ item }">
            <a-list-item>
              <template #actions>
                <a @click="del(item.id)">移除</a>
                <a>联系ta</a>
              </template>
              <a-list-item-meta :description="item.userSex">
                <template #title>
                  <a>{{ item.studentName }}</a>
                </template>
                <template #avatar>
                  <a-avatar :src="item.pic" />
                </template>
              </a-list-item-meta>
              <!-- <div>content</div> -->
            </a-list-item>
          </template>
        </a-list>
      </CollapseContainer>
      <a-modal v-model:visible="visible" title="确认框" @ok="handleOk" width="600px">
        <p class="ml-5">确定要从班级里移除该名学生</p>
      </a-modal>
      <a-row :gutter="16">
        <a-card
          style="width: 260px; margin: 10px"
          :loading="loading"
          v-for="i in list"
          :title="`${i.title}`"
          :span="8"
        >
          <p>开始时间：{{ i.startTime }}</p>
          <p>结束时间：{{ i.endTime }}</p>
          <p>{{ i.state }}</p>
          <p>未批改数：{{ i.unCorrected }}</p>
          <a-button
            shape="round"
            type="primary"
            style="margin-top: 16px"
            @click="enterExam(i.id)"
          >考试批阅</a-button>
        </a-card>
      </a-row>
    </a-list>
    <ExamInclass :id="examId" :paperId="paperId" v-if="oneExam" @exit="exit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';
import { getExamByTeacher, GetStuByTeacher } from '/@/api/exam/exam';
import { delStu } from '/@/api/class/class';
import ExamInclass from './ExamInclass.vue';
import { CollapseContainer } from '/@/components/Container/index';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

export default defineComponent({
  components: {
    ExamInclass,
    CollapseContainer,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  emits: ['exit'],
  setup(props, actions) {
    onMounted(() => {
      getExamsInOneClass(props.id);
      getStusInOneClass(props.id);
      data.id = props.id;
    });
    const data = reactive({
      list: [],
      stuList: [],
      loading: true,
      oneExam: false,
      examId: '',
      paperId: '',
      visible: false,
      delStuId: '',
      id: '',
      // loadingMore: true,
    });
    async function getStusInOneClass(id) {
      let res = await GetStuByTeacher(id);
      if (res.code === 'ITEST-200') {
        data.stuList = res.data;
        data.stuList.map((i) => {
          if (i.userSex == 1) {
            i.userSex = '男';
          } else {
            i.userSex = '女';
          }
        });
        // data.loading = false;
      }
    }
    async function getExamsInOneClass(id) {
      let res = await getExamByTeacher(id);
      res.data.map((i) => {
        let state = i.state;
        switch (state) {
          case -1:
            state = '已结束';
            break;
          case 0:
            state = '未开始';
            break;
          case 1:
            state = '进行中';
            break;
          case 2:
            state = '待批阅';
            break;
        }
        i.state = state;
      });
      if (res.code === 'ITEST-200') {
        data.list = res.data;
        data.loading = false;
      }
    }
    const enterExam = (id) => {
      data.oneExam = !data.oneExam;
      data.examId = props.id;
      data.paperId = id;
    };
    const exit = () => {
      data.oneExam = !data.oneExam;
    };
    const ret = () => {
      actions.emit('ret');
    };
    const del = (id) => {
      data.visible = true;
      data.delStuId = id;
    };
    const handleOk = () => {
      delstu();
    };
    async function delstu() {
      let res = await delStu(props.id, data.delStuId);
      if (res.code == 'ITEST-200') {
        data.visible = false;
        getStusInOneClass(props.id);

        notification.success({
          message: '移除成功',
          duration: 3,
        });
      } else {
        notification.error({
          message: '移除失败',
          duration: 3,
        });
      }
    }
    return {
      ...toRefs(data),
      enterExam,
      exit,
      ret,
      del,
      handleOk,
    };
  },
});
</script>

<style scoped>
.demo-loadmore-list {
  min-height: 350px;
  margin: 20px;
}
</style>
