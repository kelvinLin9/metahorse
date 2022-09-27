import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: [],
    cartLoadingItem: '',
    messages: []
  }),
  actions: {
    // 傳到ToastMessages.vue
    // 抽獎頁面的提示合併過來一起用
    PushManager (res = true, title = '更新', content) {
      console.log(res, title, content)
      if (res) {
        const obj = {
          style: 'success',
          title: `${title}成功`,
          content: `${content}`
        }
        this.messages.push(obj)
      } else {
        // 有些訊息是字串，有些則是陣列，統一格式
        // const message = typeof res.data.message === 'string'
        //   ? [res.data.message]
        //   : res.data.message
        const obj = {
          style: 'danger',
          title: `${title}失敗`,
          content: `${content}`
        }
        this.messages.push(obj)
        console.log(this.messages)
      }
    }
  }
})
