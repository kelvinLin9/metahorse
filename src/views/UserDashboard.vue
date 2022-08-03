<template>
  <UserNavbar :key="$route.path"/>
  <FloatCart/>
  <ToastMessages/>
  <div class="position-relative">
    <router-view/>
  </div>
  <UserFooter/>
</template>

<script>
import emitter from '@/methods/emitter'
import UserFooter from '@/components/UserFooter.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import UserNavbar from '../components/UserNavbar.vue'
import FloatCart from '@/components/FloatCart.vue'
export default {
  components: {
    ToastMessages,
    UserNavbar,
    FloatCart,
    UserFooter
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
</style>
