import router from '../router'
import { defineStore } from 'pinia'// 起手式
import cartStore from './cartStore'

const cart = cartStore()
// 所有資料帶出來存到cart
// 把原本this改成cart

export default defineStore('goStore', {
  actions: {
    goCart () {
      console.log(router)
      router.push('/cart')
      cart.cartBoxState = false
    },
    goProducts () {
      router.push('/products')
      cart.cartBoxState = false
    },
    goProduct (id) {
      router.push(`/product/${id}`)
    },
    goCheckout () {
      router.push('/checkout')
    }
  }
})