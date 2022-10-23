<template>
  <div class="toast-container"
      :class="{ 'toast-right' : !cartBoxState ,'toast-left' : cartBoxState}">
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
.toast-right {
  position: fixed;
  right: 20px;
  top: 90px;
  z-index: 999;
}
.toast-left {
  position: fixed;
  right: 470px;
  top: 90px;
  z-index: 999;
}
</style>
