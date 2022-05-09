<template>
  <PageWrapper title="关于">
    <template #headerContent>
      <div class="flex justify-between items-center">
        <span class="flex-1">
          <a :href="GITHUB_URL" target="_blank">线上考试系统</a>
          是依托于计算机技术和网络技术的基础上，为满足现代教育领域的需求而开发的一款系统————七号开发小组
        </span>
      </div>
    </template>
    <Description @register="infoRegister" class="enter-y" />
    <QrCode :value="qrCodeUrl" :logo="LogoImg" />

    <!-- <Description @register="register" class="my-4 enter-y" />
    <Description @register="registerDev" class="enter-y" />-->
  </PageWrapper>
</template>
<script lang="ts" setup>
import { h } from 'vue';
import { defineComponent, ref, unref } from 'vue';

import { Tag } from 'ant-design-vue';
import { PageWrapper } from '/@/components/Page';
import { Description, DescItem, useDescription } from '/@/components/Description/index';
import { GITHUB_URL, SITE_URL, DOC_URL } from '/@/settings/siteSetting';

import { QrCode, QrCodeActionType } from '/@/components/Qrcode/index';
import LogoImg from '/@/assets/images/TechLifeCommunication.png';

const qrCodeUrl = 'https://h-sina.404name.top/';
const qrRef = ref<Nullable<QrCodeActionType>>(null);
function download() {
  const qrEl = unref(qrRef);
  if (!qrEl) return;
  qrEl.download('文件名');
}

const { pkg, lastBuildTime } = __APP_INFO__;

const { dependencies, devDependencies, name, version } = pkg;

const schema: DescItem[] = [];
const devSchema: DescItem[] = [];

const commonTagRender = (color: string) => (curVal) => h(Tag, { color }, () => curVal);
const commonLinkRender = (text: string) => (href) => h('a', { href, target: '_blank' }, text);

const infoSchema: DescItem[] = [
  {
    label: '版本',
    field: 'version',
    render: commonTagRender('blue'),
  },
  {
    label: '最后编译时间',
    field: 'lastBuildTime',
    render: commonTagRender('blue'),
  },
  // {
  //   label: '文档地址',
  //   field: 'doc',
  //   render: commonLinkRender('文档地址'),
  // },
  {
    label: '预览地址',
    field: 'preview',
    render: commonLinkRender('预览地址'),
  },
  {
    label: 'Github',
    field: 'github',
    render: commonLinkRender('Github'),
  },
  {
    label: '扫码预览',
  },
];

const infoData = {
  version: '1.0.0',
  lastBuildTime: '无限维护',
  doc: DOC_URL,
  preview: SITE_URL,
  github: GITHUB_URL,
};

Object.keys(dependencies).forEach((key) => {
  schema.push({ field: key, label: key });
});

Object.keys(devDependencies).forEach((key) => {
  devSchema.push({ field: key, label: key });
});

const [register] = useDescription({
  title: '生产环境依赖',
  data: dependencies,
  schema: schema,
  column: 3,
});

const [registerDev] = useDescription({
  title: '开发环境依赖',
  data: devDependencies,
  schema: devSchema,
  column: 3,
});

const [infoRegister] = useDescription({
  title: '项目信息',
  data: infoData,
  schema: infoSchema,
  column: 2,
});
</script>
