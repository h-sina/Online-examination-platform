<template>
  <div>
    <a-list
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="horizontal"
      :data-source="list"
    >
      <a-row :gutter="16">
        <a-card
          style="width: 260px; margin: 10px"
          :loading="loading"
          v-for="i in list"
          :title="`${i.title}`"
          :span="8"
        >
          <template #cover>
            <img alt="课程图片" src="../../../assets/images/TechLifeCommunication.png" />
          </template>

          <p>创建人：{{ i.createName }}</p>

          <a-button shape="round" type="primary" style="margin-top: 16px" @click="fb(i.id)">发布试卷</a-button>
        </a-card>
      </a-row>
    </a-list>
    <a-modal v-model:visible="visible" title="发布试卷" @ok="handleOk" style="width: 60%">
      <a-form-item label="考试名" style="margin: 20px">
        <a-input label="name" v-model:value="form.title" placeholder="第五次Java测试" />
      </a-form-item>
      <a-form-item label="开始时间" style="margin: 20px">
        <a-calendar :fullscreen="false" @select="onSelect" v-model="form.startTime" />
      </a-form-item>
      <a-form-item label="结束时间" style="margin: 20px">
        <a-calendar :fullscreen="false" @select="onSelect1" v-model="form.endTime" />
      </a-form-item>
      <a-form-item label="查看试卷时间" style="margin: 20px">
        <a-calendar :fullscreen="false" @select="onSelect1" v-model="form.inspectionEndTime" />
      </a-form-item>
    </a-modal>
  </div>
</template>

<script>
import { onMounted, reactive, computed, toRefs } from 'vue';

import { useRoute } from 'vue-router';
import { getPapers, sendPaper } from '/@/api/exam/exam';
import { useUserStore } from '/@/store/modules/user';
import { PicRightOutlined, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons-vue';
import moment from 'moment';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();
export default {
  components: {
    PicRightOutlined,
    CheckCircleTwoTone,
    CloseCircleTwoTone,
  },
  setup () {
    const route = useRoute();
    const userStore = useUserStore();
    const userinfo = computed(() => userStore.getUserInfo);

    onMounted(() => {
      data.form = JSON.parse(JSON.stringify(data.formC));

      data.examId = route.params.examId;
      lookPaper(data.examId);
      data.classId = data.examId;
      console.log(userinfo);
      data.form.publishName = userinfo.value.nickName;
      data.form.publisherId = userinfo.value.schoolId;
    });
    const data = reactive({
      list: [],
      examId: '',
      // loading: true,
      visible: false,
      form: {
        endTime: moment(),
        inspectionEndTime: moment(),
        publishName: '',
        publisherId: 0,
        startTime: moment(),
        testPaperId: 0,
        title: '',
      },
      formC: {
        endTime: moment(),
        inspectionEndTime: moment(),
        publishName: '',
        publisherId: 0,
        startTime: moment(),
        testPaperId: 0,
        title: '',
      },
      classId: '',
    });
    async function lookPaper (examId) {
      let res = await getPapers(examId, userinfo.value.id);
      console.log(res);
      data.list = res.data;
    }
    const fb = (id) => {
      if (!data.classId) {
        notification.warning({
          message: '请进入班级发布考试',
          duration: 3,
        });
        return;
      }
      data.visible = true;
      data.form.testPaperId = id;
    };
    const handleOk = () => {
      console.log(data.form);
      // let a = data.form.startTime.format().split('+');
      // a.splice(1);
      // data.form.startTime = a.toString() + '.438Z';

      // a = data.form.endTime.format().split('+');
      // a.splice(1);
      // data.form.endTime = a.toString() + '.438Z';

      // a = data.form.inspectionEndTime.format().split('+');
      // a.splice(1);
      // data.form.inspectionEndTime = a.toString() + '.438Z';

      data.visible = false;
      submit();
    };
    async function submit () {
      let res = await sendPaper(data.form, data.classId);

      data.form = JSON.parse(JSON.stringify(data.formC));
      if (res.code === 'ITEST-200') {
        notification.success({
          message: res.msg,
          duration: 3,
        });
      } else {
        notification.error({
          message: res.msg,
          duration: 3,
        });
      }
    }
    return {
      ...toRefs(data),
      fb,
      handleOk,
    };
  },
};
</script>

<style lang="less" scoped>
.demo-wrap {
  background-color: @component-background;
  border-radius: 10px;
}
</style>
