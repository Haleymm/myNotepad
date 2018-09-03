import '../assets/footer.styl'
export default {
  data () {
    return ({
      author: 'jiaojiao17'
    })
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
