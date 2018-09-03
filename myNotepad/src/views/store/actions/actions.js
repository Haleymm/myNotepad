// 异步修改数据,由dispatch触发
export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {num:data.num})
    }, data.time)
  }
}