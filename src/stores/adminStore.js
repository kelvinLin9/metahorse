import axios from 'axios'
import Chart from 'chart.js/auto'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()

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
    // 取得所有品項
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      status.isLoading = true
      axios.get(api).then((res) => {
        status.isLoading = false
        if (res.data.success) {
          // console.log(1, res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    },
    // 取得當前頁面訂單資料
    getOrders (page = 1) {
      this.currentPage = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      status.isLoading = true
      axios.get(url, this.tempProduct).then((res) => {
        this.orders = res.data.orders
        this.pagination = res.data.pagination
        status.isLoading = false
        // 如果revenue已經有值就不需要再執行，避免每次換頁都重新載入
        if (this.revenue === 0) {
          this.getAllOrders()
        }
      })
    },
    // 取得所有頁面訂單資料
    getAllOrders () {
      this.allOrders = []
      this.revenue = 0
      this.ordersNum = 0
      status.isLoading = true
      let i = 1
      const set = setInterval(() => {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${i}`
        axios.get(url).then((res) => {
          if (res.status === 200) {
            console.log(res.data.orders)
            this.allOrders.push(...res.data.orders)
            res.data.orders.forEach((item) => {
              this.revenue += item.total
              this.ordersNum += 1
            })
            i++
            console.log(i)
          }
        })
        if (i === this.pagination.total_pages) {
          clearInterval(set)
          console.log('結束')
          status.isLoading = false
          this.getAllOrdersData()
        }
      }, 3000)
      // 用for寫會有問題
      // for (let i = 1; i <= this.pagination.total_pages; i++) {
      //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${i}`
      //   axios.get(url).then((res) => {
      //     this.allOrders.push(...res.data.orders) // 無正確排序
      //     console.log(res.data.orders)
      //     res.data.orders.forEach((item) => {
      //       this.revenue += item.total
      //       this.ordersNum += 1
      //     })
      //     status.isLoading = false
      //   })
      // }
    },
    // 取得所有訂單的詳細資料
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
      const ctx_pie = document.getElementById('pieChart')
      const ctx_bar = document.getElementById('barChart')
      new Chart(ctx_pie, this.pieChartData)
      new Chart(ctx_bar, this.barChartData)
    },
    updatePage (page, path) {
      this.currentPage = page
      if (path === '/dashboard/order') {
        this.getOrders(page)
      } else if (path === '/dashboard/products') {
        this.getProducts(page)
      }
    },
    getCoupons () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      axios.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons
        this.isLoading = false
      })
    }
  }
})
