<template>
  <div class="demo-wrap p-10 m-5">
    <a-input type="file" id="fileSelecter" accept=".xlsx" />
    <a-button type="primary" @click="uploadF" class="mt-5">导入学生</a-button>
    <div style="display: flex; align-items: center; justify-content: center">
      <!-- <ImpExcel @success="loadDataSuccess"> -->
      <!-- <a-button class="m-3">导入Excel</a-button> -->
      <PlusCircleTwoTone :style="{ fontSize: '100px' }" />
      <!-- </ImpExcel> -->
    </div>
    <!-- <a-button href="href" @click="downLoad">下载</a-button> -->
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from 'vue';
import { ImpExcel } from '/@/components/Excel';
import { addStuByExcel } from '/@/api/sys/upload';
import {
  PicRightOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  PlusCircleTwoTone,
} from '@ant-design/icons-vue';
import { useMessage } from '/@/hooks/web/useMessage';
const { notification } = useMessage();
import { jsonToSheetXlsx, aoaToSheetXlsx } from '/@/components/Excel';
import axios from 'axios';
import { getToken } from '/@/utils/auth';

export default {
  components: {
    PicRightOutlined,
    CheckCircleTwoTone,
    CloseCircleTwoTone,
    PlusCircleTwoTone,
    ImpExcel,
  },
  setup () {
    onMounted(() => { });
    const data = reactive({
      list: [],
      examId: '',
      href: '',
    });
    function loadDataSuccess (excelDataList) {
      console.log(excelDataList);
      // var fileInput = document.querySelector('#fileSelecter');
      // var file = fileInput.files.item(0);
      // console.log(file);
      let formData = new FormData();
      formData.append('file', excelDataList);
      console.log(formData);

      const token = getToken();
      console.log(token);
      let config = {
        headers: {
          // 'content-type': 'multipart/form-data',
          Authorization: token,
        },
        responseType: 'blob',
      };
      axios
        .post('https://www.itestwithme.top/user/s-admin/add/student', formData, config)
        .then((response) => {
          // 处理后端返回的二进制流文件触发其自动下载
          let filename = 'stu.xlsx';
          var blob = new Blob([response.data], {
            type: 'application/octet-stream;charset=utf-8',
          });

          let DownloadLink = document.createElement('a');
          DownloadLink.style = 'display: none'; // 创建一个隐藏的a标签
          DownloadLink.download = filename;
          DownloadLink.href = window.URL.createObjectURL(blob);
          document.body.appendChild(DownloadLink);
          DownloadLink.click(); // 触发a标签的click事件
          document.body.removeChild(DownloadLink);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function uploadF () {
      var fileInput = document.querySelector('#fileSelecter');
      var file = fileInput.files.item(0);
      console.log(file);
      let formData = new FormData();
      formData.append('file', file);
      console.log(formData);

      const token = getToken();
      console.log(token);
      let config = {
        headers: {
          // 'content-type': 'multipart/form-data',
          Authorization: token,
        },
        responseType: 'blob',
      };
      axios
        .post('https://www.itestwithme.top/user/s-admin/add/student', formData, config)
        .then((response) => {
          // 处理后端返回的二进制流文件触发其自动下载
          let filename = 'stu.xlsx';
          var blob = new Blob([response.data], {
            type: 'application/octet-stream;charset=utf-8',
          });

          let DownloadLink = document.createElement('a');
          DownloadLink.style = 'display: none'; // 创建一个隐藏的a标签
          DownloadLink.download = filename;
          DownloadLink.href = window.URL.createObjectURL(blob);
          document.body.appendChild(DownloadLink);
          DownloadLink.click(); // 触发a标签的click事件
          document.body.removeChild(DownloadLink);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      ...toRefs(data),
      loadDataSuccess,
      uploadF,
    };
  },
};
</script>

<style lang="less" scoped>
.demo-wrap {
  background-color: @component-background;
  border-radius: 10px;
}
</style>
