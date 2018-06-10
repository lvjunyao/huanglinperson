// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 部分样式重置
import './style/public.css'

import axios from 'axios' // 处理http请求
import store from './store' // 状态管理
import VueLazyload from 'vue-lazyload' // 懒加载
/**
 * @desc 懒加载配置
 * @author wtniu
 * preLoad: 1.3,  // 预加载高度比例
  error: './assets/error.jpg',  // 加载错误时显示
  loading: './assets/loading.gif', // 加载成功时显示
  attempt: 1  // 尝试计数
 */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/error.jpg',
  loading: './assets/loading.gif',
  attempt: 1
})

Vue.prototype.$axios = axios

// 去掉开发环境打印信息
Vue.config.productionTip = false

/* eslint-disable no-new */
// document.addEventListener('deviceready', function() {
  new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
  })
  // window.navigator.splashscreen.hide()
// }, false);

