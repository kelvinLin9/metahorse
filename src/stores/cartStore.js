import axios from 'axios'
import router from '../router'
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
    form: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    }
  }),
  actions: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(url)
        .then((res) => {
          this.cartNum = res.data.data.carts.length
          this.cart = res.data.data
          status.isLoading = false
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '更新', '發生錯誤，請重新整理頁面')
        })
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
        .then(() => {
          status.cartLoadingItem = ''
          this.getCart()
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '更新', '發生錯誤，請重新操作')
        })
    },
    removeCartItem (id) {
      status.cartLoadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      status.isLoading = true
      axios.delete(url)
        .then((res) => {
          console.log(res)
          status.PushManager(res, '更新', '此項目已移除購物車')
          status.cartLoadingItem = ''
          this.getCart()
          status.isLoading = false
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '更新', '發生錯誤，請重新操作')
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
          status.cartLoadingItem = ''
          this.getCart() // 重新取得購物車資料
          status.PushManager(res, '更新', '已加入購物車')
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '更新', '發生錯誤，請重新整理頁面')
        })
    },
    cartBoxToggle () {
      // 傳到ToastMessages 讓提示能移開避免擋到
      this.cartBoxState = !this.cartBoxState
    },
    gotoPay () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      axios.post(url, { data: order })
        .then((res) => {
          router.push(`/checkoutPay/${res.data.orderId}`)
          this.form = {
            user: {
              name: '',
              email: '',
              tel: '',
              address: ''
            },
            message: ''
          }
          this.getCart()
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '傳送', '發生錯誤，請重新填寫資料並送出')
        })
    }
  }
})
