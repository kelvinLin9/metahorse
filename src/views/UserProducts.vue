<template>
  <Loading :active="isLoading"></Loading>
      <!-- 外層放背景，內層放黑底 -->
  <div class="productsBanner mb-5">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center mb-0 mt-5">
        <span class="me-2 fs-1 fw-bolder text-white">所有商品</span>
        <span class="fs-3 text-primary align-self-end">/ All Products</span>
      </h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h2 class="fw-bold text-center f-kalam bg-primary">賽馬( Level )</h2>
        <div class="fw-bold list-group flex-row flex-lg-column ">
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'all' ,'fs-4' : category == 'all'}"
              @click.prevent="category = 'all'">- All</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'S' ,'fs-4' : category == 'S'}"
              @click.prevent="category = 'S'">- S</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'A' ,'fs-4' : category == 'A'}"
              @click.prevent="category = 'A'">- A</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'B' ,'fs-4' : category == 'B'}"
              @click.prevent="category = 'B'">- B</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'C' ,'fs-4' : category == 'C'}"
              @click.prevent="category = 'C'">- C</a>
        </div>
        <hr>
        <h2 class="fw-bold text-center f-kalam bg-primary">道具</h2>
          <div class="fw-bold list-group flex-row flex-lg-column ">
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == '馬鞍' ,'fs-4' : category == '馬鞍'}"
              @click.prevent="category = '馬鞍'">- 馬鞍</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == '馬蹄鐵' ,'fs-4' : category == '馬蹄鐵'}"
              @click.prevent="category = '馬蹄鐵'">- 馬蹄鐵</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == '馬飼料' ,'fs-4' : category == '馬飼料'}"
              @click.prevent="category = '馬飼料'">- 馬飼料</a>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 col-12"
              v-for="item in filterProducts" :key="item.id">
            <div class="card rounded-3">
              <div class="card-img overflow-hidden position-relative  cursorPointer">
                <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
                        @click.prevent="getProduct(item.id)">
                  詳細資訊
                </button>
                  <!-- <a href="#"> -->
                <img class="rounded-3 img-fit"
                      :src="item.imageUrl" alt="商品照片">
                  <!-- </a> -->
                <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center"
                      :class="{'favorite': isFavorite(item.id)}"
                      @click.stop="toggleFavorite(item)">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
// import Pagination from '@/components/Pagination.vue'
import emitter from '@/methods/emitter'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {}, // 分頁資訊
      favorite: [],
      favoriteIds: [],
      category: 'all',
      isLoading: false,
      // 對應品項 id 當loadingItem為一個特定品項的時候
      // 我們就會把這個按鈕轉為disabled(配合v-if做提示效果)
      status: {
        loadingItem: ''
      }
    }
  },
  components: {
    Footer
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        // console.log('products:', res)
        this.isLoading = false
      })
    },
    getProduct (id) {
      console.log(id)
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
      this.$http.get(url).then((res) => {
        console.log(res)
        // 包含所有商品carts、總金額
        this.cart = res.data.data
        this.isLoading = false
      })
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
    },
    filterProducts () {
      let filterProducts
      switch (this.category) {
        case 'all':
          filterProducts = this.products.filter((item) => {
            return item
          })
          break
        case 'S':
          filterProducts = this.products.filter((item) => {
            return item.category === 'S'
          })
          break
        case 'A':
          filterProducts = this.products.filter((item) => {
            return item.category === 'A'
          })
          break
        case 'B':
          filterProducts = this.products.filter((item) => {
            return item.category === 'B'
          })
          break
        case 'C':
          filterProducts = this.products.filter((item) => {
            return item.category === 'C'
          })
          break
        case '馬鞍':
          filterProducts = this.products.filter((item) => {
            return item.description === '馬鞍'
          })
          break
        case '馬蹄鐵':
          filterProducts = this.products.filter((item) => {
            return item.description === '馬蹄鐵'
          })
          break
        case '馬飼料':
          filterProducts = this.products.filter((item) => {
            return item.description === '馬飼料'
          })
          break
      }
      return filterProducts
    }
  },
  created () {
    this.getProducts()
    this.getFavorite()
  }
}
</script>

<style lang="scss" scoped>
.f-kalam {
  font-family: 'Kalam', cursive;
}
.test {
  outline: 3px solid red;
}
.productsBanner {
  height: 300px;
  background-image: url(https://i.imgur.com/4vGqi7D.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
  .bg-dark{
  z-index: 1;
  opacity: 1;
  }
}
// 先留著 找地方用
.bg-attachment{
  background-attachment: fixed;
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
