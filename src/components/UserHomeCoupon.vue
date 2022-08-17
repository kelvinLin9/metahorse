<template>
  <div class="home-coupon-banner mb-5">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <div class="la-timer">
          <div></div>
        </div>
        <span class="mx-2 fs-1 fw-bolder text-white">限時優惠</span>
        <span class="fs-5 text-primary align-self-end">/ 活動只到年底</span>
      </h1>
      <router-link type="button" to="/UserCoupon" class="btn btn-outline-primary btn-hover rounded-0 fw-bold btn-lg fs-3 mt-3">
        火速前往
      </router-link>
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
  background-image: url(https://imgur.com/jIKW0bT.jpg);
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
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
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
    -webkit-transform-origin: 1px 1px 0;
       -moz-transform-origin: 1px 1px 0;
        -ms-transform-origin: 1px 1px 0;
         -o-transform-origin: 1px 1px 0;
            transform-origin: 1px 1px 0;
    -webkit-animation: timer-loader 1250ms infinite linear;
       -moz-animation: timer-loader 1250ms infinite linear;
         -o-animation: timer-loader 1250ms infinite linear;
            animation: timer-loader 1250ms infinite linear;
    -webkit-animation-delay: -625ms;
       -moz-animation-delay: -625ms;
         -o-animation-delay: -625ms;
            animation-delay: -625ms;
}
.la-timer > div:before {
    height: 12px;
}
.la-timer > div:after {
    height: 8px;
    -webkit-animation-duration: 15s;
       -moz-animation-duration: 15s;
         -o-animation-duration: 15s;
            animation-duration: 15s;
    -webkit-animation-delay: -7.5s;
       -moz-animation-delay: -7.5s;
         -o-animation-delay: -7.5s;
            animation-delay: -7.5s;
}
/*
 * Animation
 */
@-webkit-keyframes timer-loader {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@-moz-keyframes timer-loader {
    0% {
        -moz-transform: rotate(0deg);
             transform: rotate(0deg);
    }
    100% {
        -moz-transform: rotate(360deg);
             transform: rotate(360deg);
    }
}
@-o-keyframes timer-loader {
    0% {
        -o-transform: rotate(0deg);
           transform: rotate(0deg);
    }
    100% {
        -o-transform: rotate(360deg);
           transform: rotate(360deg);
    }
}
@keyframes timer-loader {
    0% {
        -webkit-transform: rotate(0deg);
           -moz-transform: rotate(0deg);
             -o-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
           -moz-transform: rotate(360deg);
             -o-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
</style>
