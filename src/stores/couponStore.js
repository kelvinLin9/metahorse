import axios from 'axios'
import { defineStore } from 'pinia'// 起手式
import statusStore from './statusStore'
import cartStore from './cartStore'

const status = statusStore()
const cart = cartStore()

export default defineStore('couponStore', {
  state: () => ({
    coupon_code: '',
    coupons: [
      {
        id: 1,
        img: 'https://imgur.com/v2HbjI5.jpg',
        discount: '5折',
        code: 'diamond'
      },
      {
        id: 2,
        img: 'https://imgur.com/qLKGUWI.jpg',
        discount: '7折',
        code: 'gold'
      },
      {
        id: 3,
        img: 'https://imgur.com/LBDTuiP.jpg',
        discount: '8折',
        code: 'silver'
      }
    ],
    coupon: {},
    draw: false
  }),
  actions: {
    addCouponCode (i) {
      this.coupon_code = i
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: `${i}`
      }
      status.isLoading = true
      axios.post(url, { data: coupon })
        .then((res) => {
          status.PushManager(res, '加入優惠券')
          cart.getCart()
          status.isLoading = false
          this.coupon_code = ''
        })
        .catch((err) => console.error(err))
    },
    luckyDraw (min, max) {
      // console.log(min, max)
      const num = Math.floor(Math.random() * (max - min + 1)) + min
      this.coupon = this.coupons[num]
      this.draw = true
    },
    // 之後要移到copyStore
    copyCouponCode () {
      const couponCode = document.getElementById('couponCode')
      console.log(couponCode.textContent)
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
      // document.execCommand('copy') 

      // 暫時這樣用 但應該有其他作法
      navigator.clipboard.writeText(couponCode.textContent)

      // console.log(selection)

      // 這個也不要這樣寫比較好 沒成功也不知道
      status.PushManager('抽獎', '複製折扣碼')
    }
  }
})