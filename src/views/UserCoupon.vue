<template>
  <div class="couponBanner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <span class="me-2 fs-1 fw-bolder text-white">幸運抽獎</span>
        <span class="fs-4 text-primary align-self-end">/ Lucky Draw</span>
      </h1>
    </div>
  </div>
  <div class="container py-5 d-flex flex-column align-items-center">
    <div class="la-square-jelly-box my-5"
          v-if="!draw"
          >
      <img src="https://imgur.com/YS7AfNK.jpg" alt="寶箱"
          data-aos="fade-down"
          data-aos-duration="2000"  >
      <img src="https://imgur.com/YS7AfNK.jpg" alt="陰影"
          data-aos="zoom-in"
          data-aos-duration="2000">
    </div>
    <div class="mt-1"
          v-if="draw">
      <img :src="coupon.img" class="img-fluid" alt="獎品">
    </div>
    <button type="button"
            class="btn btn-outline-primary text-dark fw-bold fs-5"
            @click="luckyDraw(0, 2)"
            v-if="!draw">
      抽獎
    </button>

    <div class="d-flex flex-column align-items-center"
          v-if="draw">
      <div class="fs-5 text-center fw-bold">
        恭喜獲得 <span class="fs-1">{{ coupon.discount }}</span> 優惠<br/>
        折扣碼: <span id="couponCode">{{ coupon.code }}</span>
      </div>
      <button type="button"
              class="btn btn-outline-primary text-dark fw-bold fs-6 mt-3"
              @click="copyCode(coupon.code)">
        複製折扣碼
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import couponStore from '@/stores/couponStore'
import copyStore from '@/stores/copyStore'
export default {
  computed: {
    ...mapState(couponStore, ['coupon', 'draw'])
  },
  methods: {
    ...mapActions(couponStore, ['luckyDraw']),
    ...mapActions(copyStore, ['copyCode'])
  }
}
</script>

<style scoped lang="scss">
.couponBanner {
  height: 250px;
  background-image: url(https://imgur.com/53K117A.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
    @media (max-width: 600px) {
    height: 150px;
  }
}
.la-square-jelly-box,
.la-square-jelly-box > img {
    position: relative;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.la-square-jelly-box {
    display: block;
    font-size: 0;
    color: transparent;
}
.la-square-jelly-box.la-dark {
    color: #333;
}
.la-square-jelly-box > img {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-square-jelly-box {
    width: 250px;
    height: 250px;
}
.la-square-jelly-box > img:nth-child(1),
.la-square-jelly-box > img:nth-child(2) {
    position: absolute;
    left: 0;
    width: 100%;
}
.la-square-jelly-box > img:nth-child(1) {
    top: -5%; // 25%
    z-index: 1;
    height: 100%;
/*     border-radius: 10%; */
    -webkit-animation: square-jelly-box-animate .6s -.1s linear infinite;
       -moz-animation: square-jelly-box-animate .6s -.1s linear infinite;
         -o-animation: square-jelly-box-animate .6s -.1s linear infinite;
            animation: square-jelly-box-animate .6s -.1s linear infinite;
}
.la-square-jelly-box > img:nth-child(2) {
    bottom: -9%;
    height: 10%;
    background: #000;
    border-radius: 50%;
    opacity: .2;
    -webkit-animation: square-jelly-box-shadow .6s -.1s linear infinite;
       -moz-animation: square-jelly-box-shadow .6s -.1s linear infinite;
         -o-animation: square-jelly-box-shadow .6s -.1s linear infinite;
            animation: square-jelly-box-shadow .6s -.1s linear infinite;
}

</style>
