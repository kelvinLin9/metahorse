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
        <div class="header-bg-1 d-flex flex-column justify-content-center align-items-center"
            style="background-image: url('https://imgur.com/Z73YJ0F.jpg');">
          <div class="fw-bold header-text f-kalam py-2 py-md-5 text-center">
            DIGITAL
            <br class="d-md-none">
            EQUATES
            <br class="d-md-none">
            REALITY
          </div>
          <router-link type="button" to="/products" class="btn btn-sm btn-secondary rounded-1 fw-bold btn-lg fs-3 mt-5">
              搶先體驗&nbsp;&nbsp;&nbsp;三<font-awesome-icon icon="fa-solid fa-person-running" />
          </router-link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="header-bg-2 d-flex flex-column justify-content-center align-items-center bg-dark "
            style="background-image: url('https://imgur.com/I19pL6e.jpg');">
          <div class="fw-bold header-text f-kalam py-2 py-md-5 text-center">
            DIGITAL
            <br class="d-md-none">
            EQUATES
            <br class="d-md-none">
            REALITY
          </div>
          <router-link type="button" to="/products" class="btn btn-sm btn-primary rounded-5 fw-bold btn-lg fs-3 mt-5">
            搶先體驗&nbsp;&nbsp;&nbsp;三<font-awesome-icon icon="fa-solid fa-person-running" />
          </router-link>
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
