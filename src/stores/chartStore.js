import axios from 'axios'
import Chart from 'chart.js'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('productStore', {
  state: () => ({
    orders: {},
    allOrders: [],
    ordersNum: 0,
    revenue: 0,
    category: {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      other: 0
    },
    isNew: false,
    pagination: {},
    isLoading: false,
    tempOrder: {},
    currentPage: 1,
    pieChartData: {},
    barChartData: {}
  }),
  actions: {
    getAllOrders () {
      this.allOrders = []
      this.revenue = 0
      this.ordersNum = 0
      for (let i = 1; i <= this.pagination.total_pages; i++) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${i}`
        // status.isLoading = true
        axios.get(url).then((res) => {
          this.allOrders[i - 1] = res.data.orders
          res.data.orders.forEach((item) => {
            this.revenue += item.total
            this.ordersNum += 1
          })
          // status.isLoading = false
          // console.log(this.allOrders)
        })
      }
    },
    getOrders_1 () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=1`
      // status.isLoading = true
      axios.get(url, this.tempProduct).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
        // status.isLoading = false
        this.getAllOrders()
      })
    },
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      // status.isLoading = true
      axios.get(url, this.tempProduct).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
        // status.isLoading = false
      })
    },
    getChartData () {
      const chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
      }
      const randomScalingFactor = function () {
        return Math.round(Math.random() * 2000000)
      }
      this.pieChartData = {
        type: 'pie',
        data: {
          datasets: [{
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue
            ],
            label: 'Dataset 1'
          }],
          labels: [
            'S級賽馬',
            'A級賽馬',
            'B級賽馬',
            'C級賽馬',
            '其他道具'
          ]
        },
        options: {
          responsive: true
        }
      }
      this.barChartData = {
        type: 'bar',
        data: {
          datasets: [{
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue,
              chartColors.purple
            ],
            label: 'Dataset 1'
          }],
          labels: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月'
          ]
        },
        options: {
          responsive: true
        }
      }
    },
    openModal (isNew, item) {
      this.tempOrder = { ...item }
      this.isNew = false
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updatePaid (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false
        this.getOrders(this.currentPage)
        this.$httpMessageState(response, '更新付款狀態')
      })
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        console.log(response)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getOrders(this.currentPage)
      })
    }
  }
})
