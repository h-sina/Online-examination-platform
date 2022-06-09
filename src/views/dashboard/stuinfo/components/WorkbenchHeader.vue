<template>
  <div class="lg:flex">
    <Avatar :src="userinfo.userProfilePhoto || headerImg" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">早安, {{ userinfo.nickName }}, 开始您一天的学习吧！</h1>
      <span class="text-secondary">今日{{ text }}，{{ temp - 2 }}℃ - {{ +temp + 2 }}℃！</span>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4">
      <div class="flex flex-col justify-center text-right">
        <span class="text-secondary">信息</span>
        <span class="text-2xl">2/10</span>
      </div>

      <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
        <span class="text-secondary">班级</span>
        <span class="text-2xl">196</span>
      </div>
      <!-- <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
        <span class="text-secondary"> 团队 </span>
        <span class="text-2xl">300</span>
      </div>-->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { Avatar } from 'ant-design-vue';
import { useUserStore } from '/@/store/modules/user';
import headerImg from '/@/assets/images/header.jpg';
onMounted(() => {
  get();
});
const text = ref('无风');
const temp = ref('温度未知');
import axios from 'axios';
const get = () => {
  // get传参数
  axios
    .get('https://restapi.amap.com/v3/ip?key=ebb63c562a0a966ccc68c7e1302a6567')
    .then((response) => {
      let rectangle = response.data.rectangle.split(';')[0];
      axios
        .get(
          'https://devapi.qweather.com/v7/weather/now?key=097dbe3ed34445a5a33b0ea61a90f460&location=' +
            `${rectangle}`,
        )
        .then((response) => {
          if (response.data.code === '200') {
            text.value = response.data.now.text;
            temp.value = response.data.now.temp;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
const userStore = useUserStore();
const userinfo = computed(() => userStore.getUserInfo);
</script>
