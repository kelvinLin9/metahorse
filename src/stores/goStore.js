import router from '../router'
import { defineStore } from 'pinia'
import cartStore from './cartStore'

const cart = cartStore()

export default defineStore('goStore', {
  actions: {
    goCart () {
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
