<template>
  <a-menu-item :key="routeChildren.name" @click.capture="handleLink">
    <span class="anticon">
      <remi-icon :icon="routeChildren.meta.icon"></remi-icon>
    </span>
    <span>{{ routeChildren.meta.title }}</span>
  </a-menu-item>
</template>

<script>
  import RemiIcon from '@/layout/remi-icon'
  export default {
    name: 'MenuItem',
    components: {
       RemiIcon 
    },
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default: () => null,
      },
    },
    methods: {
      handleLink() {
        const routePath = this.routeChildren.fullPath
        const target = this.routeChildren.meta.target
        if (target === '_blank') {
          window.open(routePath.href)
        } else {
         this.$router.push(routePath)
        }
      },
    },
  }
</script>
