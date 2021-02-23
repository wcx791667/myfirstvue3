<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider :trigger="null" v-model:collapsed="collapsed" collapsible>
      <div class="layout-logo">logo</div>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <left-menu v-for="(menu) in menuTree" :key="`${menu.name}`" :item="menu" />
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <menu-unfold-outlined
              v-if="collapse"
              class="trigger"
            @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="layout-header-right">
              <user-avatar />
            </div>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item v-for="item in breadcrumbs" :key="item">{{item}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import LeftMenu from "./left-menu";
import UserAvatar from './user-avatar'
import { mapState } from 'vuex';
import {listToTree} from '@/utils/index'
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LeftMenu,
    UserAvatar
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["Home"],
      breadcrumbs:[],
      menuTree:[],
      menuList:[]
    };
  },
  created(){
    // 页面初始化时候渲染菜单
    this.menuList = this.$store.state['user']['userMenus']
    this.menuTree = listToTree(this.$store.state['user']['userMenus'])
    this.getBreadcrumb()
  },
  watch: {
   $route(to,from ){  
    this.breadcrumbs = []
    if(to.name !=="Login"){
        this.getBreadcrumb()
    }
   }
 },
  methods:{
    getBreadcrumb(){
      let routeName = this.$route.name
      if(routeName === 'Home'){
        this.breadcrumbs = []
      }else{
       let curRoute =  this.menuList.find(x=>x.name === routeName)
        let parentId =  curRoute.parentId;
        let id =  curRoute.id;
        if(parentId === 0){
          this.breadcrumbs = [curRoute.meta.title]
        }else{
          this.breadcrumbs =  this.getParentMenu(id,[]).reverse()
        }
      }
    },
    // 递归查找当前节点和其父节点信息
    getParentMenu(id,temp =[]){
      let curRoute =  this.menuList.find(x=>x.id === id)
      let pId = curRoute.parentId
      if(pId === 0){
       temp.push(curRoute.meta.title)
       return temp
      }else{
       temp.push(curRoute.meta.title)
       return this.getParentMenu(pId,temp)
      }
    }
  }
};
</script>
<style scoped>
.layout-logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.layout-header-right{
  display: flex;
  justify-content: flex-end;
}
</style>
