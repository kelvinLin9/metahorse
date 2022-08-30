import axios from 'axios'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()


export default defineStore('productStore', {
  state: () => ({
    orders: {},
    allOrders: [],
    ordersNum: 0,
    isNew: false,
    pagination: {},
    isLoading: false,
    tempOrder: {},
    currentPage: 1,
    revenue: 0
  }),
  actions: {
    getAllOrders () {
      this.allOrders = []
      this.revenue = 0
      this.ordersNum = 0
      for (let i = 1; i <= this.pagination.total_pages; i++){
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${i}`
        this.isLoading = true
        axios.get(url).then((response) => {
          this.allOrders[i-1] = response.data.orders
          response.data.orders.forEach((item) => {
            this.revenue += item.total
            this.ordersNum += 1
            console.log(this.revenue)
          })
          this.isLoading = false   
          console.log(this.allOrders)       
        })
      }
      


    },
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      this.isLoading = true
      axios.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        this.isLoading = false
        console.log(response)
        this.getAllOrders ()
      })
    },
    calRevenue () {
      this.revenue = 0
      console.log(this.pagination.total_pages)
      this.orders.forEach((item) => {
        this.revenue += item.total
        console.log(this.revenue)
      })
    
    }
  }
})
