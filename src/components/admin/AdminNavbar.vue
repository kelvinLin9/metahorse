<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="text-warning f-kalam fs-2 text-center">MetaHorse</span>
        <img src="https://i.imgur.com/61qkafr.jpg" alt="logo" width="50" class="logo">
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
           <RouterLink to="/dashboard/order" class="nav-link fs-5"
           :class="{ 'text-warning':  routeName === '/dashboard/order' }">訂單</RouterLink>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === '/dashboard/products' }">產品</router-link>
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
        loadingItem: ''
      }
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/adminlogin')
        }
      })
    }
  },
  mounted () {
    this.routeName = this.$route.path // 點擊後圖標變色
  }
}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  left: 165px;
  top: 10px;
  @media (max-width: 768px) {
   left: 145px;
  }
  @media (max-width: 576px) {
   left: 137px;
  }
  @media (max-width: 414px) {
   left: 130px;
  }
}
</style>
