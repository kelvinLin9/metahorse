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
    category:{
      S:0,
      A:0,
      B:0,
      C:0,
      other:0
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
        axios.get(url).then((response) => {
          this.allOrders[i - 1] = response.data.orders
          response.data.orders.forEach((item) => {
            this.revenue += item.total
            this.ordersNum += 1
            // console.log(this.revenue)
          })
          // status.isLoading = false
          // console.log(this.allOrders)
        })
      }
    },
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`
      // status.isLoading = true
      axios.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        // status.isLoading = false
        console.log(response.data.orders[0].products)
        this.getAllOrders()
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
      };
      var randomScalingFactor = function () {
        return Math.round(Math.random() * 2000000);
      };  
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
              randomScalingFactor(),
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue,
            ],
            label: 'Dataset 1'
          }],
          labels: [
            '大麥克全餐',
            '肥宅快樂水',
            '太爽啦義大利麵',
            '薯條加大吃不完',
            '兒童餐椅不給坐',
          ]
        },
        options: {
          responsive: true
        }
      };
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
              randomScalingFactor(),
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.blue,
              chartColors.purple,
            ],
            label: 'Dataset 1'
          }],
          labels: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
          ]
        },
        options: {
          responsive: true
        }
      };
    }
  }
})
