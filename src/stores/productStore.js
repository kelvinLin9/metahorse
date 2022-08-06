import axios from 'axios'
// 起手式
import { defineStore } from 'pinia'
import statusStore from './statusStore'
import favoriteStore from './favoriteStore'

// 所有資料帶出來存到status
// 把原本this改成status
const status = statusStore()
const favorite = favoriteStore()

export default defineStore('productStore', {
  state: () => ({
    products: [],
    product: {},
    productsHot: [],
    productsGame: [],
    temp: {}, // 暫存點擊到的賽馬資訊
    category: 'all'
  }),
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url)
        .then((res) => {
          console.log("GETP!!!!!!!!!!!!!!!!")
          this.products = res.data.products
          this.productsHot = this.products.filter((item, index) => index > 14) // 先取幾個來試用
          favorite.productsBus(this.products)
          // 手動挑出想展示的商品(首頁用)
          this.productsGame = []
          this.productsGame.push(res.data.products[11])
          this.productsGame.push(res.data.products[10])
          this.productsGame.push(res.data.products[8])
          this.productsGame.push(res.data.products[5])
          this.temp = this.productsGame[0]
          status.isLoading = false
        })
        .catch((err) => console.error(err))
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      status.isLoading = true
      axios.get(api).then((res) => {
        status.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
          // 自己補上後端沒有的預設值
          this.product.qty = 1
        }
      })
    },
    // 無法雙向綁定的另種解法
    // 創一個新的函數傳遞category
    setCategory (i) {
      this.category = i
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
