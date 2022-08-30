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
    isNew: false,
    pagination: {},
    isLoading: false,
    tempOrder: {},
    currentPage: 1,
    revenue: 0,
    PieChartData: {}
  }),
  actions: {
    getAllOrders () {
      this.allOrders = []
      this.revenue = 0
      this.ordersNum = 0
      for (let i = 1; i <= this.pagination.total_pages; i++) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${i}`
        this.isLoading = true
        axios.get(url).then((response) => {
          this.allOrders[i - 1] = response.data.orders
          response.data.orders.forEach((item) => {
            this.revenue += item.total
            this.ordersNum += 1
            // console.log(this.revenue)
          })
          this.isLoading = false
          // console.log(this.allOrders)
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
        // console.log(response)
        this.getAllOrders()
      })
    },
    getPieChartData () {
      this.PieChartData = {
        type: 'line',
        data: {
          labels: ['水星', '金星', '地球', '火星', '木星', '土星', '天王星', '海王星'],
          datasets: [
            {
              label: '行星卫星数量',
              data: [0, 0, 1, 2, 79, 82, 27, 14],
              backgroundColor: 'rgba(54,73,93,.5)',
              borderColor: '#36495d',
              borderWidth: 3
            },
            {
              label: '太阳系行星质量 (相对于太阳 x 10^-6)',
              data: [16.6, 208.1, 300.3, 123, 954.792, 685.886, 243.662, 201.514],
              backgroundColor: 'rgba(71, 183,132,.5)',
              borderColor: '#47b784',
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }
    }
    // drawChart () {
    //   const chartColors = {
    //     red: 'rgb(255, 99, 132)',
    //     orange: 'rgb(255, 159, 64)',
    //     yellow: 'rgb(255, 205, 86)',
    //     green: 'rgb(75, 192, 192)',
    //     blue: 'rgb(54, 162, 235)',
    //     purple: 'rgb(153, 102, 255)',
    //     grey: 'rgb(201, 203, 207)'
    //   }
    //   const randomScalingFactor = function () {
    //     return Math.round(Math.random() * 2000000)
    //   }

    //   const pieCtx = document.getElementById('pie-chart')
    //   const barCtx = document.getElementById('bar-chart')

    //   const config = {
    //     type: 'pie',
    //     data: {
    //       datasets: [{
    //         data: [
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor()
    //         ],
    //         backgroundColor: [
    //           chartColors.red,
    //           chartColors.orange,
    //           chartColors.yellow,
    //           chartColors.green,
    //           chartColors.blue
    //         ],
    //         label: 'Dataset 1'
    //       }],
    //       labels: [
    //         '大麥克全餐',
    //         '肥宅快樂水',
    //         '太爽啦義大利麵',
    //         '薯條加大吃不完',
    //         '兒童餐椅不給坐'
    //       ]
    //     },
    //     options: {
    //       responsive: true
    //     }
    //   }
    //   const barConfig = {
    //     type: 'bar',
    //     data: {
    //       datasets: [{
    //         data: [
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor(),
    //           randomScalingFactor()
    //         ],
    //         backgroundColor: [
    //           chartColors.red,
    //           chartColors.orange,
    //           chartColors.yellow,
    //           chartColors.green,
    //           chartColors.blue,
    //           chartColors.purple
    //         ],
    //         label: 'Dataset 1'
    //       }],
    //       labels: [
    //         '一月',
    //         '二月',
    //         '三月',
    //         '四月',
    //         '五月',
    //         '六月'
    //       ]
    //     },
    //     options: {
    //       responsive: true
    //     }
    //   }
    //   const pieChart = new Chart(pieCtx, config)
    //   const barChart = new Chart(barCtx, barConfig)
    // }
  }
})
