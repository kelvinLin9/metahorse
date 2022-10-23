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
        img: 'https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490147962.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fUWCF92T7UOQmxyyD5gz2nw%2Bjr%2BHgwls%2BA%2FaAgyZRvtqzsfO3z5I%2BwWGezKKqZFk6ABtySVop1u4cly6WGzGFYxes1eAP%2B7IW%2FUzml%2FeA3LiwzK1ZNfmTUVIs0lVE1s2SKJwjYR3hwaHTd3b5y5EPUYlglXpyOwwMcVNUnjSkNz0LwpAc0HyO9D5dCKV8p54sm3D5oOex5TpqiZOkvMH2X1%2B56ZxKrCJ8N2Z3En08bKMlLgurqSHCt05WVf%2Bws8KVyHD8OhILwH%2FDEBZqHU11FcGg2BRFaMJkpoAFtI1%2FLLvCL1PTBTFVWF85dcXFXXWiV3UdCUEGuE4CU4PeRPWzQ%3D%3D',
        discount: '5折',
        code: 'diamond'
      },
      {
        id: 2,
        img: 'https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490106008.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gXFy4XDqe5X0ZSVTA2mql1Tla2b7rAZ9BRGAccBurkQu7I21PPNlft7KNoYZlzVXJG9jJMKtpce7x1SU%2FvF%2BuyrNCoagM8sCB7TDUr6flq4a4ogf54dv7PS%2FzkcZKw198l2WDa7El4VFCpp9RwBiDafo9bwwWv%2BZSeRShd4nOPEd2xU11sM%2FqbGt2BK5V3Es5%2FxH1mh%2Bw2Vaq7%2FEABrGb3VjytLlboUoercBRvaI4stnQIGv8d6Gog2w87uqTGUDsgNj5f0zy03W5g9Zle3PFWwdhYP7C6wC1wgYhbPXIYLGAEAr0XOQkP34bff%2B%2FwZBpTp7j8aNT2Q8OCRDcSZcyg%3D%3D',
        discount: '7折',
        code: 'gold'
      },
      {
        id: 3,
        img: 'https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490131972.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CL0yLgoV3%2BnVZewXtdQUGNOVOVpjc5UF1bSnI%2FcoZEdWk9zgUoSPOF3KSNkKz5Y8k6aMHVg6l3RidhTwITzToc%2F86OIEcTTWRdbPMMNA9LKHkHK1MLb7OFoTYI9EBxx5RoVq0r4TXGPnMQ%2BMcjZLQSRMbWnpA13PcFQUkYxsmQeDtpLrJXu9Z%2FyouHQr7NCvhGyO2Tw7qzLLBjQAQEOBXjvl9ZZJHoSNjv3vmTc%2FIy8hIv%2FyzFxHhRqA5D2Y38yhtvVg31TbqisX1ezyUOnAzARDj%2FCDmAgDPSVkIGMNgtutvPQHDY3WJ6ooC2yINJ0fuk%2FHTSEUg7i%2BMcXlbbhyaQ%3D%3D',
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
          if (res.data.success === true) {
            status.pushManager(res, '加入優惠券', res.data.message)
            cart.getCart()
            status.isLoading = false
            this.coupon_code = ''
          } else {
            status.pushManager(false, '加入優惠券', res.data.message)
            status.isLoading = false
            this.coupon_code = ''
          }
        }).catch(() => {
          status.isLoading = false
          status.pushManager(false, '更新', '發生錯誤，請重新操作')
        })
    },
    luckyDraw (min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min
      this.coupon = this.coupons[num]
      this.draw = true
    }
  }
})
