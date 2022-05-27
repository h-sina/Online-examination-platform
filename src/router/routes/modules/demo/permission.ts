import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const permission: AppRouteModule = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/permission/front/page',
  meta: {
    orderNo: 15,
    icon: 'ion:key-outline',
    title: '教师面板',
  },

  children: [
    {
      path: 'markPaper',
      name: 'MarkPaper',
      component: () => import('/@/views/demo/permission/MarkPaper.vue'),
      meta: {
        title: '主页',
      },
    },
    {
      path: 'index',
      name: 'Index',
      component: () => import('/@/views/demo/permission/index.vue'),
      meta: {
        title: '题库管理',
      },
    },
    {
      path: 'subject',
      name: 'Subject',
      component: () => import('/@/views/demo/permission/Subject.vue'),
      meta: {
        title: '建题管理',
      },
    },
    {
      path: 'exam',
      name: 'Exam',
      component: () => import('/@/views/demo/permission/Exam.vue'),
      meta: {
        title: '组卷管理',
      },
    },
    // {
    //   path: 'class',
    //   name: 'Class',
    //   component: () => import('/@/views/demo/permission/Class.vue'),
    //   meta: {
    //     title: '班级管理',
    //   },
    // },
    // {
    //   path: 'message',
    //   name: 'Message',
    //   component: () => import('/@/views/demo/permission/Message.vue'),
    //   meta: {
    //     title: '消息管理',
    //   },
    // },

    // {
    //   path: 'front',
    //   name: 'PermissionFrontDemo',
    //   component: getParentLayout('PermissionFrontDemo'),
    //   meta: {
    //     title: t('routes.demo.permission.front'),
    //   },
    //   children: [
    //     {
    //       path: 'page',
    //       name: 'FrontPageAuth',
    //       component: () => import('/@/views/demo/permission/front/index.vue'),
    //       meta: {
    //         title: t('routes.demo.permission.frontPage'),
    //       },
    //     },
    //     {
    //       path: 'btn',
    //       name: 'FrontBtnAuth',
    //       component: () => import('/@/views/demo/permission/front/Btn.vue'),
    //       meta: {
    //         title: t('routes.demo.permission.frontBtn'),
    //       },
    //     },
    //     {
    //       path: 'auth-pageA',
    //       name: 'FrontAuthPageA',
    //       component: () => import('/@/views/demo/permission/front/AuthPageA.vue'),
    //       meta: {
    //         title: t('routes.demo.permission.frontTestA'),
    //         roles: [RoleEnum.SUPER],
    //       },
    //     },
    //     {
    //       path: 'auth-pageB',
    //       name: 'FrontAuthPageB',
    //       component: () => import('/@/views/demo/permission/front/AuthPageB.vue'),
    //       meta: {
    //         title: t('routes.demo.permission.frontTestB'),
    //         roles: [RoleEnum.TEST],
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: 'back',
    //   name: 'PermissionBackDemo',
    //   component: getParentLayout('PermissionBackDemo'),
    //   meta: {
    //     title: t('routes.demo.permission.back'),
    //   },
    //   children: [
    //     {
    //       path: 'page',
    //       name: 'BackAuthPage',
    //       component: () => import('/@/views/demo/permission/back/index.vue'),
    //       meta: {
    //         title: t('routes.demo.permission.backPage'),
    //       },
    //     },
    //     {
    //       path: 'btn',
    //       name: 'BackAuthBtn',
    //       component: () => import('/@/views/demo/permission/back/Btn.vue'),
    //       meta: {
    //         title: t('routes.demo.permission.backBtn'),
    //       },
    //     },
    //   ],
    // },
  ],
};

export default permission;
