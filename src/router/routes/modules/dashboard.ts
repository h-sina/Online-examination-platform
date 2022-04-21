import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  // redirect: '/dashboard/analysis',
  redirect: '/dashboard/stuinfo',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '学习面板',
  },
  children: [
    // {
    //   path: 'analysis',
    //   name: 'Analysis',
    //   component: () => import('/@/views/dashboard/analysis/index.vue'),
    //   meta: {
    //     // affix: true,
    //     title: t('routes.dashboard.analysis'),
    //   },
    // },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.workbench'),
    //   },
    // },
    {
      path: 'stuinfo',
      name: 'Stuinfo',
      component: () => import('/@/views/dashboard/stuinfo/index.vue'),
      meta: {
        title: '主页',
      },
    },
    {
      path: 'info',
      name: 'Info',
      component: () => import('/@/views/dashboard/info/index.vue'),
      meta: {
        title: '详细信息',
      },
    },
    {
      path: 'wrongques',
      name: 'Wrongques',
      component: () => import('/@/views/dashboard/wrongques/index.vue'),
      meta: {
        title: '错题管理',
      },
    },
    {
      path: 'quesbank',
      name: 'Quesbank',
      component: () => import('/@/views/dashboard/quesbank/index.vue'),
      meta: {
        title: '题库训练',
      },
      // children: [
      //   {
      //     path: 'quesDetail/:id',
      //     name: 'questionsDetail',
      //     component: import('/@/views/dashboard/quesbank/questionsDetail/index.vue'),
      //     meta: {
      //       carryParam: true,
      //       hidePathForChildren: true, // 本级path将会在子级菜单中合成完整path时会忽略这一层级
      //       ignoreRoute: true, // 本路由仅用于菜单生成，不会在实际的路由表中出现
      //     },
      //     // children: [
      //     //   path: 'quesDetail/id1', // 其上级有标记hidePathForChildren，所以本级在生成菜单时最终的path为  /level/tabs/id1
      //     //   name: 'questionsDetail',
      //     //   component: import('/@/views/dashboard/quesbank/questionsDetail/index.vue'),
      //     //   meta: {
      //     //     carryParam: true,
      //     //     ignoreRoute: true,  // 本路由仅用于菜单生成，不会在实际的路由表中出现
      //     //   },
      //     // ]
      //   },
      // ],
    },
    // {
    //   path: 'quesDetail/:id',
    //   name: 'quesDatail',
    //   component: import('/@/views/dashboard/quesbank/questionsDetail/index.vue'),
    //   meta: {
    //     carryParam: true,
    //     // hideMenu: true,
    //     title: '题目详情',
    //   },
    // },
    {
      path: 'collect',
      name: 'Collect',
      component: () => import('/@/views/dashboard/collect/index.vue'),
      meta: {
        title: '收藏管理',
      },
    },
    {
      path: 'exam',
      name: 'Exam',
      component: () => import('/@/views/dashboard/exam/index.vue'),
      meta: {
        title: '我的考试',
      },
    },
    {
      path: 'class',
      name: 'Class',
      component: () => import('/@/views/dashboard/class/index.vue'),
      meta: {
        title: '我的班级',
      },
    },
  ],
};

export default dashboard;
