<template>
<div class="container">
  <h3 class="text-center mt-5 mb-3 fs-1 fw-bolder">熱銷商品</h3>
  <div class="row g-4 pb-5">
    <swiper
      :loop="true"
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item) in productsHot" :key="item.id"
                    @click="viewProduct(item.id)" >
             <div class="card rounded-3 cursorPointer">
              <div class="card-img overflow-hidden position-relative">
                <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
                        @click.prevent="getProduct(item.id)">
                  詳細資訊
                </button>
                  <!-- <a href="#"> -->
                <img class="rounded-3 img-fit"
                      :src="item.imageUrl" alt="">
                  <!-- </a> -->
                <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center"
                      :class="{'favorite': isFavorite(item.id)}"
                      @click.stop="toggleFavorite(item)">
                  <i :class="favState(item.id)"></i>
                </span>
              </div>
              <div class="card-body d-flex flex-column justify-content-center text-center fw-bold">
                <span class="fs-4">
                    {{ item.title }}
                  <span class="fs-6 text-muted">（{{ item.category }}）</span>
                </span>
                <span class="fs-5">
                  NT ${{ item.price }}
                  <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
                </span>
                <button type="button"
                        class="btn btn-outline-primary text-dark fw-bold fs-5 mt-3"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)">
                  <div v-if="this.status.loadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                    加到購物車
                </button>
              </div>
                <!-- 按下特定id按鈕之後先disabled，運行完之後再開放，避免重複點擊 -->
              <div class="d-flex justify-content-center pb-2 fw-bold">
              </div>
            </div>
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
import emitter from '@/methods/emitter'
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
      productsHot: [], // 熱門商品 可以考慮寫在後台
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
  // inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.productsHot = res.data.products.splice(12, 5)
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
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then((res) => {
          // 等到ajax成功之後，再把id清空
          this.status.loadingItem = ''
          console.log(res)
          this.getCart() // 重新取得購物車資料
          this.$httpMessageState(res, '加入購物車')
          emitter.emit('update-cart')// 通知Navbar元件也執行getCart()
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
    },
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
      this.favoriteIds = []
      this.favorite.forEach((item) => {
        this.favoriteIds.push(item.id)
      })
      // console.log('this.favoriteIds', this.favoriteIds)
    },
    // viewProduct (id) {
    //   this.$router.push(`/product/${id}`)
    // },
    isFavorite (id) {
      // console.log(this.favoriteIds.some((item) => item === id)) // v-bind 所以配合v-for執行n次
      return this.favoriteIds.some((item) => item === id)
    },
    toggleFavorite (item) {
      console.log('1.我的最愛列表', this.favorite)
      console.log('2.點到的是第幾筆資料', this.favorite.indexOf(item))
      const id = item.id
      console.log('3.點擊到的id', id)
      const hasFavorite = this.favorite.some((item) => item.id === id) // v-on 所以只判斷點擊的那一次
      console.log('4.點擊到的id是否在我的最愛列表', hasFavorite)
      if (!hasFavorite) {
        this.favorite.push(item)
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      } else {
        const delItem = this.favorite.find((item) => {
          return item.id === id
        })
        console.log('5.(刪除時)點到的是第幾筆資料', this.favorite.indexOf(item))
        this.favorite.splice(this.favorite.indexOf(delItem), 1) // 直接放item會刪最後一個?
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      }
      this.getFavorite()
      console.log('更新後的我的最愛列表id', this.favoriteIds)
      emitter.emit('update-favorite')
    }
  },
  computed: {
    favState () {
      // console.log('123')
      // 閉包傳送參數 https://segmentfault.com/q/1010000009648670
      // 因為v-for的關係，有幾個項目就會觸發幾次
      return function (id) {
        if (this.favoriteIds.indexOf(id) > -1) {
          return 'bi bi-heart-fill'
        } else {
          return 'bi bi-heart'
        }
      }
    }
  },
  created () {
    this.getProducts()
    this.getFavorite()
  }
}
</script>

<style lang="scss" scoped>
.fav-icon {
  width: 50px;
  height: 50px;
  color: rgb(201, 54, 54);
  top: 5px;
  right: 5px;
  z-index: 2;
}
.img-fit{
  width: 100%;
  object-fit: cover;
  transition: 0.5s;
}
// 圖片放大
.cursorPointer{
  cursor: pointer;
  &:hover{
    .btn{
      opacity: 1;
    }
    img{
      transform: scale(1.15);
    }
  }
}

.bg-dark{
  z-index: 1; // 往上拉才點的到，不然會點到a標籤
  opacity: 0;
  transition: 0.5s;
}
</style>
