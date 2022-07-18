<template>
  <UserNavbar :key="$route.path"/>
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
  },
  mounted() {
    // this.$router.push('/')
    console.log('sss')
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
</style>