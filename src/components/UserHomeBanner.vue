<template>
  <div class="">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 25000,
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
        <div class="header-bg-1 d-flex justify-content-center align-items-center"
            style="background-image: url('https://imgur.com/Z73YJ0F.jpg');">
          <div class="fw-bold header-text f-kalam py-2 py-md-5 text-center">
            DIGITAL
            <br class="d-md-none">
            EQUATES
            <br class="d-md-none">
            REALITY
          </div>
          <!-- <div>
            <button type="button">
              搶先體驗
            </button>
          </div> -->
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="header-bg-2 d-flex justify-content-center align-items-center bg-dark "
            style="background-image: url('https://imgur.com/I19pL6e.jpg');">
          <div class="fw-bold header-text f-kalam py-2 py-md-5 text-center">
            DIGITAL
            <br class="d-md-none">
            EQUATES
            <br class="d-md-none">
            REALITY
          </div>
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
  height: 100vh;
}
.header-bg-2 {
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
}
.header-text {
  width: 100vw;
  color: #000;
  -webkit-text-stroke: 2px rgb(241, 229, 59);
  font-size: 60px;
  backdrop-filter: saturate(10%);
}
@media (max-width: 992px) {
  .header-text{
    font-size: 50px;
  }
}
</style>
