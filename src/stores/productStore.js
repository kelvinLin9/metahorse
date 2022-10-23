import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'
import favoriteStore from './favoriteStore'

const status = statusStore()
const favorite = favoriteStore()

export default defineStore('productStore', {
  state: () => ({
    products: [],
    product: {},
    productsHot: [],
    productsGame: [],
    temp: {},
    category: 'all',
    cacheSearch: ''
  }),
  actions: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      status.isLoading = true
      axios.get(url)
        .then((res) => {
          this.products = res.data.products
          this.products.forEach((item) => {
            // 自己補上後端沒有的預設值
            item.qty = 1
          })
          // 隨便取幾個當熱門商品
          this.productsHot = this.products.filter((item, index) => index > 14)
          // 傳一份給我的最愛比對用
          favorite.productsBus(this.products)
          // 手動挑出想展示的商品(首頁用)
          this.productsGame = []
          this.productsGame.push(res.data.products[11])
          this.productsGame.push(res.data.products[10])
          this.productsGame.push(res.data.products[8])
          this.productsGame.push(res.data.products[5])
          this.temp = this.productsGame[0]
          status.isLoading = false
        }).catch(() => {
          status.isLoading = false
          status.pushManager(false, '更新', '發生錯誤，請重新整理頁面')
        })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      status.isLoading = true
      axios.get(api)
        .then((res) => {
          status.isLoading = false
          if (res.data.success) {
            this.product = res.data.product
            // 自己補上後端沒有的預設值
            this.product.qty = 1
          }
        }).catch(() => {
          status.isLoading = false
          status.pushManager(false, '更新', '發生錯誤，請重新整理頁面')
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
      if (this.cacheSearch === '') {
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
      } else {
        return this.products.filter((item) => {
          return item.title.match(this.cacheSearch)
          // 空的欄位一樣會回傳全部資料，只有 null 才不會回傳內容
        })
      }
    }
  }
})
