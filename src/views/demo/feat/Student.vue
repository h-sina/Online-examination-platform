<template>
  <QrCode :value="qrCodeUrl" />
  <QrCode :value="qrCodeUrl" :logo="LogoImg" />
</template>
<script lang="ts">
import { defineComponent, ref, unref } from 'vue';
import { QrCode, QrCodeActionType } from '/@/components/Qrcode/index';
import LogoImg from '/@/assets/images/TechLifeCommunication.png';
const qrCodeUrl = 'https://h-sina.404name.top/';

export default defineComponent({
  components: { QrCode },
  setup() {
    const qrRef = ref<Nullable<QrCodeActionType>>(null);
    function download() {
      const qrEl = unref(qrRef);
      if (!qrEl) return;
      qrEl.download('文件名');
    }
    return {
      qrCodeUrl,
      LogoImg,
      download,
      qrRef,
    };
  },
});
</script>
<style scoped>
.qrcode-demo-item {
  width: 30%;
  margin-right: 1%;
}
</style>
