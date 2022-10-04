<template>
  <div class="rounded-circle bg-white border border-3 border-warning d-flex justify-content-center align-items-center"
      :class="{ 'float-cart-up' : goTopIcon ,'float-cart-down' : !goTopIcon}">
    <RouterLink to="/cart">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-dark fs-1" />
      <div class="bg-danger text-white rounded-circle text-center position-absolute num"
          v-if="cartNum !== 0">
        {{ cartNum }}
      </div>
    </RouterLink>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import goStore from '@/stores/goStore'
import scrollStore from '@/stores/scrollStore'

export default {
  computed: {
    ...mapState(cartStore, ['cartNum']),
    ...mapState(scrollStore, ['goTopIcon'])
  },
  methods: {
    ...mapActions(goStore, ['goCart'])
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
.float-cart-up{
  position: fixed;
  display: none !important;
  width: 65px;
  height: 65px;
  right: 10px;
  bottom: 70px;
  z-index: 99;
}
@media (max-width: 992px) {
  .float-cart-up{
    display:flex !important;
    z-index: 200;
  }
}
.float-cart-down{
  position: fixed;
  display: none !important;
  width: 65px;
  height: 65px;
  right: 10px;
  bottom: 20px;
  z-index: 99;
}
@media (max-width: 992px) {
  .float-cart-down{
    display:flex !important;
    z-index: 200;
  }
}
</style>
