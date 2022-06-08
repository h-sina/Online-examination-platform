<template>
  <div>
    <div class="flex justify-center">
      <div class="demo-wrap p-10 m-5">
        <a-steps :current="data.currentStep">
          <a-step title="第一步" description="添加描述" />
          <a-step title="建班" description="将会花点时间..." />
        </a-steps>
        <div class="m-10" v-show="!data.visible">
          <a-form-item>
            <CropperAvatar
              :uploadApi="uploadClassPic"
              :value="data.form.pic"
              btnText="上传班级头像"
              :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
              @change="updateAvatar"
              width="150"
              style="margin: 0 160px"
            />
          </a-form-item>
          <a-form-item label="课程号">
            <!-- <a-input label="name" v-model:value="data.form.courseId" /> -->
            <a-select v-model:value="data.classId" style="width: 100%" :options="data.clist" />
          </a-form-item>

          <a-form-item label="班级号">
            <a-input label="name" v-model:value="data.form.number" placeholder="002" />
          </a-form-item>
          <a-form-item label="所属学院">
            <a-input
              label="name"
              v-model:value="data.form.schoolId"
              @input="getTeacherId"
              placeholder="13415"
            />
          </a-form-item>
          <a-form-item label="任课老师">
            <!-- <a-input label="name" v-model:value="data.form.teacherId" /> -->
            <a-select v-model:value="data.teacherId" style="width: 100%" :options="data.tlist" />
          </a-form-item>
          <a-form-item label="开始时间">
            <a-calendar :fullscreen="false" @select="onSelect" v-model="data.form.startTime" />
          </a-form-item>
          <a-form-item label="结束时间">
            <a-calendar :fullscreen="false" @select="onSelect1" v-model="data.form.endTime" />
          </a-form-item>

          <a-button shape="round" @click="submit">👉提交建班</a-button>
        </div>

        <div v-show="data.visible" class="flex justify-center mt-20" style="flex-direction: column">
          <CheckCircleTwoTone :style="{ fontSize: '100px' }" />
          <div class="flex justify-center mt-5" style="font-size: 20px">完成建班</div>
          <div class="flex justify-center mt-5" style="font-size: 20px">班级邀请码：{{ data.code }}</div>
          <div class="flex justify-center mt-10">
            <a-button shape="round" @click="againClass">再次建班</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, reactive, ref, watch } from 'vue';
import { createClass, uploadClassPic } from '/@/api/sa/sa';
import moment from 'moment';
import { CheckCircleTwoTone, AntDesignOutlined } from '@ant-design/icons-vue';
import { CropperAvatar } from '/@/components/Cropper';
import { getAllCourse } from '/@/api/sys/user';
import { getTechers } from '/@/api/sa/sa';
components: {
  CheckCircleTwoTone;
  AntDesignOutlined;
  CropperAvatar;
}
const data = reactive({
  form: {
    courseId: '',
    endTime: moment(),
    number: '',
    pic: 'https://itest-jxufe.oss-cn-beijing.aliyuncs.com/4575b187732a76f0766e441df277613c.jpeg',
    schoolId: '',
    startTime: moment(),
    teacherId: '',
  },
  visible: false,
  currentStep: 0,
  code: '',
  clist: [],
  tlist: [],
  classId: '',
  teacherId: '',
});

onMounted(() => {
  getCourseId();
});

// watch(
//   () => data.form.schoolId,
//   (val) => {
//     console.log('val', val);
//     getTeacherId(val);
//   },
// );

async function create () {
  let a = data.form.startTime.format().split('+');
  a.splice(1);
  data.form.startTime = a.toString() + '.438Z';

  a = data.form.endTime.format().split('+');
  a.splice(1);
  data.form.endTime = a.toString() + '.438Z';

  let res = await createClass(data.form);
  if (res.code == 'ITEST-200') {
    data.currentStep = 1;
    data.visible = true;
    data.code = res.data;
  }
}
async function getCourseId () {
  let res = await getAllCourse();
  if (res.code == 'ITEST-200') {
    // data.clist = res.data;
    res.data.map((i) => {
      data.clist.push({ value: i.name, id: i.id });
    });
    console.log(data.clist);
  }
}
function get () {
  console.log(111);
  throttle(fn, 1000);
}

function throttle (fn, delay) {
  let timer = null;

  return function () {
    // let args = arguments;
    // let context = this;
    if (!timer) {
      timer = setTimeout(function () {
        // fn.apply(context, args);
        fn();
        timer = null;
      }, delay);
    }
  };
}
function fn () {
  console.log(1);
}
async function getTeacherId () {
  if (data.form.schoolId && typeof data.form.schoolId == 'string') {
    let res = await getTechers(data.form.schoolId);
    if (res.code == 'ITEST-200') {
      // data.clist = res.data;
      data.tlist = [];
      console.log(data.tlist);

      res.data.map((i) => {
        if (i.teacherName) data.tlist.push({ value: i.teacherName, id: i.userId });
      });
      console.log(data.tlist);
    }
    console.log(res);
  }
}
const onSelect = (value) => {
  data.form.startTime = value;
};
const onSelect1 = (value) => {
  data.form.endTime = value;
};
// const updateAvatar = (src) => {
//   data.form.pic = src;
//   let res = uploadClassPic(src);
// };

const submit = () => {
  data.clist.forEach((i) => {
    if (i.value === data.classId) {
      data.form.courseId = i.id;
    }
  });
  data.tlist.forEach((i) => {
    if (i.value === data.classId) {
      data.form.teacherId = i.id;
    }
  });
  create();
};
const againClass = () => {
  data.visible = false;
  data.form = {};
  data.currentStep = 0;
};
</script>

<style lang="less" scoped>
.demo-wrap {
  width: 60%;
  background-color: @component-background;
  border-radius: 10px;
}
</style>
