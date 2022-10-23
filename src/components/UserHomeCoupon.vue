<template>
  <div class="home-coupon-banner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <div class="la-timer">
          <div></div>
        </div>
        <span class="mx-2 fs-1 fw-bolder text-white">限時優惠</span>
        <span class="fs-5 text-primary align-self-end">/ 活動只到年底</span>
      </h1>
      <RouterLink type="button" to="/UserCoupon" class="btn btn-outline-primary btn-hover rounded-0 fw-bold btn-lg fs-3 mt-3">
        火速前往
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-coupon-banner {
  height: 300px;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666489763581.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cgptY84tGKxDnLLchmAC4Xv5b1Ivk6dPFDv6qozCcyESk9dKO%2BCUe3HBXaeCoY4Wp0B%2Fujuy%2FYt8KsV6cP6OPgQYuKhZCim1dGafXEiqB%2BuBv2qYv%2F8E3SUcE9%2B6Szt2IR6tNQSHSPsfJGbeHRsYlHl0ZLXayclD439Up%2Bd8XXx9iOF1iqlvnbLjFJR7IC5%2BC%2FCKb%2BvLEV4uttyPtxm1ga%2FNxwXCfM9gQGpMR%2Bd4xQQmCb80zhcXAK%2F0ECp6%2B5XmS3ZHBJe%2BPI%2Bqa9KlcMfAgvbt%2Ft2PCZmSDnr5Ai6znRv7HPXAxBct3%2FDJ9nkbV1PZVlbTozy4iL8LS9Vg6BFX3w%3D%3D);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
  background-attachment: fixed;
    @media (max-width: 600px) {
    height: 150px;
  }
}
.la-timer,
.la-timer > div {
    position: relative;
    box-sizing: border-box;
}
.la-timer {
    display: block;
    font-size: 0;
    color: #fff;
}
.la-timer.la-dark {
    color: #333;
}
.la-timer > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}
.la-timer {
    width: 32px;
    height: 32px;
}
.la-timer > div {
    width: 32px;
    height: 32px;
    background: transparent;
    border-width: 2px;
    border-radius: 100%;
}
.la-timer > div:before,
.la-timer > div:after {
    position: absolute;
    top: 14px;
    left: 14px;
    display: block;
    width: 2px;
    margin-top: -1px;
    margin-left: -1px;
    content: "";
    background: currentColor;
    border-radius: 2px;
    transform-origin: 1px 1px 0;
    animation: timer-loader 1250ms infinite linear;
    animation-delay: -625ms;
}
.la-timer > div:before {
    height: 12px;
}
.la-timer > div:after {
    height: 8px;
    animation-duration: 15s;
    animation-delay: -7.5s;
}
/*
 * Animation
 */
@keyframes timer-loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
