<template>
  <div class="home-coupon-banner mb-5">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <span class="me-2 fs-1 fw-bolder text-white">限時優惠</span>
        <span class="fs-5 text-primary align-self-end">/ 活動只到本月底</span>
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
</style>
