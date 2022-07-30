import axios from 'axios'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'

// 所有資料帶出來存到status
// 把原本this改成status
const status = statusStore()

export default defineStore('productStore', {
  state: () => ({
    products: []
  }),
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url).then((res) => {
        this.products = res.data.products
        // console.log('products:', res)
        status.isLoading = false
        // this.getFavoriteIds()
      })
    }
  }
})
