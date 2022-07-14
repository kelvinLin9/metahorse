<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
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
           <RouterLink to="/dashboard/products" class="nav-link fs-5"
           :class="{ 'text-warning':  routeName === '/dashboard/products' }">產品</RouterLink>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === '/dashboard/orders' }">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === '/dashboard/coupons' }">優惠券</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="logout" class="nav-link fs-5">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
// 響應式行為會使用到折疊的 JavaScript 插件
import 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      isCollapse: false,
      routeName: '',
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled
        loadingItem: ''
      }
    }
  },
  watch: {
    $route (to) {
      console.log('$route', to)
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  },
  mounted () {
    this.routeName = this.$route.path // 點擊後圖標變色
    console.log('this.$route.path', this.$route.path)
  }
}
</script>

<style scoped>
.f-kalam {
  font-family: 'Kalam', cursive;
}
.num{
  width:20px;
  top: 5px;
  right: 5px;
  font-size: 12px;
}
/* 購物車按鈕 */
.cart {
  background-color: transparent;
  position: relative;
}
/* 購物車按鈕定位 */
.cart-box{
  min-width: 450px;
  position: absolute;
  right: 1px;
  top: 60px;
}
.logo {
  position: absolute;
  left: 165px;
  top: 10px;
}
@media (max-width: 768px) {
  .nav{
    z-index: 1;
  }
  .cart-box{
    min-width: 340px;
  }
  .logo {
   position: absolute;
   left: 145px;
  }
}
@media (max-width: 576px) {
  .logo {
   position: absolute;
   left: 140px;
  }
}
</style>
