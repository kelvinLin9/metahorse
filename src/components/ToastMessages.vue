<template>
  <div class="toast-container"
       :class="{ 'toast-a' : !cartBoxState ,'toast-b' : cartBoxState}">
    <Toast v-for="(msg, key) in messages" :key="key"
            :msg="msg"/>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
import { mapState, storeToRefs } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'

export default {
  components: { Toast },
  // Composition API寫法
  setup () {
    const status = statusStore()
    const { messages } = storeToRefs(status)

    return {
      messages
    }
  },
  computed: {
    ...mapState(cartStore, ['cartBoxState'])
  },
  data () {
    return {
      // messages: [],
      // cartBoxState: false
    }
  },
  inject: ['emitter'],
  mounted () {
    // 晚點拿掉
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
    this.emitter.on('cartBoxState', (i) => {
      this.cartBoxState = i
    })
  }
}
</script>
<style lang="scss" scoped>
//沒被購物車小視窗擋道
.toast-a {
  position: fixed;
  right: 20px;
  top: 90px;
  z-index: 999;
}
//被購物車小視窗擋道
.toast-b {
  position: fixed;
  right: 470px;
  top: 90px;
  z-index: 999;
}
</style>
