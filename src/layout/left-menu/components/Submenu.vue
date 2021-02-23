<template>
  <a-sub-menu :key="item.fullPath">
    <template v-slot:title>
      <span class="anticon">
        <remi-icon :icon="item.meta.icon"></remi-icon>
      </span>
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script>
  import RemiIcon from '@/layout/remi-icon'
  export default {
    name: 'Submenu',
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
        default() {
          return null
        },
      },
    },
    methods: {},
  }
</script>
