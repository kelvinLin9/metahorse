<template>
  <div class="rounded-circle bg-white border border-3 border-warning d-flex justify-content-center align-items-center float-cart">
    <a href="#"
       @click.prevent="goCart">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-dark fs-1" />
      <div class="bg-danger text-white rounded-circle text-center position-absolute num"
          v-if="cartNum !== 0">
        {{ cartNum }}
      </div>
    </a>
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
  }
}
</script>

<style lang="scss" scoped>
.test {
  outline: 3px solid red;
}
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
  right: 30px;
  bottom: 100px;
  z-index: 99;
}
@media (max-width: 992px) {
  .float-cart{
    display:flex !important;
    z-index: 200;
  }
}
</style>
