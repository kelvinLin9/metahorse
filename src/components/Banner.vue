<template>
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
      <!-- <img src="../image/001.jpg" alt=""> -->
      <h1 class="fw-bold align-self-center header-text mb-0 d-none d-md-block f-kalam">
        DIGITAL EQUATES REALITY
      </h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="header-bg d-flex justify-content-center"
      style="background-image: url('https://imgur.com/QA3pXeQ.jpg');">
      <h1 class="fw-bold align-self-center header-text mb-0 d-none d-md-block f-kalam">
        DIGITAL EQUATES REALITY
      </h1>
      </div>
    </swiper-slide>
  </swiper>
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

<style>
.header-bg {
  /* background-image: url(../image/002.jpg); */
  background-size: cover;
  background-position: center;
  height: 635px;
  /* margin-top: 74px; */
}

@media (min-width: 768px) {
  .header-bg {
    /* background-image: url(../image/002.jpg); */
    background-size: cover;
    background-position: center center;
    height: 810px;
    /* margin-top: 74px; */
  }
  .header-text {
    /* font-family: 'Kalam', cursive; */
    /* color: #838761; */
    color: #000;
    -webkit-text-stroke: 2px rgb(241, 229, 59);
    font-size: 70px;
  }
}
</style>
