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
        <div class="header-bg-1 d-flex justify-content-center"
            style="background-image: url('https://imgur.com/Z73YJ0F.jpg');">
        <h1 class="fw-bold align-self-center header-text f-kalam">
          DIGITAL
          <br class="d-md-none">
          EQUATES
          <br class="d-md-none">
          REALITY
        </h1>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="header-bg-2 d-flex justify-content-center bg-dark"
            style="background-image: url('https://imgur.com/I19pL6e.jpg');">
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
.header-bg-1 {
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 62px);
}
.header-bg-2 {
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 62px);
}
.header-text {
    color: #000;
    -webkit-text-stroke: 2px rgb(241, 229, 59);
    font-size: 60px;
}
</style>
