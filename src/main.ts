import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 导入qiankun所需方法
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 当地一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载的子应用
  initGlobalState, // 微前端之间的通信
  start, // 启动
  addGlobalUncaughtErrorHandler
} from 'qiankun'

console.log('12')

// 注册子应用
registerMicroApps([
  {
    name: 'one',
    entry: '//localhost:4001',
    container: '#micro-view',
    activeRule: '/one',
  },
],
  {
    beforeLoad: (app) => {
      console.log('before load', app.name);
      return Promise.resolve();
    },
    beforeMount: (app) => {
      console.log('before mount', app.name);
      return Promise.resolve();
    },
    afterMount: (app) => {
      console.log('after mount', app.name);
      return Promise.resolve();
    },
    beforeUnmount: (app) => {
      console.log('before Unmount', app.name);
      return Promise.resolve();
    },
    afterUnmount: (app) => {
      console.log('after Unmount', app.name);
      return Promise.resolve();
    },
  })

setDefaultMountApp('one')

// 第一个子应用加载完毕后回调
runAfterFirstMounted(() => {
  console.log('第一个子应用加载完毕后的回调');
})

addGlobalUncaughtErrorHandler((ev) => {
  console.error(ev);
  // if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
  //   console.error('微应用加载失败，请检查应用是否可运行')
  // }
});

// 启动qiankun
start()

// 渲染主应用
new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#container')
