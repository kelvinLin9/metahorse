<template>
  <div class="goTop"
      :class="{'d-none' : !goTopIcon }">
    <a href="#" @click.prevent="top">
      <i class="bi bi-arrow-up-square-fill"></i>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import scrollStore from '@/stores/scrollStore'
export default {
  computed: {
    ...mapState(scrollStore, ['goTopIcon'])
  },
  methods: {
    ...mapActions(scrollStore, ['scroll']),
    top () {
      document.documentElement.scrollTop = 0
      console.log(this.goTopIcon)
    }
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang="scss" scoped>
.goTop{
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
}
.goTop a {
  color: purple;
  font-size: 40px;
}
</style>
