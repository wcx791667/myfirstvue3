import Layout from '@/layout'
import Login from '@/views/login'

const routers = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
        },
      },
      {
        path: 'secondLevel',
        name: 'Test',
        component: () => import('@/views/second-level/index'),
        meta: {
          title: '二级菜单',
          icon: 'home-4-line',
        },
        children: [
         {
          path: 'test1',
          name: 'Test1',
          component: () => import('@/views/second-level/test1'),
          meta: {
            title: '二级菜单第一个',
            icon: 'home-4-line',
          },
         },
         {
          path: 'test2',
          name: 'Test2',
          component: () => import('@/views/second-level/test2'),
          meta: {
            title: '二级菜单第二个',
            icon: 'home-4-line',
          },
         }
        ]
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      icon: 'home-4-line',
    },
  },
]

export  {routers}