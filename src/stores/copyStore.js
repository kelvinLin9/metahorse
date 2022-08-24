import { defineStore } from 'pinia'// 起手式
import statusStore from './statusStore'

const status = statusStore()
export default defineStore('copyStore', {
  actions: {
    copyCode (item) {
      // console.log(item)
      navigator.clipboard.writeText(item)
        .then(() => {
          status.PushManager('抽獎', '複製折扣碼')
        })
    },
    copyCodeOld (id) {
      const couponCode = document.getElementById(id)
      // 該語法主要用途是代表著使用者的選取範圍，因此要建立 Selection 物件
      const selection = window.getSelection()
      // 確保每一次選取，所以可以補上 selection.removeAllRanges 以確保選取的是新的，且也不會出現反白選取的狀況
      selection.removeAllRanges()
      // 如果不想要透過 input 欄位來做的話，則是使用選取範圍的寫法，也就是 createRange 語法來達到，因此一開始必須先建立一個 Range 物件
      const range = document.createRange()
      // 將你要選取的元素放到 Range 物件中
      range.selectNodeContents(couponCode)
      // 當建立好 Selection 物件後，就要將剛剛我們剛剛定義的範圍，給加入到 Selection 中，類似告知他我們要選取這個範圍
      selection.addRange(range)
      // 這個功能已經過時了。儘管它在某些瀏覽器中仍然可以工作，但它的使用是不鼓勵的，因為它可能在任何時候被刪除。盡量避免使用它
      document.execCommand('copy')
    }
  }
})
