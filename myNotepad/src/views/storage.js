const STORAGE_KEY = 'todos'
export default {
  get () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  set (todos){
    return window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}