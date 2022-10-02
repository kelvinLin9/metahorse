import { defineStore } from 'pinia'

export default defineStore('favoriteStore', {
  state: () => ({
    favorite: [],
    favoriteIds: [],
    favoriteNum: 0,
    products: []
  }),
  actions: {
    productsBus (products) {
      this.products = products
      this.getFavorite()
    },
    getFavoriteIds () {
      this.favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || []
    },
    getFavorite () {
      this.getFavoriteIds()
      this.favorite = []
      this.products.forEach((item) => {
        if (this.favoriteIds.indexOf(item.id) > -1) {
          this.favorite.push(item)
        }
      })
      this.favoriteNum = this.favorite.length
    },
    toggleFavorite (item) {
      const clickId = item
      const hasFavorite = this.favoriteIds.some((item) => item === clickId) // v-on 所以只判斷點擊的那一次
      if (!hasFavorite) {
        this.favoriteIds.push(item)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      } else {
        const delItem = this.favoriteIds.find((item) => {
          return item === clickId
        })
        this.favoriteIds.splice(this.favoriteIds.indexOf(delItem), 1)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      }
      this.getFavorite()
    },
    removeFavorite (item) {
      this.favoriteIds.splice(this.favoriteIds.indexOf(item), 1)
      localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      this.getFavorite()
    }
  },
  getters: {
    favState () {
      return (id) => {
        return this.favoriteIds.indexOf(id) > -1 ? 'fa-regular fa-heart' : 'fa-solid fa-heart'
      }
    }
  }
})
