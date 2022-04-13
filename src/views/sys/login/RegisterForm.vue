<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
      <!-- <FormItem name="account" class="enter-x">
        <Input
          class="fix-auto-fill"
          size="large"
          v-model:value="formData.account"
          :placeholder="t('sys.login.userName')"
        />
      </FormItem>
      <FormItem name="mobile" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.mobile"
          :placeholder="t('sys.login.mobile')"
          class="fix-auto-fill"
        />
      </FormItem>-->
      <FormItem name="invitationCode" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.invitationCode"
          placeholder="邀请码"
          class="fix-auto-fill"
        />
        <a-button color="warning" @click="inviteCode">验证邀请码</a-button>
      </FormItem>
      <FormItem name="email" class="enter-x">
        <!-- <CountdownInput
          size="large"
          class="fix-auto-fill"
          v-model:value="formData.sms"
          placeholder="邮箱"
          sendCodeApi="sendCodeApi"
        />-->
        <Input size="large" v-model:value="formData.email" placeholder="邮箱" class="fix-auto-fill" />
        <a-button color="warning" @click="sendCodeApi">获取验证码</a-button>
      </FormItem>
      <FormItem name="emailCode" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.emailCode"
          placeholder="邮箱验证码"
          class="fix-auto-fill"
        />
      </FormItem>
      <!-- <FormItem name="password" class="enter-x">
        <StrengthMeter
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </FormItem>-->
      <!-- <FormItem name="confirmPassword" class="enter-x">
        <InputPassword
          size="large"
          visibilityToggle
          v-model:value="formData.confirmPassword"
          :placeholder="t('sys.login.confirmPassword')"
        />
      </FormItem>-->

      <!-- <FormItem class="enter-x" name="policy"> -->
      <!-- No logic, you need to deal with it yourself -->
      <!-- <Checkbox v-model:checked="formData.policy" size="small">{{ t('sys.login.policy') }}</Checkbox> -->
      <!-- </FormItem> -->

      <Button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
      >{{ t('sys.login.registerButton') }}</Button>
      <Button
        size="large"
        block
        class="mt-4 enter-x"
        @click="handleBackLogin"
      >{{ t('sys.login.backSignIn') }}</Button>
    </Form>
  </template>
</template>
<script lang="ts" setup>
import { reactive, ref, unref, computed } from 'vue';
import LoginFormTitle from './LoginFormTitle.vue';
import { Form, Input, Button, Checkbox } from 'ant-design-vue';
import { StrengthMeter } from '/@/components/StrengthMeter';
import { CountdownInput } from '/@/components/CountDown';
import { useI18n } from '/@/hooks/web/useI18n';
import { useLoginState, useFormRules, useFormValid, LoginStateEnum } from './useLogin';
import { log } from 'util';
const { notification } = useMessage();

const FormItem = Form.Item;
const InputPassword = Input.Password;
const { t } = useI18n();
const { handleBackLogin, getLoginState } = useLoginState();
import { useUserStore } from '/@/store/modules/user';

const userStore = useUserStore();
import { vertificateCode, emailCode, register } from '/@/api/demo/account';
import { useMessage } from '/@/hooks/web/useMessage';

const formRef = ref();
const loading = ref(false);

const formData = reactive({
  invitationCode: '',
  email: '',
  emailCode: '',
  userId: '',
  account: '',
  password: '',
  confirmPassword: '',
  mobile: '',
  sms: '',
  policy: false,
});
const registerStep = ref();

const { getFormRules } = useFormRules(formData);
const { validForm } = useFormValid(formRef);

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);

/**
 * 处理注册 填完邮箱验证码的最后一步
 */
async function handleRegister() {
  const data = await validForm();
  // if (!data) return;
  // console.log(data);
  try {
    const res = await register(formData.emailCode, formData.email, formData.userId);
    if (res.code === 'ITEST-200') {
      notification.success({
        message: '注册成功',
        duration: 3,
      });
    } else {
      notification.error({
        message: '注册失败',
        duration: 3,
      });
    }
  } catch (error) {
    notification.error({
      message: '出错误啦',
      description: error,
      duration: 3,
    });
  } finally {
    loading.value = false;
  }
}

/**
 * 验证邀请码
 */
async function inviteCode() {
  if (formData.invitationCode == '') {
    notification.error({
      message: '邀请码不能为空',
      duration: 3,
    });
  } else {
    // 调用验证邀请码的API
    try {
      const res = await vertificateCode(formData.invitationCode);
      if (res.code === 'ITEST-200') {
        notification.success({
          message: '邀请码正确',
          description: '请继续填写邮箱',
          duration: 3,
        });
        registerStep.value = 'ITEST-REGISTER-1';
        formData.userId = res.data;
      } else {
        notification.error({
          message: '邀请码失效',
          description: '请重新输入新的邀请码',
          duration: 3,
        });
      }
    } catch (error) {
      createErrorModal({
        title: t('sys.api.errorTip'),
        content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
        getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
      });
    } finally {
      loading.value = false;
    }
  }
}

/**
 * 验证邮箱格式
 */
function IsEmail(str) {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(str);
}

/**
 * 发送邮箱验证码
 */
async function sendCodeApi() {
  // 发送验证码至邮箱
  if (formData.email == '') {
    notification.error({
      message: '出错误啦',
      description: '邮箱不能为空',
      duration: 3,
    });
  } else if (IsEmail(formData.email) == false) {
    notification.error({
      message: '请填写正确的邮箱',
      duration: 3,
    });
  } else if (registerStep.value == '') {
    notification.error({
      message: '出错误啦',
      description: '请先验证邀请码',
      duration: 3,
    });
  } else {
    try {
      const res = await emailCode(formData.email, registerStep.value);
      if (res.code === 'ITEST-200') {
        notification.success({
          message: '邮箱正确',
          description: '已发送验证码到邮箱',
          duration: 3,
        });
      } else {
        notification.error({
          message: res.msg,
          duration: 3,
        });
      }
    } catch (error) {
      notification.error({
        message: '出错误啦',
        description: error,
        duration: 3,
      });
    } finally {
      loading.value = false;
    }
  }
}
</script>
