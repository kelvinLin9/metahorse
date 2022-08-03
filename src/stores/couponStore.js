import axios from 'axios'
import { defineStore } from 'pinia'// 起手式
import statusStore from './statusStore'
import cartStore from './cartStore'

const status = statusStore()
const cart = cartStore()

export default defineStore('couponStore', {
  state: () => ({
    coupon_code: ''
  }),
  actions: {
    addCouponCode (i) {
      // console.log(i)
      this.coupon_code = i
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: `${i}`
      }
      status.isLoading = true
      axios.post(url, { data: coupon }).then((res) => {
        console.log(res.data.message)
        status.PushManager(res, '加入優惠券')
        cart.getCart()
        status.isLoading = false
        this.coupon_code = ''
      })
    }
  }
})
