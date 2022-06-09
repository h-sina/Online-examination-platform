<template>
  <div :class="prefixCls">
    <Popover title trigger="click" :overlayClassName="`${prefixCls}__overlay`">
      <Badge :count="count" dot :numberStyle="numberStyle">
        <BellOutlined />
      </Badge>
      <template #content>
        <Tabs>
          <template v-for="item in listData" :key="item.key">
            <TabPane>
              <template #tab>
                {{ item.name }}
                <span v-if="item.list.length !== 0">({{ item.list.length }})</span>
              </template>
              <NoticeList :list="item.list" v-if="item.key === '1'" @title-click="onNoticeClick" />
              <NoticeList :list="item.list" v-else />
            </TabPane>
          </template>
        </Tabs>
      </template>
    </Popover>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue';
import { Popover, Tabs, Badge } from 'ant-design-vue';
import { BellOutlined } from '@ant-design/icons-vue';
import { tabListData, ListItem } from './data';
import NoticeList from './NoticeList.vue';
import { useDesign } from '/@/hooks/web/useDesign';
import { useMessage } from '/@/hooks/web/useMessage';
import { getNotice, delNotice, readedNotice } from '/@/api/sys/user.ts';

export default defineComponent({
  components: { Popover, BellOutlined, Tabs, TabPane: Tabs.TabPane, Badge, NoticeList },
  setup() {
    const { prefixCls } = useDesign('header-notify');
    const { createMessage } = useMessage();
    // const listData = ref(tabListData);
    const listData = ref();
    const classNotice = ref();
    const schoolNotice = ref();

    onMounted(() => {
      get();
    });

    async function get() {
      const res = await getNotice();
      res.data.clazzNotice.forEach((item) => {
        item.avatar = 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png';
        console.log(item);
      });
      listData.value = [
        { key: '1', name: '班级消息', list: res.data.clazzNotice },
        { key: '2', name: '学院消息', list: res.data.schoolNotice },
      ];
      console.log(listData);
    }

    const count = computed(() => {
      let count = 0;
      for (let i = 0; i < tabListData.length; i++) {
        count += tabListData[i].list.length;
      }
      return count;
    });

    function onNoticeClick(record: ListItem) {
      // 可以直接将其标记为已读（为标题添加删除线）,此处演示的代码会切换删除线状态
      record.titleDelete = !record.titleDelete;
      // 删除通知
      delMessage(record.id);
    }

    // 删除消息处理
    async function delMessage(noticeId) {
      console.log(noticeId);
      let res = await delNotice(noticeId);
      console.log(res);
      createMessage.success('删除信息成功！');
      get();
    }

    // 已阅消息处理
    async function readedMessage(noticeId) {
      console.log(noticeId);
      let res = await delNotice(noticeId);
      console.log(res);
    }

    return {
      classNotice,
      schoolNotice,
      listData,
      prefixCls,

      delMessage,
      readedMessage,
      // listData,
      count,
      onNoticeClick,
      numberStyle: {},
    };
  },
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-header-notify';

.@{prefix-cls} {
  padding-top: 2px;

  &__overlay {
    max-width: 360px;
  }

  .ant-tabs-content {
    width: 300px;
  }

  .ant-badge {
    font-size: 18px;

    .ant-badge-multiple-words {
      padding: 0 4px;
    }

    svg {
      width: 0.9em;
    }
  }
}
</style>
