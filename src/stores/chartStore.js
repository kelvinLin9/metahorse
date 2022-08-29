import axios from 'axios'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()


export default defineStore('productStore', {
  state: () => ({
    orders: {},
    isNew: false,
    pagination: {},
    isLoading: false,
    tempOrder: {},
    currentPage: 1
  }),
  actions: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      this.isLoading = true
      this.$http.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        this.isLoading = false
        console.log(response)
      })
    }
  }
})
