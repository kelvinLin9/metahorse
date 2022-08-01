import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: [],
    cartLoadingItem: '',
    messages: []
  }),
  actions: {
    // 傳到ToastMessages.vue
    PushManager (res, title = '更新') {
      console.log(res)
      if (res.data.success) {
        const obj = {
          style: 'success',
          title: `${title}成功`
        }
        this.messages.push(obj)
      } else {
        // 有些訊息是字串，有些則是陣列，在此統一格式
        const message = typeof res.data.message === 'string'
          ? [res.data.message]
          : res.data.message
        const obj = {
          style: 'danger',
          title: `${title}失敗`,
          content: message.join('、')
        }
        this.messages.push(obj)
      }
    }
  }
})
