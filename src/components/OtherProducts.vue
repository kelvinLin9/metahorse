<template>
<div class="container">
  <h3 class="text-center mt-5 mb-3 fs-1 fw-bolder">熱銷商品</h3>
  <div class="row g-4 pb-5">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
      class="col-md-6 col-lg-4 col-xl-3"
      v-for="(item, index) in products" :key="item.id"
      :class="{'d-none d-xl-block': index === 3, 'd-none d-lg-block': index === 0}"
      @click="viewProduct(item.id)" >
      <div class="bg-white border cursorPointer">
        <div class="overflow-hidden position-relative">
          <button class="btn fs-4 position-absolute text-white w-100 h-100 bg-dark bg-opacity-75" type="button"
          @click.prevent="goProducts">
            查看更多
          </button>
          <img class="img-fit" :src="item.imageUrl">
        </div>
        <div class="d-flex flex-column text-center pt-4 px-4 fw-bold">
          <span class="fs-5 mb-1">{{ item.title }}</span>
          <span class="fs-5">NT ${{ item.price }}
            <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
          </span>
        </div>
        <div class="d-flex justify-content-center p-4 fw-bold">
            <button type="submit"
                    class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg fs-3"
                    @click="addCart(item.id)">
            加到購物車
          </button>
        </div>
      </div>
      <br>
      <br>
      </swiper-slide>
    </swiper>
  </div>
</div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import './style.css'

// import required modules
import { FreeMode, Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [FreeMode, Pagination]
    }
  },
  data () {
    return {
      products: [],
      favorite: [],
      favoriteIds: [],
      category: 'all',
      isLoading: false,
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled(配合v-if做提示效果)
        loadingItem: ''
      },
      loadingItem: ''
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products.splice(12, 5)
        console.log('products:', response.data.products)
        console.log('products:', this.products)
        this.isLoading = false
      })
    },
    getProduct (id) {
      // 使用this.$router進入特定頁面
      // 進入單一頁面之後，重新取的遠端資料
      this.$router.push(`/user/product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1 // 產品數量
      }
      this.$http.post(url, { data: cart })
        .then((res) => {
          // 等到ajax成功之後，再把id清空
          this.status.loadingItem = ''
          console.log(res)
          this.getCart()
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        // 包含陣列列表、總金額
        this.cart = response.data.data
        console.log(this.cart)
        this.isLoading = false
      })
    },
    goProducts () {
      this.$router.push('/user/products')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.img-fit{
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
