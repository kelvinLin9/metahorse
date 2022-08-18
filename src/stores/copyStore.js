import { defineStore } from 'pinia'// 起手式

export default defineStore('goStore', {
  actions: {
    copyCode (el) {
      console.log(el)
      navigator.clipboard.writeText(el)
      // 這個也不要這樣寫比較好 沒成功也不知道
      // status.PushManager('抽獎', '複製折扣碼')
    }
  }
})