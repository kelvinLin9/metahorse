<template>
  <div class="goTop"
      :class="{'d-none' : scrollTop1 }">
    <a href="#" @click.prevent="top">
      <i class="bi bi-arrow-up-square-fill"></i>
    </a>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import scrollStore from '@/stores/scrollStore'
export default {
  computed: {
    ...mapState(scrollStore, ['scrollTop1'])
  },
  methods: {
    top () {
      document.documentElement.scrollTop = 0
      console.log(this.scrollTop1)
    }
  },
  // mounted () {
  //   window.onscroll = e => {
  //     console.log('???????????????????????//')
  //     if (e.target.scrollingElement.scrollTop > 350) {
  //       const el = document.querySelector('.goTop')
  //       if (el !== null) {
  //         el.className = 'goTop d-block'
  //       }
  //     } else {
  //       const el = document.querySelector('.goTop')
  //       if (el !== null) {
  //         el.className = 'goTop d-none'
  //       }
  //     }
  //   }
  // }
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
