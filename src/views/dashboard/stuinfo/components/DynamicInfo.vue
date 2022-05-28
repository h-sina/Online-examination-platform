<template>
  <Card title="最新动态" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="dynamicInfoItems">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>{{ item.date }}</template>
            <!-- eslint-disable-next-line -->
            <template #title>
              {{ item.name }}
              <span v-html="item.desc"></span>
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
}
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
</script>
