import { defineStore } from 'pinia'// 起手式
import statusStore from './statusStore'

const status = statusStore()
export default defineStore('goStore', {
  actions: {
    copyCode (el) {
      console.log(el)
      navigator.clipboard.writeText(el)
      .then((res) => {
        console.log(res) //??
        status.PushManager('抽獎', '複製折扣碼')
      })
      
    }
  }
})