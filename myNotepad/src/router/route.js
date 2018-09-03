// import Login from '../views/login/login.vue'
import Todo from '../views/todo/todo.vue'
const routes = [
  {
    path: '/',
    redirect: '/app'
  }, // 设置默认的页面显示
  {
    path: '/login',
    // 异步加载组件，加快首屏加载速度
    component: () => import('../views/login/login.vue')
  },
  {
    props: true,
    path: '/app', // '/app/xxx'
    component: Todo,
    name: 'app',
    meta: { // 跟路由无关的配置写在meta里面
      title: 'this is app',
      description: '明天五一'
    },
        // 写在路由配置上的守卫
    beforeEnter(to, from, next){
      console.log('app route before enter 2')
      next()
  }
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
export default routes