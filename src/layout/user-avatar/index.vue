<template>
  <div class="vab-avatar" >
    <a-dropdown >
      <span class="ant-dropdown-link">
       <a-avatar style="backgroundColor:#87d068" icon="user" />
        {{ username }} 
        <DownOutlined />
      </span>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click="logout">退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
  import { DownOutlined } from '@ant-design/icons-vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'UserAvatar',
    components: { DownOutlined },
    computed: {
      ...mapGetters({
        username: 'user/username',
      }),
    },
    methods: {
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$router.push('/login')
      },
    },
  }
</script>
<style lang="less">
  .vab-avatar {
    width: 90px;
    margin-right: 20px;
    .ant-dropdown-link {
      display: block;
      min-height: 64px;
      cursor: pointer;
    }
  }
</style>