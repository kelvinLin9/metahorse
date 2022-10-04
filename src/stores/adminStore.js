import axios from 'axios'
import Chart from 'chart.js/auto'
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()
let PieC, BarC
export default defineStore('adminStore', {
  state: () => ({
    products: [],
    tempProduct: {},
    orders: {},
    allOrders: [],
    ordersNum: 0,
    revenue: 0,
    categoryNum: {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      other: 0
    },
    isNew: false,
    tempOrder: {},
    pieChartData: {},
    barChartData: {},
    pagination: {},
    currentPage: 1,
    coupons: {},
    isLoading: false
  }),
  actions: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      status.isLoading = true
      axios.get(api).then((res) => {
        status.isLoading = false
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      }).catch(() => {
        status.isLoading = false
        status.PushManager(false, '更新', '發生錯誤，請重新整理頁面')
      })
    },
    async getOrders (page = 1, needGetAllOrders = true) {
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      status.isLoading = true
      await axios
        .get(url, this.tempProduct)
        .then((res) => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        }).catch(() => {
          status.isLoading = false
          status.PushManager(false, '更新', '發生錯誤，請重新整理頁面')
        })
        // 如果分頁元件就不需要再執行，避免每次換頁都重新載入
      if (needGetAllOrders) {
        this.getAllOrders()
      }
      status.isLoading = false
    },
    async getAllOrders () {
      this.allOrders = []
      this.revenue = 0
      this.ordersNum = 0
      status.isLoading = true
      for (let i = 1; i <= this.pagination.total_pages; i++) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${i}`
        await axios
          .get(url)
          .then((res) => {
            res.data.orders.forEach((order) => {
              this.allOrders.push(order)
              this.ordersNum += 1
              this.revenue += order.total
            })
          }).catch(() => {
            status.isLoading = false
            status.PushManager(false, '更新', '發生錯誤，請重新整理頁面')
          })
      }
      this.getAllOrdersData()
      status.isLoading = false
    },
    getAllOrdersData () {
      this.categoryNum.S = 0
      this.categoryNum.A = 0
      this.categoryNum.B = 0
      this.categoryNum.C = 0
      this.categoryNum.other = 0
      for (let i = 0; i < this.allOrders.length; i++) {
        for (const j in this.allOrders[i].products) {
          if (this.allOrders[i].products[j].product.category === 'S') {
            this.categoryNum.S += this.allOrders[i].products[j].qty
          } else if (this.allOrders[i].products[j].product.category === 'A') {
            this.categoryNum.A += this.allOrders[i].products[j].qty
          } else if (this.allOrders[i].products[j].product.category === 'B') {
            this.categoryNum.B += this.allOrders[i].products[j].qty
          } else if (this.allOrders[i].products[j].product.category === 'C') {
            this.categoryNum.C += this.allOrders[i].products[j].qty
          } else if (this.allOrders[i].products[j].product.category === '遊戲道具') {
            this.categoryNum.other += this.allOrders[i].products[j].qty
          }
        }
      }
      this.getChartData()
    },
    // 圖表資訊
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
      this.pieChartData = {
        type: 'pie',
        data: {
          datasets: [{
            data: [
              this.categoryNum.S,
              this.categoryNum.A,
              this.categoryNum.B,
              this.categoryNum.C,
              this.categoryNum.other
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue
            ],
            label: '銷售數量'
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
              this.categoryNum.S * 119000,
              this.categoryNum.A * 79000,
              this.categoryNum.B * 49000,
              this.categoryNum.C * 29000,
              this.categoryNum.other * 990
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue
            ],
            label: '銷售金額'
          }],
          labels: [
            'S',
            'A',
            'B',
            'C',
            '遊戲道具'
          ]
        },
        options: {
          responsive: true
        }
      }
      if (PieC && BarC) {
        PieC.destroy()
        BarC.destroy()
      }
      const ctxPie = document.getElementById('pieChart')
      const ctxBar = document.getElementById('barChart')

      PieC = new Chart(ctxPie, this.pieChartData)
      BarC = new Chart(ctxBar, this.barChartData)
    },
    // 需要判斷是哪個頁面在使用pagination元件
    updatePage (page, path) {
      this.currentPage = page
      if (path === '/dashboard/order') {
        this.getOrders(page, false)
      } else if (path === '/dashboard/products') {
        this.getProducts(page, false)
      }
    },
    updateOrder (item) {
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      axios.put(api, { data: item }).then((res) => {
        status.isLoading = false
        status.PushManager(res, '更新付款狀態')
        this.getOrders(this.pagination.current_page, false)
      }).catch(() => {
        status.isLoading = false
        status.PushManager(false, '更新', '發生錯誤，請重新操作')
      })
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      axios.get(url, this.tempProduct).then((res) => {
        console.log(res)
        this.coupons = res.data.coupons
        this.isLoading = false
      }).catch(() => {
        status.isLoading = false
        status.PushManager(false, '更新', '發生錯誤，請重新整理頁面')
      })
    }
  }
})
