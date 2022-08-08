<template>
  <UserNavbar :key="$route.path"/>
  <FloatCart/>
  <ToastMessages/>
  <div class="position-relative">
    <router-view/>
  </div>
  <UserFooter :class="{'fixed-bottom' : this.$route.name === ('UserSearchOrder' || 'Login')}" ></UserFooter>
</template>

<script>
import UserFooter from '@/components/UserFooter.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import UserNavbar from '../components/UserNavbar.vue'
import FloatCart from '@/components/FloatCart.vue'
import { mapActions } from 'pinia'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
export default {
  components: {
    ToastMessages,
    UserNavbar,
    FloatCart,
    UserFooter
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['getCart'])
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
</style>
