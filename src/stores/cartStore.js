import axios from 'axios'
import { defineStore } from 'pinia'// 起手式
import statusStore from './statusStore'

// 所有資料帶出來存到status
// 把原本this改成status
const status = statusStore()

export default defineStore('cartStore', {
  state: () => ({
    cart: {},
    cartNum: 0,
    cartBoxState: false
    // qty: 1 // 不需要 傳到後端就好
  }),
  actions: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url)
        .then((res) => {
          console.log("GETC!!!!!!!!!!!!!!!!")
          this.cartNum = res.data.data.carts.length
          this.cart = res.data.data
          status.isLoading = false
        })
        .catch((err) => console.error(err))
    },
    // 更改購物車商品數量
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      status.isLoading = true
      status.cartLoadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart })
        .then((res) => {
          status.cartLoadingItem = ''
          this.getCart()
        })
        .catch((err) => console.error(err))
    },
    removeCartItem (id) {
      status.cartLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      status.isLoading = true
      axios.delete(url)
        .then((res) => {
          console.log(res)
          status.PushManager(res, '移除購物車品項')
          status.cartLoadingItem = ''
          this.getCart()
          status.isLoading = false
        })
        .catch((err) => console.error(err))
    },
    addCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.cartLoadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      axios.post(url, { data: cart })
        .then((res) => {
          status.cartLoadingItem = ''
          this.getCart() // 重新取得購物車資料
          status.PushManager(res, '加入購物車')
        })
        .catch((err) => console.error(err))
    },
    cartBoxToggle () {
      // 傳到ToastMessages 讓提示能移開避免擋到
      this.cartBoxState = !this.cartBoxState
      
    }
  }
})
