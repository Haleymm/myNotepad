// 同步修改数据，由commit触发
export default {
  updateCount (state, {num, num2}) { //注意。只能接收两个参数
    state.count = num
    // console.log(num2)
  }
}