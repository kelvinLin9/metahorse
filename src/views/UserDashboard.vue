<template>
  <UserNavbar/>
  <FloatCart/>
  <ToastMessages/>
  <div class="position-relative">
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import UserNavbar from '../components/UserNavbar.vue'
import FloatCart from '@/components/FloatCart.vue'
export default {
  components: {
    ToastMessages,
    UserNavbar,
    FloatCart
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
  }
}
</script>
