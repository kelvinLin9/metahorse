import { defineStore } from 'pinia'

// 1. Store名稱
// 2. 屬性參數
export default defineStore('User Store', {
  // Data
  state: () => {
    return {
      name: 'kk',
      wallet: 300
    }
  },

  // Component
  getters: {
    getUserName: (state) => `我的名字 ${state.name}`
  },

  // Methods
  actions: {
    // 這邊可以使用this
    updatedName () {
      this.name = 'gg'
    }
  }
})
