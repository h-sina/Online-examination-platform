<template>
  <div>
    <a-list
      item-layout="horizontal"
      :data-source="data.list"
      class="demo-loadmore-list"
      :loading="loading"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.name">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.id }}</a>
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
import { getClasses } from '/@/api/sa/sa';
import { onMounted, reactive } from 'vue';
onMounted(() => {
  get();
});
const data = reactive({
  list: [],
  loading: true,
});
async function get () {
  let res = await getClasses();
  console.log(res);
  if (res.code == 'ITEST-200') {
    data.list = res.data;
    data.loading = false;
  }
}
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
  margin: 20px;
}
</style>
