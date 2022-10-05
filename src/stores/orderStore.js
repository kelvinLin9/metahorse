import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('orderStore', {
  state: () => ({
    orderId: '',
    order: {
      user: {}
    }
  }),
  actions: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      status.isLoading = true
      axios.get(url)
        .then((res) => {
          if (res.data.success) {
            status.isLoading = false
            this.order = res.data.order
          }
        }).catch(() => {
          status.isLoading = false
          status.pushManager(false, '更新', '發生錯誤，請重新整理頁面')
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      status.isLoading = true
      axios.post(url)
        .then((res) => {
          if (res.data.success) {
            status.isLoading = false
            this.getOrder()
          }
        }).catch(() => {
          status.isLoading = false
          status.pushManager(false, '更新', '發生錯誤，請重新整理頁面')
        })
    }
  }
})
