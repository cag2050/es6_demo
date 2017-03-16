<template>
  <div id="app">
    <div>es6练习（路由路径）：</div>
    <div><router-link to='/'>首页</router-link></div>
    <div><router-link to='Spread'>扩展运算符(3个点)</router-link></div>
    <div><router-link to='Destructuring'>解构赋值</router-link></div>
    <div><router-link to='ObjectAssign'>Object.assign()方法使用</router-link></div>
    <div><router-link to='Array'>对象里面存数组</router-link></div>
    <div><router-link to='Object'>对象里面添加对象</router-link></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
