<template>
  <div class="toast-container toast-test">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
<style lang="scss" scoped>
.toast-test {
  position: fixed;
  right: 20px;
  top: 90px;
  z-index: 99;
}
</style>
