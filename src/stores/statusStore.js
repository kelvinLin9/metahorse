import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: [],
    cartLoadingItem: '',
    messages: []
  }),
  actions: {
    pushManager (res = true, title = '更新', content = '') {
      if (res) {
        const obj = {
          style: 'success',
          title: `${title}成功`,
          content: `${content}`
        }
        this.messages.push(obj)
      } else {
        const obj = {
          style: 'danger',
          title: `${title}失敗`,
          content: `${content}`
        }
        this.messages.push(obj)
      }
    }
  }
})
