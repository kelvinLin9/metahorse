import axios from 'axios'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'

// 所有資料帶出來存到status
// 把原本this改成status
const status = statusStore()

export default defineStore('productStore', {
  state: () => ({
    products: [],
    product: {},
    productsHot: [],
    // favorite: [], // 必要時硬解
    // favoriteNum: 0 // 必要時硬解
    category: 'all'
  }),
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url).then((res) => {
        this.products = res.data.products
        this.productsHot = this.products.filter((item, index) => index > 14) // 先取幾個來試用
        // console.log('products:', res)
        status.isLoading = false
        // this.getFavorite() // 必要時硬解
      })
    },
    // 必要時硬解
    // getFavorite () {
    //   this.favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || []
    //   this.favorite = []
    //   this.products.forEach((item) => {
    //     if (this.favoriteIds.indexOf(item.id) > -1) {
    //       this.favorite.push(item)
    //     }
    //   })
    //   this.favoriteNum = this.favorite.length
    //   console.log('this.favoriteNum', this.favoriteNum)
    // },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      status.isLoading = true
      axios.get(api).then((res) => {
        // console.log(res.data)
        status.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
        }
      })
    }
  },
  getters: {
    filterProducts () {
      let filterProducts
      switch (this.category) {
        case 'all':
          filterProducts = this.products.filter((item) => {
            return item
          })
          break
        case 'S':
          filterProducts = this.products.filter((item) => {
            return item.category === 'S'
          })
          break
        case 'A':
          filterProducts = this.products.filter((item) => {
            return item.category === 'A'
          })
          break
        case 'B':
          filterProducts = this.products.filter((item) => {
            return item.category === 'B'
          })
          break
        case 'C':
          filterProducts = this.products.filter((item) => {
            return item.category === 'C'
          })
          break
        case '馬鞍':
          filterProducts = this.products.filter((item) => {
            return item.description === '馬鞍'
          })
          break
        case '馬蹄鐵':
          filterProducts = this.products.filter((item) => {
            return item.description === '馬蹄鐵'
          })
          break
        case '馬飼料':
          filterProducts = this.products.filter((item) => {
            return item.description === '馬飼料'
          })
          break
      }
      return filterProducts
    }
  }
})
