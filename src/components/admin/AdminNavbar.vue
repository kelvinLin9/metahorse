<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="text-warning f-kalam fs-2 text-center">MetaHorse</span>
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490927331.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZMQ6vOwjCgcPZNVwcyYK8LMN5koHVFmYYrchE8TwG0EXn64m4cQSrpVuY2A%2BML%2BvP8tQ9YrFRjAcTVr%2BMvB1ku3hA2AIma%2FDoybnYVRGT5ESCrq%2FXYuVKILUH8GmJLc4j7Wtnyh3Ai8rcEuiGp%2BWw%2Bi9lmMAQksyFruCvbYOAA58yy%2F3pvNM4ta1TAhSOZjAx6ngIUwS8cfmHaETVeKQU62sfskvZG3G43hgGZ%2Bz2BjVagCaGHWSpEWupz58evWUovo4s1ASzlLX%2B3BFLH9KcAvYPJfFfapPLT9sGBwk9MrUoYtfLAOxc%2F8s4BlnP%2FhNaglAlQiuNiuMrGbN0SMUkA%3D%3D" alt="logo" width="50" class="logo">
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
                        :class="{ 'text-warning':  $route.path === '/dashboard/order' }"
            >
              訂單
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard/products" class="nav-link fs-5"
                        :class="{ 'text-warning':  $route.path === '/dashboard/products' }"
            >
              產品
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard/coupons" class="nav-link fs-5"
                        :class="{ 'text-warning':  $route.path === '/dashboard/coupons' }"
            >
              優惠券
            </RouterLink>
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
