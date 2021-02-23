<template>
  <div>
    <button @click="changeName()">改变姓名</button>
    <p>姓名：{{ name }}</p>
    <p>
      <button @click="changeAge(-1)">-</button>
      年龄：{{ user.age }}
      <button @click="changeAge(1)">+</button>
    </p>
    <p>
      出生年份：
      {{ user.year }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Home2",
  components: {},
  data() {
    return {
      user: {
        age: 18,
        year: 0,
      },
      name:'小四'
    };
  },
  created() {
    console.log("1.-组件实例创建前此时dom元素未挂载");
  },
  mounted() {
    console.log("2.-组件挂载后");
    this.user.year = this.getYear();
  },
  methods: {
    getYear() {
      return 2021 - this.user.age;
    },
    changeName(){
      this.name = '小五'
    },
    changeAge(val){
      this.user.age = this.user.age + val
      this.user.year = this.getYear()
    }
  },
};
</script>
<style></style>
