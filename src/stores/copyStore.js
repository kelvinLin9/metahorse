import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()
export default defineStore('copyStore', {
  actions: {
    copyCode (item) {
      navigator.clipboard.writeText(item)
        .then(() => {
          status.PushManager('抽獎', '複製折扣碼')
        })
    }
  }
})
