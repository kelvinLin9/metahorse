<template>
  <div class="rounded-circle bg-white border border-3 border-warning d-flex justify-content-center align-items-center float-cart">
    <router-link to="/cart">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-dark fs-1" />
      <div class="bg-danger text-white rounded-circle text-center position-absolute num"
          v-if="cartNum !== 0">
        {{ cartNum }}
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import goStore from '@/stores/goStore'

export default {
  computed: {
    ...mapState(cartStore, ['cartNum'])
  },
  methods: {
    ...mapActions(goStore, ['goCart'])
  },
  mounted () {
    window.onscroll = e => {
      console.log(e.target.scrollingElement.scrollTop)
      if (e.target.scrollingElement.scrollTop > 350) {
        console.log(7788995)
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
.num{
  width:30px;
  height: 30px;
  top: -10px;
  right: -10px;
  font-size: 18px;
}
.float-cart{
  position: fixed;
  display: none !important;
  width: 65px;
  height: 65px;
  right: 10px;
  bottom: 60px;
  z-index: 99;
}
@media (max-width: 992px) {
  .float-cart{
    display:flex !important;
    z-index: 200;
  }
}
</style>
