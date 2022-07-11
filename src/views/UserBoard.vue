<template>
  <div class="position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import UserNavbar from '../components/UserNavbar.vue'
export default {
  components: {
    ToastMessages,
    UserNavbar
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
