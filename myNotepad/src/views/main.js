// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App'
import '../assets/global.styl'
import createRouter from '../router/index.js'
import createStore from './store/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

  // 全局导航守卫
router.beforeEach((to, from, next) => {
  console.log('before each invoked 1')
  if (to.fullPath === '/login') {
    next('/app')
  }else next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked 4')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked 5')
  // 没有next()，不影响路由跳转
})
/* eslint-disable no-new */
new Vue({
  router,
  store, // 放在最外面，所有的子节点都能拿到store对象
  // createElement(APP)
  render: (h) => h(App)
}).$mount('#app')
