<template>
  <CollapseContainer title="修改密码" :canExpan="false">
    <!-- <List>
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #title>
              {{ item.title }}
              <div class="extra" v-if="item.extra">
                {{ item.extra }}
              </div>
            </template>
            <template #description>
              <div>{{ item.description }}</div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>-->
    <a-row :gutter="24" class="m-10">
      <a-col :span="14">
        <a-form-item label="验证邮箱">
          <a-input label="old" v-model:value="email" />
        </a-form-item>
        <a-button type="primary" @click="handleSubmit1" class="mb-5">验证邮箱</a-button>
        <a-form-item label="邮箱验证码">
          <a-input label="old" v-model:value="code" />
        </a-form-item>
        <a-form-item label="新密码">
          <a-input label="new" v-model:value="newpass" />
        </a-form-item>
        <a-form-item label="确认新密码">
          <a-input label="againnewpass" v-model:value="againnewpass" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-button type="primary" @click="handleSubmit">更新密码</a-button>
  </CollapseContainer>
</template>
<script lang="ts">
import { List } from 'ant-design-vue';
import { defineComponent, reactive, toRefs } from 'vue';
import { CollapseContainer } from '/@/components/Container/index';

import { secureSettingList } from './data';
import { sendEnail, verifyEmail, changePass } from '/@/api/sys/user';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();

export default defineComponent({
  components: { CollapseContainer, List, ListItem: List.Item, ListItemMeta: List.Item.Meta },
  setup() {
    const data = reactive({
      email: '12',
      newpass: '',
      againnewpass: '',
      code: '',
    });
    const handleSubmit1 = () => {
      console.log(data.email);
      if (data.email === null) {
        notification.warning({
          message: '邮箱不能为空',
          duration: 3,
        });
      } else {
        send();
      }
    };
    async function send() {
      let res = await sendEnail(data.email);
      console.log(res);
    }
    async function verify() {
      let res = await verifyEmail(data.email, data.code);
      console.log(res);
      if (res.code == 'ITEST-200' && res.data === 1) {
        change();
      } else {
        notification.error({
          message: '验证码错误',
          duration: 3,
        });
      }
    }
    async function change() {
      let res = await changePass(data.email, data.newpass);
      console.log(res);
      if (res.code == 'ITEST-200' && res.data === 1) {
        notification.success({
          message: '修改密码成功',
          duration: 3,
        });
      } else {
        notification.error({
          message: '修改密码失败',
          duration: 3,
        });
      }
    }
    const handleSubmit = () => {
      if (!(data.email && data.code && data.newpass && data.againnewpass)) {
        notification.warning({
          message: '字段不能为空',
          duration: 3,
        });
      } else {
        if (data.newpass !== data.againnewpass) {
          notification.error({
            message: '两次密码不一致',
            duration: 3,
          });
        } else {
          verify();
        }
      }
    };
    return {
      ...toRefs(data),
      list: secureSettingList,
      handleSubmit1,
      handleSubmit,
    };
  },
});
</script>
<style lang="less" scoped>
.extra {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  font-weight: normal;
  color: #1890ff;
  cursor: pointer;
}
</style>
