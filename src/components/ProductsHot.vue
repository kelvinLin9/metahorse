<template>
<div class="container">
  <h3 class="text-center mt-5 mb-3 fs-2 fw-bolder"
      data-aos="fade-down"
      data-aos-duration="2000">熱銷商品</h3>
  <div class="row g-4 pb-5">
    <swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{clickable: true}"
      :modules="modules"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }"
      class="mySwiper"
    >
      <swiper-slide v-for="(item) in productsHot" :key="item.id"
                    @click="viewProduct(item.id)" >
             <div class="card rounded-3 mb-5 mx-2 mx-sm-0"
                  data-aos="flip-up"
                  data-aos-duration="2000">
              <div class="card-img overflow-hidden position-relative cursorPointer">
                <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
                        @click.prevent="goProduct(item.id)">
                  詳細資訊
                </button>
                  <!-- <a href="#"> -->
                <img class="rounded-3 img-fit"
                      :src="item.imageUrl" alt="商品照片">
                  <!-- </a> -->
                <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center"
                      @click.stop="toggleFavorite(item.id)">
                  <i :class="favState(item.id)" data-bs-toggle="tooltip" data-bs-placement="top" title="加入 / 移除我的最愛"></i>
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
import 'swiper/css/navigation'

// import './style.css'

// import required modules
import { Navigation, FreeMode, Pagination, Scrollbar } from 'swiper'
import emitter from '@/methods/emitter'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation, FreeMode, Pagination, Scrollbar]
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
        this.getFavoriteIds()
      })
    },
    goProduct (id) {
      this.$router.push(`/product/${id}`)
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
    getFavorite () {
      this.favorite = []
      this.products.forEach((item) => {
        if (this.favoriteIds.indexOf(item.id) > -1) {
          this.favorite.push(item)
        }
      })
      console.log('this.favorite', this.favorite)
      emitter.emit('update-favorite', '5566')
    },
    getFavoriteIds () {
      this.favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || []
      console.log(this.favoriteIds)
      this.getFavorite()
    },
    toggleFavorite (item) {
      const clickId = item
      console.log('clickId', clickId)
      // console.log('2.點到的是第幾筆資料的id', this.filterProducts.indexOf(item))
      const hasFavorite = this.favoriteIds.some((item) => item === clickId) // v-on 所以只判斷點擊的那一次
      console.log('4.點擊到的id是否在我的最愛列表', hasFavorite)
      if (!hasFavorite) {
        this.favoriteIds.push(item)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      } else {
        const delItem = this.favoriteIds.find((item) => {
          return item === clickId
        })
        // console.log('5.(刪除時)點到的是第幾筆資料', this.favoriteIds.indexOf(item))
        this.favoriteIds.splice(this.favoriteIds.indexOf(delItem), 1)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      }
      this.getFavoriteIds()
      console.log('更新後的我的最愛列表id', this.favoriteIds)
      emitter.emit('update-favoriteIds') // 嚇死我了 這行不需要??
    }
  },
  computed: {
    favState () {
      return (id) => {
        return this.favoriteIds.indexOf(id) > -1 ? 'bi bi-heart-fill' : 'bi bi-heart'
      }
    }
  },
  created () {
    this.getProducts()
    // this.getFavorite()
  }
}
</script>

<style lang="scss" scoped>
.test {
  outline: 3px solid red;
}
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
