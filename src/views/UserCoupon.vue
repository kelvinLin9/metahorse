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
          v-if="!draw">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666489905621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZvwFR%2FmgVGiu9WIDNpTZS5J%2FuDG90OzdYLSmDvlXcfvxnPsBt2AM6yNeH5D5CQJd2shjGTwkJWbPKqvqKA9a%2BE74cJXFwpxSnYlguO7ujuWtD3t9Ieu3P9HsyQcmZab9DoxaNWJyLBNuVgbiQziVVom0XvVlMq%2B7r6gf3cPiPl5M3HOpPlHbILos%2BGxHz6E3DsNExbgEJQww2HO4tx0pec2gThRbqB8nxb%2Bwco8hOETNkWBWmYnWAOSlqh3wo7QFSXb0H0lJcw9tFda3sR9Sh0aD3%2FI5%2FZHIXWC5QEOyNWdfubHqQ9YsCoecmGr1iOuK3NbAih2NuG6wynIxeDjnIw%3D%3D" alt="寶箱"
          data-aos="fade-down"
          data-aos-duration="1500">
      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666489905621.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZvwFR%2FmgVGiu9WIDNpTZS5J%2FuDG90OzdYLSmDvlXcfvxnPsBt2AM6yNeH5D5CQJd2shjGTwkJWbPKqvqKA9a%2BE74cJXFwpxSnYlguO7ujuWtD3t9Ieu3P9HsyQcmZab9DoxaNWJyLBNuVgbiQziVVom0XvVlMq%2B7r6gf3cPiPl5M3HOpPlHbILos%2BGxHz6E3DsNExbgEJQww2HO4tx0pec2gThRbqB8nxb%2Bwco8hOETNkWBWmYnWAOSlqh3wo7QFSXb0H0lJcw9tFda3sR9Sh0aD3%2FI5%2FZHIXWC5QEOyNWdfubHqQ9YsCoecmGr1iOuK3NbAih2NuG6wynIxeDjnIw%3D%3D" alt="陰影"
          data-aos="zoom-in"
          data-aos-duration="1500">
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
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490626014.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FNoAOxLLzSOuoZnBQ9AQg1tADvOMxhj%2BNTT4bqBpLDhzjZdLe7%2BqEvYHu7VfmEJ1YQkLzmJ9jOxgcDPweVN4EO%2Fa3W6lmJQQaRU38%2FnVr1V7wCki7AKlxwqIH3aDUQtX1BioaVpoVIXL7nvNf8zpWsYaIl611YveCEB9n5VJ9Vw9CZK7cnWrZUrtl0pf%2F6hg3yZ%2Bv2Bozo8n4WojKjY8%2BZR8hGMRFosRGNYRhPNKJMl7RQVcTz5%2FvpfCnG4GKliN8laX0y7horzYei2DTi913vcYcFTuskfiizgcT3kl4eLyqT8Y16TjRtiJrsogus8AqdnyDS7KkkmR1uV6Gj1Xrg%3D%3D);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
    @media (max-width: 600px) {
    height: 150px;
  }
  .bg-dark{
  opacity: 0.8;
  }
}
.la-square-jelly-box,
.la-square-jelly-box > img {
    position: relative;
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
    animation: square-jelly-box-animate .6s -.1s linear infinite;
}
.la-square-jelly-box > img:nth-child(2) {
    bottom: -9%;
    height: 10%;
    background: #000;
    border-radius: 50%;
    opacity: .2;
    animation: square-jelly-box-shadow .6s -.1s linear infinite;
}
</style>
