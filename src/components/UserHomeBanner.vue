<template>
<div class="">
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="header-bg d-flex justify-content-center"
          style="background-image: url('https://imgur.com/Z73YJ0F.jpg');">
      <h1 class="fw-bold align-self-center header-text f-kalam slogan">
        DIGITAL
        <br class="d-md-none">
        EQUATES
        <br class="d-md-none">
        REALITY
      </h1>
      </div>
    </swiper-slide>
    <!-- https://imgur.com/w1VDrqL -->
    <swiper-slide>
      <div class="header-bg2 d-flex justify-content-center"
          style="background-image: url('https://imgur.com/YTmc4UB.jpg');">
      <h1 class="fw-bold align-self-center header-text f-kalam">
        DIGITAL
        <br class="d-md-none">
        EQUATES
        <br class="d-md-none">
        REALITY
      </h1>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './style.css' // 記得解決

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
.f-kalam {
  font-family: 'Kalam', cursive;
}
.header-bg {
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
.header-bg2 {
  background-size: cover;
  background-position: center left;
  height: 100vh;
}
.header-text {
    color: #000;
    -webkit-text-stroke: 2px rgb(241, 229, 59);
    font-size: 60px;
  }

</style>
