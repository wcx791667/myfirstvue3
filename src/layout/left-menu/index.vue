<template>
<!-- 根据类型动态渲染组件,如果有子节点并且子节点数量大于1渲染Submenu否则渲染MenuItem -->
  <component
    :is="menuComponent"
    v-if="!item.hidden"
    :item="item"
    :route-children="routeChildren"
  >
    <!-- 如果是Submenu插槽位置重复渲染left-menu组件 -->
    <template v-if="item.children && item.children.length">
      <left-menu
        v-for="route in item.children"
        :key="route.fullPath"
        :item="route"
      ></left-menu>
    </template>
  </component>
</template>

<script>
  import MenuItem from './components/MenuItem'
  import Submenu from './components/Submenu'
  export default {
    name: 'LeftMenu',
    components: { MenuItem, Submenu },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        routeChildren: {},
        menuComponent: '',
      }
    },
    created() {
      const showChildren = this.handleChildren(this.item.children)
      if (showChildren.length === 0) {
        this.menuComponent = 'MenuItem'
        this.routeChildren = this.item
      } else if (showChildren.length === 1 && this.item.alwaysShow !== true) {
        this.menuComponent = 'MenuItem'
        this.routeChildren = showChildren[0]
      } else {
        this.menuComponent = 'Submenu'
      }
    },
    methods: {
      handleChildren(children = []) {
        if (children === null) return []
        return children.filter((item) => item.hidden !== true)
      },
    },
  }
</script>
<style lang="less">
  .anticon {
    margin-right: 3px !important;
  }
</style>
