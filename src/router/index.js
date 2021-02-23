import { createRouter, createWebHashHistory } from 'vue-router'
import {routers} from './routers'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
})

const LOGIN_PAGE_NAME = 'Login'
const HOME_PAGE_NAME = 'Home'

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('accessToken')
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: HOME_PAGE_NAME// 跳转到home页
    })
  }else{
    next()
  }
})


export default router
