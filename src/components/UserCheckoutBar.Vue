<template>  
  <div class="container my-5">
    <div class="row test fs-2 fw-bold ">
      <div class="col d-flex flex-column mx-2 align-items-center rounded-pill"
          :class="{'bg-primary' : this.$route.name === 'checkout'}">
        <font-awesome-icon icon="fa-solid fa-1"/>
        輸入訂單資料
      </div>
      <div class="col d-flex flex-column mx-2 align-items-center rounded-pill"
          :class="{'bg-primary' : this.$route.name === 'checkout'}">
        <font-awesome-icon icon="fa-solid fa-2"/>
        確認付款
      </div>
      <div class="col d-flex flex-column mx-2 align-items-center rounded-pill"
          :class="{'bg-primary' : this.$route.name === 'checkout'}">
        <font-awesome-icon icon="fa-solid fa-3"/>
        完成訂單
      </div>
    </div>
  </div>
</template>
