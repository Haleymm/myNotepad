<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p class="author">{{fullName}} {{counter}}</p>
    <router-link to="/login">login</router-link>
    <router-link to="/app">app</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer> 
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
  }
  from 'vuex' //帮助方法

import Header from '../layout/header.vue'
import Footer from '../layout/footer.jsx'

export default {
  components: {
    Header,
    Footer,
    // Todo
  },
  mounted () {
    console.log(this.$store)
    // this.$store.dispatch('updateCountAsync', {num: 66666, time: 2000})
    // 方法已经在method中定义了，直接使用
    this.updateCountAsync({num: 17, time: 2000})
    this.updateCount({num: 17, num2: 2333})
    // let i = 1  
    // setInterval(() => {
    //   this.$store.commit('updateCount', {num: i++, num2: 2333}) //commit触发状态更新
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapState({counter: 'count'}), // 与count()同等效果
    ...mapState({
      counter: (state) => state.count // 与count()同等效果
    }),

    // fullName () {
    //   return this.$store.getters.fullName
    // }
    ...mapGetters(['fullName'])
  }
}
</script>

<!-- scoped指定的样式只在此组件内有效 -->
<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
.author{
  text-align center
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .7
  z-index -1
}
</style>
