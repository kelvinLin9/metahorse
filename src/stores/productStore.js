import axios from 'axios'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'
import favoriteStore from './favoriteStore'

// 所有資料帶出來存到status
// 把原本this改成status
const status = statusStore()
// const favorite123 = favoriteStore()

export default defineStore('productStore', {
  state: () => ({
    products: [],
    product: {},
    productsHot:[]
  }),
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url).then((res) => {
        this.products = res.data.products
        this.productsHot = res.data.products.splice(12, 5) // 先取幾個來試用
        // console.log('products:', res)
        status.isLoading = false
        // favorite123.getFavoriteIds()
      })
    },
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
    },
  }
})
