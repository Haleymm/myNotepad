import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route.js'

export default () => { // 导出默认的方法
  return new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: "active-link", // 包含即可
    linkExactActiveClass: "exact-active-link", //严格匹配
    routes
  })
}
