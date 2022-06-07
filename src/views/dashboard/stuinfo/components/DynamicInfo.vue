<template>
  <Card title="最新动态" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="dynamicInfoItems">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>{{ item.createTime }}</template>
            <!-- eslint-disable-next-line -->
            <template #title>
              <span v-html="item.content"></span>
            </template>
            <template #avatar>
              <Icon :icon="item.avatar" :size="30" />
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts" setup>
import { Card, List } from 'ant-design-vue';
import { dynamicInfoItems } from './data';
import { Icon } from '/@/components/Icon';
import { announcement } from '/@/api/sys/user';
import { onMounted } from 'vue';
onMounted(() => {
  get();
});
async function get() {
  let res = await announcement();
  console.log(res);
  if (res.code === 'ITEST-200') {
    dynamicInfoItems.splice(0);
    dynamicInfoItems.push(...res.data);
  }
  dynamicInfoItems.forEach((i) => {
    i.avatar = 'dynamic-avatar-1|svg';
  });
  console.log(dynamicInfoItems);
}
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
</script>
