<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :md="24" :sm="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <div class="login-container-hello">hello!</div>
          <div class="login-container-title">欢迎来到 {{ title }}</div>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent>
            <a-form-item>
              <a-input v-model:value="form.username" placeholder="Username">
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="form.password"
                type="password"
                placeholder="Password"
              >
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                :disabled="form.username === '' || form.password === ''"
              >
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import api from '@/api/index'
export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {},
  mounted() {
    this.form.username = "admin";
    this.form.password = "123456";
  },
  methods: {
    //异步请求
    handleSubmit() {
      console.log(1)
      api.login(this.form).then(res=>{
        console.log(res.data)
        // this.$message.success(res.data)
      })
     console.log(2)
    },
    //同步请求
    // async handleSubmit() {
    //   console.log(1)
    //   let res = await api.login(this.form)
    //   console.log(res.data)
    //   console.log(2)
    // },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/login_images/login_background.png"); // ~是相对于其他路径（文件）的，类似于相对路径
  background-size: cover;
  &-form {
    width: calc(100% - 40px);
    height: 380px;
    padding: 4vh;
    margin-top: calc((100vh - 380px) / 2);
    margin-right: 20px;
    margin-left: 20px;
    background: url("~@/assets/login_images/login_form.png");
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
  }
  &-hello {
    font-size: 32px;
    color: #fff;
  }
  &-title {
    margin-bottom: 30px;
    font-size: 20px;
    color: #fff;
  }
  &-tips {
    position: fixed;
    bottom: 10px;
    width: 100%;
    height: 40px;
    color: rgba(255, 255, 255, 0.856);
    text-align: center;
  }
  .ant-col {
    width: 100%;
    padding: 0 10px 0 10px;
  }
  .ant-input {
    height: 35px;
  }
}
</style>
