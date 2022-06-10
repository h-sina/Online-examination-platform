<template>
  <div>
    <a-list
      item-layout="horizontal"
      :data-source="data.list"
      class="demo-loadmore-list"
      :loading="data.loading"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.userNumber">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.teacherName || '无名氏' }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue';
import { useUserStore } from '/@/store/modules/user';
import { getTechers } from '/@/api/sa/sa';

const userStore = useUserStore();
const userinfo = computed(() => userStore.getUserInfo);
onMounted(() => {
  get();
});
const data = reactive({
  list: [],
  loading: true,
});
async function get () {
  console.log(userinfo.value);
  let res = await getTechers(userinfo.value.schoolId);
  console.log(res);
  if (res.code == 'ITEST-200') {
    data.list = res.data;
    data.loading = false;
  }
}
</script>

<style scoped>
.demo-loadmore-list {
  margin: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px;
}
</style>
