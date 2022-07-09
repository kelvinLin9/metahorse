<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="text-warning f-kalam fs-2">MetaHorse</span>
        <img src="https://i.imgur.com/61qkafr.jpg" alt="" width="50" class="logo">
      </a>
      <!-- 漢堡選單按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
           <RouterLink to="/" class="nav-link fs-5"
           :class="{ 'text-warning':  status === 'home' }">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <router-link to="/user/products" class="nav-link fs-5"
            :class="{ 'text-warning':  status === 'products' }">產品列表</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/user/productstest" class="nav-link fs-5"
            :class="{ 'text-warning':  status === 'productstest' }">產品列表(分頁測試)</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/user/checkOrder" class="nav-link fs-5"
            :class="{ 'text-warning':  status === 'CheckOrder' }">訂單查詢</router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/user/cart" class="nav-link fs-5"
            :class="{ 'text-warning':  status === 'cart' }">購物車</router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/user/Favorite" class="nav-link fs-5"
            :class="{ 'text-warning':  status === 'favorite' }">我的最愛</router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/user/cart" class="nav-link fs-5"
            :class="{ 'text-warning':  status === '/login' }">使用者介面</router-link>
          </li>
        </ul>

        <!-- 購物車、最愛、使用者介面改成靠右圖示 -->
        <ul class="d-none d-lg-flex navbar-nav ms-auto me-2">
          <li class="nav-item position-relative">
            <RouterLink to="/user/cart" class="nav-link px-3"
            :class="{ 'text-warning':  status === 'cart' }">
              <i class="bi bi-cart3 fs-4"></i>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num"
                    v-if="cartNum !== 0">
                {{ cartNum }}
              </div>
            </RouterLink>
          </li>
          <li class="nav-item position-relative">
            <RouterLink to="/user/Favorite" class="nav-link px-3"
            :class="{ 'text-warning':  status === 'favorite' }">
              <i class="bi bi-search-heart fs-4"></i>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num"
                    v-if="favoriteNum !== 0">
                {{ favoriteNum }}
              </div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link px-3"
            :class="{ 'text-warning':  status === '/login' }">
              <i class="bi bi-person-workspace fs-4"></i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import emitter from '@/methods/emitter'
// 響應式行為會使用到折疊的 JavaScript 插件
import 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      isCollapse: false,
      status: '',
      favoriteNum: 0,
      cartNum: 0
    }
  },
  watch: {
    $route (to) {
      if (document.body.offsetWidth < 992) {
        if (this.isCollapse) {
          this.$refs.navbarBtn.click()
        }
      }
      this.status = to.name
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
      }
    }
  },
  methods: {
    // 取得購物車筆數
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cartNum = res.data.data.carts.length
        }
      })
    },
    // 取得我的最愛筆數
    getFavorite () {
      this.favoriteNum = (JSON.parse(localStorage.getItem('favorite')) || []).length
    }
  },
  created () {
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
    this.$http.get(api).then((res) => {
      if (res.data.success) {
        this.cartNum = res.data.data.carts.length
      }
    })
    this.favoriteNum = (JSON.parse(localStorage.getItem('favorite')) || []).length
  },
  mounted () {
    // this.status = this.$route.path
    this.status = this.$route.name
    console.log(this.status)
    emitter.on('update-cart', () => {
      this.getCart()
    })
    emitter.on('update-favorite', () => {
      this.getFavorite()
    })
  }
}
</script>

<style scoped>

.num{
  width:20px;
  top: 5px;
  right: 5px;
  font-size: 12px;
}
</style>
