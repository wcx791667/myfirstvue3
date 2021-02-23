//  @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。

import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.js$/)

const modules = {}
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})

// 以上代码相当于 
// import user from './modules/user'
// user.namespaced = true
// modules={
//   user
// }

export default createStore({
  modules,
})
