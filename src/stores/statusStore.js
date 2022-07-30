import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    isLoading: [],
    cartLoadingItem: '',
    messages: []
  }),
  actions: {
    PushManager (data) {
      // console.log(data)
      // 傳到Toast.vue
      const { title, content, style = 'success' } = data
      this.messages.push({ style, title, content })
    }
  }
})
