import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/styles/reset.css'

require('../mock/index')

let app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
// 该方法是直接挂载到入口文件index.html 的 id=app 的dom 元素上的
// 与钩子函数mounted联系到一起，即挂载完后调用这个钩子函数，编译好的html已挂载可以访问和更改数据
app.mount('#app')
