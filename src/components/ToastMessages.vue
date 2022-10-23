<template>
  <div class="toast-container"
      :class="{ 'toast-a' : !cartBoxState ,'toast-b' : cartBoxState}">
    <Toast v-for="(msg, key) in messages" :key="key"
            :msg="msg"/>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
import { mapState } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'

export default {
  components: { Toast },
  computed: {
    ...mapState(cartStore, ['cartBoxState']),
    ...mapState(statusStore, ['messages'])
  }
}
</script>

<style lang="scss" scoped>
//沒被購物車小視窗擋到
.toast-a {
  position: fixed;
  right: 20px;
  top: 90px;
  z-index: 999;
}
//被購物車小視窗擋道到
.toast-b {
  position: fixed;
  right: 470px;
  top: 90px;
  z-index: 999;
}
</style>
