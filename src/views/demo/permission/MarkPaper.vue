<template>
  <div>
    <a-empty v-show="data.list.length === 0" style="box-sizing: border-box; margin-top: 200px" />
    <a-list
      class="demo-loadmore-list"
      :loading="data.loading"
      item-layout="horizontal"
      :data-source="data.list"
      v-show="data.allClass"
    >
      <a-row :gutter="16">
        <a-card
          style="width: 260px; margin: 10px"
          :loading="loading"
          v-for="i in data.list"
          :title="`${i.course}`"
          :span="8"
        >
          <template #cover>
            <img alt="课程图片" :src="i.pic" />
          </template>
          <p>班级号：{{ i.number }}</p>
          <p>开始时间：{{ i.startTime }}</p>
          <p>结束时间：{{ i.endTime }}</p>
          <a-button
            shape="round"
            type="primary"
            style="margin-top: 16px"
            @click="enterClass(i.id)"
          >进入课程</a-button>
        </a-card>
      </a-row>
    </a-list>
    <ExamsInClass :id="data.classId" v-if="data.oneClass" @ret="ret" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';

import { getExamsByTeacher, getExamByTeacher } from '/@/api/exam/exam';

import ExamsInClass from './ExamsInClass.vue';

components: {
  ExamsInClass;
}
onMounted(() => {
  // getExamByPaperIdAndStuId
  getExam();
  data.loadMore = debounce(tip, 1000);
});
const data = reactive({
  list: [],
  loadingMore: true,
  loading: false,
  loadMore: '',
  classId: '',
  allClass: true,
  oneClass: false,
});

import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();
// const loadMore = () debounce(tip, 2000);
const tip = () => {
  notification.warning({
    message: '没了啦没了啦',
    duration: 3,
  });
};
function debounce(fn, delay = 2000) {
  // 实现防抖函数的核心是使用setTimeout
  // time变量用于保存setTimeout返回的Id

  let time = null;

  function _debounce() {
    // 如果time不为0，也就是说有定时器存在，将该定时器清除
    if (time !== null) {
      clearTimeout(time);
    }

    time = setTimeout(() => {
      fn();
    }, delay);
  }

  // 防抖函数会返回另一个函数，该函数才是真正被调用的函数
  return _debounce;
}

async function getExam() {
  let res = await getExamsByTeacher();
  console.log(res);
  if (res.code === 'ITEST-200') {
    data.list = res.data;
    console.log(data.list);
  } else {
    console.log('出错啦请联系后台管理人员');
  }
}

const enterClass = (id) => {
  data.classId = id;
  data.oneClass = true;
  data.allClass = false;
};

const ret = () => {
  data.oneClass = false;
  data.allClass = true;
};
async function submitExam() {}
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
  margin: 20px;
}
</style>
