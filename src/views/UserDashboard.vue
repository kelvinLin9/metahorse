<template>
  <UserNavbar :key="$route.path" />
  <UserLoading class="user-loading position-absolute top-50 start-50 translate-middle"
              v-if="isLoading" />
  <FloatCart v-if = "!positionCart" />
  <ToastMessages/>
  <div class="position-relative">
    <router-view/>
  </div>
  <UserFooter
  :class="{'fixed-bottom' : this.$route.name === 'login' || this.$route.name === 'UserSearchOrder'}" />
</template>

<script>
import UserFooter from '@/components/UserFooter.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import UserNavbar from '../components/UserNavbar.vue'
import FloatCart from '@/components/FloatCart.vue'
import { mapActions, mapState } from 'pinia'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
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
  computed: {
    ...mapState(statusStore, ['isLoading']),
    positionCart () {
      const name = ['cart', 'checkout', 'checkoutPay']
      if (name.includes(this.$route.name)) return true
      return false
    }
  },
  created () {
    this.getProducts()
    this.getCart()
    console.log('this.$route.name', this.$route.name)
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
.user-loading {
  z-index: 1000;
}
</style>
