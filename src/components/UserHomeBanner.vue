<template>
  <div class="">
    <Swiper
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
      <SwiperSlide>
        <div class="header-bg-1 d-flex flex-column justify-content-center align-items-center"
            style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666489409836.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P78beXFoeglBvNZtFCrwkydUmSF9NK2nTP3PrwkKI7JgS4z5ieSLRF9fPRyGPioaW9LoVRseYiKhoY%2Fns2la%2BfZeUv04Ocw97W6ujNV7rboiha3vGHYUkgBZE0d4Nz0YzUwP%2FtFCO2ftE1nKs4pzfqmXwgs2%2B5O2SUIAnBGjLvsOMYNkXWvI%2FKCTb%2Br0WCXI2SX6iXeg8l6iJVgtAZZNeiQQfD%2F8h4sFsGbW%2BOp0HnVRjzSwuEupu%2BOydRFewMX%2FMdXuV%2FOBgKCxbx6g%2B6500SMSxGlCQ7Q1tvYO870GVbBZRX9mXiYjwVh8I3cMIARsNRGzLdBD50yx5kpRzfB1Ww%3D%3D');">
          <div class=" header-text-bg py-2 py-md-5 text-center">
            <div class="fw-bold f-kalam header-text">
              DIGITAL
              <br class="d-md-none">
              EQUATES
              <br class="d-md-none">
              REALITY
            </div>
            <RouterLink type="button" to="/products" class="btn btn-sm btn-secondary rounded-1 fs-5 my-2">
                  搶先體驗&nbsp;&nbsp;&nbsp;三<FontAwesomeIcon icon="fa-solid fa-person-running" />
            </RouterLink>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="header-bg-2 d-flex flex-column justify-content-center align-items-center bg-dark "
            style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666489606588.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jot%2Fa86YkiWSst4PXEulQpkEA4%2BunWNZtsDAOXSJm3TYA03D1P3%2FhzxhC4aW3GYAiE0apQCIsjg1pYiqauUBK7LGPO5bNFORZbtLvGkonC7u7fx9jXmHc1xncEiK7igfnkll9sppno0ykfyIpdPztSurEfi%2BBgCnOmIxTrkWh9RJTQOXenu1omrfIWIiXXmWPt5vNoLe%2BWrJQanG%2FfQ5vcLI9C6sxCYl5K5K9o8JWWqxxRACVHbqebcDJmn7eReJzLjfmim%2F4R6ufagUdscHwlJ1F9Je7%2B4Qqys01V25dNPN02XLSaj5e3YjuwbZUWeEII7KBjlCjZtwoMsz%2BekETA%3D%3D');">
          <div class=" header-text-bg py-2 py-md-5 text-center">
            <div class="fw-bold f-kalam header-text">
              DIGITAL
              <br class="d-md-none">
              EQUATES
              <br class="d-md-none">
              REALITY
            </div>
            <RouterLink type="button" to="/products" class="btn btn-sm btn-primary rounded-1 fs-5 my-2">
                  搶先體驗&nbsp;&nbsp;&nbsp;三<FontAwesomeIcon icon="fa-solid fa-person-running" />
            </RouterLink>
          </div>
        </div>
      </SwiperSlide>
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
  height: calc(100vh - 73px);
}
.header-bg-2 {
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh - 73px);
}
.header-text-bg {
  width: 100vw;
  color: #000;
  backdrop-filter: saturate(10%);
  .header-text{
    -webkit-text-stroke: 2px rgb(241, 229, 59);
    font-size: 60px;
  }
}
@media (max-width: 992px) {
  .header-text-bg{
    .header-text{
      font-size: 50px;
    }
  }
}
</style>
