<template>
  <Card title="功能" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">
      <div @click="enterModule(item.id)">
        <span class="flex">
          <Icon :icon="item.icon" :color="item.color" size="30" />
          <span class="text-lg ml-4">{{ item.title }}</span>
        </span>
        <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
      </div>
    </CardGrid>

    <!-- <CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">
      <span class="flex">
        <Icon :icon="item.icon" :color="item.color" size="30" />
        <span class="text-lg ml-4">{{ item.title }}</span>
      </span>
      <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
      <div class="flex justify-between text-secondary">
        <span>{{ item.group }}</span>
        <span>{{ item.date }}</span>
      </div>
    </CardGrid>-->
  </Card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Card } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';
import { groupItems } from './data';
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
  components: { Card, CardGrid: Card.Grid, Icon },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const enterModule = (id) => {
      console.log(id);
      switch (id) {
        case 1:
          router.push({ path: '/dashboard/info' });
          break;
        case 2:
          router.push({ path: '/dashboard/myClass' });
          break;
        case 3:
          router.push({ path: '/dashboard/wrongques' });
          break;
        case 4:
          router.push({ path: '/dashboard/quesbank' });
          break;
        case 5:
          router.push({ path: '/dashboard/collect' });
          break;
        case 6:
          router.push({ path: '/dashboard/myExam' });
          break;
        default:
          router.push({ path: '/dashboard/stuinfo' });
      }
    };
    return { items: groupItems, enterModule };
  },
});
</script>
