/**
 * @description 登录、获取用户信息、获取菜单信息、退出登录、清除accessToken逻辑
 */
import { getUserInfo, login, getUserMenu } from '@/api/user'
import { message } from 'ant-design-vue'

const state = () => ({
  accessToken: JSON.parse(sessionStorage.getItem('accessToken'))||'' ,
  loginUser: JSON.parse(sessionStorage.getItem('loginUser')) ||null,
  userMenus:JSON.parse(sessionStorage.getItem('userMenus'))||[]
})

const getters = {
  username: (state) => {
   return state.loginUser?state.loginUser.realName:''
  } 
}

const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  
  setLoginUser(state, userInfo) {
    state.loginUser = userInfo
  },
  setUserMenus(state, menus) {
    state.userMenus = menus
  },
}

const actions = {
  async login({ commit },params) {
    const { data } = await login(params)
    if (!data) {
      message.error(`验证失败，请重新登录...`)
      return false
    }
    commit('setAccessToken', data)
    sessionStorage.setItem('accessToken',JSON.stringify(data) )

    let res = await getUserInfo()
    if(res.code !== 200){
      return false
    }
    let userInfo = res.data;
    commit('setLoginUser', userInfo)
    sessionStorage.setItem('loginUser',JSON.stringify(userInfo))

    let res2 = await getUserMenu()
    if(res2.code !== 200){
      return false
    }
    let menus = res2.data;
    commit('setUserMenus', menus)
    sessionStorage.setItem('userMenus',JSON.stringify(menus))

    return true
  },


  async logout({ commit }) {
    commit('setAccessToken', '')
    commit('setLoginUser', null)
    commit('setUserMenus', [])
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('loginUser')
    sessionStorage.removeItem('userMenus')
  },
  
}

export default {state, getters, mutations, actions }
