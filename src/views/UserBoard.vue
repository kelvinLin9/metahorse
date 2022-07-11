<template>
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
