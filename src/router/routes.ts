import { RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    // 登录页
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: 'login',
      icon: 'Avatar',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'aaa',
      icon: '',
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    // 重定向
    path: '/meg',
    name: 'meg',
    component: () => import('@/views/meg/layout/index.vue'),
    meta: {
      title: '脑磁数据采集',
      icon: 'Platform',
      hidden: false,
    },
    redirect: '/meg/home',
    children: [
      {
        path: '/meg/home',
        components: {
          tabberRouter: () => import('@/views/meg/home/tabbar.vue'),
          LayoutIcon1Router: () => import('@/views/meg/home/LayoutIcon1.vue'),
          sliderRouter: () => import('@/views/meg/home/slider.vue'),
          LayoutIcon2Router: () => import('@/views/meg/home/LayoutIcon2.vue'),
          mainRouter: () => import('@/views/meg/home/main.vue'),
        },
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/meg/editAmplifier',
        components: {
          tabberRouter: () => import('@/views/meg/editAmplifier/tabbar.vue'),
          LayoutIcon1Router: () =>
            import('@/views/meg/editAmplifier/LayoutIcon1.vue'),
          sliderRouter: () => import('@/views/meg/editAmplifier/slider.vue'),
          LayoutIcon2Router: () =>
            import('@/views/meg/editAmplifier/LayoutIcon2.vue'),
          mainRouter: () => import('@/views/meg/editAmplifier/main.vue'),
        },
        meta: {
          title: '放大器设置',
          hidden: false,
          icon: 'Finished',
        },
      },
      {
        path: '/meg/onlineEEG',
        components: {
          tabberRouter: () => import('@/views/meg/onlineEEG/tabbar.vue'),
          LayoutIcon1Router: () =>
            import('@/views/meg/onlineEEG/LayoutIcon1.vue'),
          sliderRouter: () => import('@/views/meg/onlineEEG/slider.vue'),
          LayoutIcon2Router: () =>
            import('@/views/meg/onlineEEG/LayoutIcon2.vue'),
          mainRouter: () => import('@/views/meg/onlineEEG/main.vue'),
        },
        meta: {
          title: '在线EEG测量',
          hidden: false,
          icon: 'Histogram',
        },
      },
    ],
  },
  {
    // 重定向
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      icon: 'Platform',
      hidden: true,
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      icon: 'Lock',
      hidden: false,
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    // 404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      icon: 'DocumentDelete',
      hidden: true,
    },
  },
  {
    // 重定向
    path: '/:pathMatch(.*)',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '404',
      icon: 'DocumentDelete',
      hidden: true,
    },
  },
]
