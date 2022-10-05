import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()
export default defineStore('copyStore', {
  actions: {
    copyCode (item) {
      navigator.clipboard.writeText(item)
        .then(() => {
          status.pushManager(true, '複製', '請到購物車頁面使用')
        }).catch(() => {
          status.isLoading = false
          status.pushManager(false, '複製', '發生錯誤，請重新操作')
        })
    }
  }
})
