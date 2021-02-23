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
import { reactive, toRefs, onBeforeMount, onMounted, onUnmounted,computed, ref} from "vue";
export default {
  name: "home",
  setup() {
    console.log("1-开始创建组件-setup");
    const user = reactive({
      age: 18,
      year: computed(() => {
        return  2021 - user.age 
      })
    });
    //ref只可以监听简单数据，reactive可以监听所有数据
    //ref这种写法简单，但也有弊端，经过尝试，我发现他只能监听一些如数字
    //字符串、布尔之类的简单数据而如果需要监听如上面代码一样的jsonArray
    const name = ref('小四')
    onMounted(() => {
      console.log("2.-组件挂载到页面之后执行-------onMounted");
    })
    onUnmounted(()=>{
       console.log("3.-组件卸载后执行-------onUnmounted");
    })
    function changeAge(val) {
      user.age += val
    }
    function changeName() {
      // ref修改数据需要使用这样xx.value=xxx的形式,
      // reactive 可以直接通过state.reactiveField=修改
      name.value ='小五' 
    }
    return {
      name,
      user,
      changeAge,
      changeName
    };
  },
};
</script>
<style scoped>
</style>