import axios from 'axios'
import { defineStore } from 'pinia'
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
        img: 'https://imgur.com/qLKGUWI.jpg',
        discount: '5折',
        code: 'diamond'
      },
      {
        id: 2,
        img: 'https://imgur.com/v2HbjI5.jpg',
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
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '更新', '發生錯誤，請重新操作')
        })
    },
    luckyDraw (min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min
      this.coupon = this.coupons[num]
      this.draw = true
    }
  }
})
