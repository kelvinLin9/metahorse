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
import emitter from '@/methods/emitter'
export default {
  data () {
    return {
      cartNum: 0
    }
  },
  inject: ['emitter'],
  methods: {
    goCart () {
      this.$router.push('/cart')
    },
  },
  mounted () {
    // 接收資料
    emitter.on('cartNum', (msg) => {
      console.log(msg)
      this.cartNum = msg
    })
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
  top: -5px;
  right: -5px;
  font-size: 18px;
}
.float-cart{
  position: fixed;
  display: none !important;
  width: 80px;
  height: 80px;
  right: 30px;
  top: 300px;
  z-index: 99;
}
@media (max-width: 992px) {
  .float-cart{
    display:flex !important;
  }
}
</style>
