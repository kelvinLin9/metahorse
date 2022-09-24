<template>
  <div class="goTop d-none">
    <a href="#" @click.prevent="top">
      <i class="bi bi-arrow-up-square-fill"></i>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    top () {
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    window.onscroll = e => {
      if (e.target.scrollingElement.scrollTop > 350) {
        const el = document.querySelector('.goTop')
        if (el !== null) {
          el.className = 'goTop d-block'
        }
      } else {
        const el = document.querySelector('.goTop')
        if (el !== null) {
          el.className = 'goTop d-none'
        }
      }
    }
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
@media (max-width: 768px) {
  .goTop{
    right: 10px;
    bottom: 5px;
  }
  .goTop a{
    font-size: 35px;
  }
}
</style>
