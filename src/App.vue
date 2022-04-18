<template>
  <div id="main">
    这是主应用文字
    <br />
    <button @click="changeView('/one')">子应用one</button>
    <hr />
    <router-view></router-view>
    <!--这里的 micro-view 对应的是上面 main.js 里面的子应用配置的 container: '#micro-view' -->
    <div id="micro-view"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  methods: {
    changeView(who: string) {
      window.history.pushState(null, who, who)
    },
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
