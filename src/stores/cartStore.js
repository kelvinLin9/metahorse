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
    cartBoxState: false,
    // qty: 1
  }),
  actions: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url).then((res) => {
        // console.log(res)
        this.cartNum = res.data.data.carts.length
        this.cart = res.data.data
        status.isLoading = false
      })
    },
    // 更改購物車商品數量
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      status.isLoading = true
      status.cartLoadingItem = item.id
      // this.qty = item.qty
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart }).then((res) => {
        console.log(res)
        status.cartLoadingItem = ''
        this.getCart()
      })
    },
    removeCartItem (id) {
      status.cartLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      status.isLoading = true
      axios.delete(url).then((response) => {
        // this.$httpMessageState(response, '移除購物車品項')
        status.PushManager({ title: '移除購物車品項' })
        status.cartLoadingItem = ''
        this.getCart()
        status.isLoading = false
      })
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
          // 等到ajax成功之後，再把id清空
          status.cartLoadingItem = ''
          console.log(res)
          this.getCart() // 重新取得購物車資料
          status.PushManager({ title: '加到購物車' })
          // this.$httpMessageState(res, '加入購物車')
        })
    },
    cartBoxToggle () {
      this.cartBoxState = !this.cartBoxState
      // 傳到ToastMessages 讓提示能移開避免擋到
    }
  }
})
