<template>
  <div class="container py-4 checkout-bar w-75 no-print">
    <div class="row fs-5 fs-md-3 fw-bold ">
      <div class="col d-flex flex-column px-2 py-3 align-items-center rounded-pill"
          :class="{'bg-primary' : $route.name === 'cart'}">
        <font-awesome-icon icon="fa-solid fa-1"/>
        購物<br class="d-block d-sm-none">車
      </div>
      <div class="col d-flex flex-column mx-2 py-3 align-items-center rounded-pill"
          :class="{'bg-primary' : $route.name === 'checkout'}">
        <font-awesome-icon icon="fa-solid fa-2"/>
        填寫<br class="d-block d-sm-none">訂單
      </div>
      <div class="col d-flex flex-column mx-2 py-3 align-items-center rounded-pill"
          :class="{'bg-primary' : $route.name === 'checkoutPay'}">
        <font-awesome-icon icon="fa-solid fa-3"/>
        確認<br class="d-block d-sm-none">付款
      </div>
    </div>
  </div>
</template>
