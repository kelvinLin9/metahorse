<template>
  <NavbarUser></NavbarUser>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/user/cart">用戶端範例</router-link>
    </div>
  </nav> -->
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import NavbarUser from '../components/UserNavbar.vue'
export default {
  components: {
    ToastMessages,
    NavbarUser
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
