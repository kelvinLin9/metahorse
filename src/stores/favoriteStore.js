// import axios from 'axios'
import { defineStore } from 'pinia'// 起手式
// import statusStore from './statusStore'
import productStore from './productStore'
// 所有資料帶出來存到status
// 把原本this改成status
// const status = statusStore()
const products = productStore()
export default defineStore('favoriteStore', {
  state: () => ({
    favorite: [],
    favoriteIds: [],
    favIcons: [],
    favoriteNum: 0
  }),
  actions: {
    getFavoriteIds () {
      this.favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || []
      console.log(123, this.favoriteIds)
      this.getFavorite()
    },
    getFavorite () {
      this.favorite = [] // 要嗎
      products.products.forEach((item) => {
        if (this.favoriteIds.indexOf(item.id) > -1) {
          this.favorite.push(item)
        }
      })
      this.favoriteNum = this.favorite.length
    },
    toggleFavorite (item) {
      const clickId = item
      console.log('clickId', clickId)
      const hasFavorite = this.favoriteIds.some((item) => item === clickId) // v-on 所以只判斷點擊的那一次
      // console.log('點擊到的id是否在我的最愛列表', hasFavorite)
      if (!hasFavorite) {
        this.favoriteIds.push(item)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      } else {
        const delItem = this.favoriteIds.find((item) => {
          return item === clickId
        })
        // console.log('5.(刪除時)點到的是第幾筆資料', this.favoriteIds.indexOf(item))
        this.favoriteIds.splice(this.favoriteIds.indexOf(delItem), 1)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      }
      this.getFavoriteIds()
      // console.log('更新後的我的最愛列表id', this.favoriteIds)
      // emitter.emit('update-favoriteIds')
    }
  },
  getters: {
    favState () {
      return (id) => {
        return this.favoriteIds.indexOf(id) > -1 ? 'bi bi-heart-fill' : 'bi bi-heart'
      }
    },
  },
})
