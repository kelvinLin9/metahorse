<template>
<br><br>
  <div class="bg-light">
    <div class="container-fliud" v-if="favorite.length === 0">
      <div class="d-flex flex-column justify-content-center align-items-center text-secondary vh-remain">
        <span class="material-icons mb-3">production_quantity_limits</span>
        <p class="fs-5 fw-bold mb-5">目前沒有收藏任何商品</p>
        <RouterLink to="products" type="button" class="btn btn-primary fs-5 fw-bold text-white mt-3 px-4 py-3">瀏覽商品</RouterLink>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row gx-4 justify-content-center" v-if="favorite.length !== 0">
        <div class="col-md-6 col-lg-4 mb-3" v-for="item in favorite" :key="item.id" @click="viewProduct(item.id)">
          <div class="bg-white border cursorPointer">
            <div class="overflow-hidden position-relative">
              <button class="btn fs-4 position-absolute text-white w-100 h-100 bg-dark bg-opacity-75" type="button">查看更多</button>
              <img class="img-fit" :src="item.imageUrl">
            </div>
            <div class="d-flex pt-4 px-4 fw-bold">
              <span class="">{{ item.title }}</span>
              <span class="ms-auto">NT${{ item.price }}</span>
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
.banner{
  height: 300px;
  background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650378758414.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IXOsC2tInR5zqNMuw1K28EFRAFMwvJ2KpOWKSOgQziFyyQQywR0lWB6p1Qpe%2BUOplzRhTPpqmLSsmLWtDDV1Fynq5IYQWZ3FMtRp4CNgn%2FgLVmPbqkuKtsBUjRT1P6xiARUvHx6GMA2PY%2FJ6%2FIFRZlwhTBxOEN%2BitKWBDXqP676uF6IzARPYvTCjL9TEcaDIdZqelHXXMFijS5kgT8r86U2FM4ULgyM8NWGqntun%2Fcc%2F7%2BKR8Puz4r3K2FJbhXqF8edesGm%2Fi8JiREMJKbnaEk4N5n1npBIwKXE9HoKqjlH6GFm1%2F2kAxM0DCJFFGULg7Q077qye3%2B9f5spYhBMKPQ%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width:768px) {
    height: 250px;
  }
  @media (max-width:576px) {
    height: 200px;
  }
}
.vh-remain{
  min-height: calc(100vh - 300px);
}
.material-icons{
  font-size: 64px;
}
.img-fit{
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: .5s;
}
.cursorPointer{
  cursor: pointer;
  &:hover{
    .btn{
      opacity: 1;
    }
    img{
      transform: scale(1.15);
    }
    box-shadow:0 0 8px rgb(128, 209, 214, .2);
  }
}
.btn.bg-dark{
  z-index: 1;
  opacity: 0;
  transition: .5s;
}
</style>
