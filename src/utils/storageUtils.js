/**
 * 进行local数据存储管理的工具模块
 */
import store from 'store' // 比localStorage兼容性更好的，跨浏览器的一个存储库
const USER_KEY = 'user_key'
export default {
  // 保存 user
  setUser(user) {
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
    store.set(USER_KEY, user)
  },
  // 读取 user
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || {}
  },
  // 删除user
  removeUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  }
}