<template>
<br><br><br><br>
  <div class="bg-light">
    <div class="container-fliud" v-if="favorite.length === 0">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="fs-2 text-center fw-bold mb-5">目前沒有收藏任何商品</h1>
        <RouterLink to="products" type="button" class="btn btn-outline-primary text-dark fw-bold fs-5">回產品列表</RouterLink>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row gx-4 justify-content-center" v-if="favorite.length !== 0">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 text-center fw-bold">我的最愛</h1>
        </div>
        <div class="col-md-6 col-lg-4 mb-3"
        v-for="item in favorite" :key="item.id"
        @click="viewProduct(item.id)">
          <div class="bg-white border cursorPointer">
            <div class="overflow-hidden position-relative">
              <button class="btn fs-4 position-absolute text-white w-100 h-100 bg-dark bg-opacity-75" type="button">查看更多</button>
              <img class="img-fit" :src="item.imageUrl">
            </div>

          <div class="d-flex flex-column text-center pt-4 px-4 fw-bold">
            <span class="fs-5 mb-1">{{ item.title }}</span>
            <span class="fs-5">NT ${{ item.price }}
              <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
            </span>
        </div>

            <div class="d-flex p-4">
              <button type="button" class="btn btn-outline-secondary fw-bold w-50 me-2" @click.stop="removeFavorite(item)">移除收藏</button>
              <button type="button" class="btn btn-primary fw-bold text-white w-50" @click.stop="addCart(item.id)">
                <div class="spinner-border text-white spinner-border-sm" role="status" v-if="isLoading">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <SectionOnSale /> -->
    </div>
  </div>
  <!-- <SectionBanner :info="SectionCouponBanner" /> -->
  <Footer />
</template>

<script>
import emitter from '@/methods/emitter'
// import SectionOnSale from '@/components/SectionOnSale'
// import SectionBanner from '@/components/SectionBanner'
import Footer from '@/components/Footer'
export default {
  data () {
    return {
      favorite: [],
      isLoading: false
    }
  },
  components: {
    // SectionOnSale,
    // SectionBanner,
    Footer
  },
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
    },
    removeFavorite (item) {
      this.favorite.splice(this.favorite.indexOf(item), 1)
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      this.getFavorite()
      emitter.emit('update-favorite')
    },
    addCart (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: { product_id: id, qty: 1 } }).then(() => {
        this.$swal('商品已加入購物車')
        emitter.emit('update-cart')
        this.isLoading = false
      })
    },
    viewProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
  }
}
</script>

<style lang="scss" scoped>

</style>
