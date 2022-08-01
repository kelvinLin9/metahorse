<template>
  <Loading :active="isLoading"></Loading>
      <!-- 外層放背景，內層放黑底 -->
  <div class="productsBanner mb-5">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center mb-0 mt-5">
        <span class="me-2 fs-1 fw-bolder text-white">所有商品</span>
        <span class="fs-3 text-primary align-self-end">/ All Products</span>
      </h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h2 class="fw-bold text-center f-kalam bg-primary">賽馬( Level )</h2>
        <div class="fw-bold list-group flex-row flex-lg-column ">
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'all' ,'fs-4' : category == 'all'}"
              @click.prevent="setCategory('all')">- All</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'S' ,'fs-4' : category == 'S'}"
              @click.prevent="setCategory('S')">- S</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'A' ,'fs-4' : category == 'A'}"
              @click.prevent="setCategory('A')">- A</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'B' ,'fs-4' : category == 'B'}"
              @click.prevent="setCategory('B')">- B</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == 'C' ,'fs-4' : category == 'C'}"
              @click.prevent="setCategory('C')">- C</a>
        </div>
        <hr>
        <h2 class="fw-bold text-center f-kalam bg-primary">道具</h2>
          <div class="fw-bold list-group flex-row flex-lg-column ">
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == '馬鞍' ,'fs-4' : category == '馬鞍'}"
              @click.prevent="setCategory('馬鞍')">- 馬鞍</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == '馬蹄鐵' ,'fs-4' : category == '馬蹄鐵'}"
              @click.prevent="setCategory('馬蹄鐵')">- 馬蹄鐵</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
              :class="{ 'text-primary' : category == '馬飼料' ,'fs-4' : category == '馬飼料'}"
              @click.prevent="setCategory('馬飼料')">- 馬飼料</a>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 col-12"
              v-for="item in filterProducts" :key="item.id">
            <div class="card rounded-3">
              <div class="card-img overflow-hidden position-relative scale">
                <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
                        @click.prevent="goProduct(item.id)">
                  詳細資訊
                </button>
                  <!-- <a href="#"> -->
                <img class="rounded-3 img-fit"
                      :src="item.imageUrl" alt="商品照片">
                  <!-- </a> -->
                <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center"
                      @click.stop="toggleFavorite(item.id)">
                  <i :class="favState(item.id)"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="加入 / 移除我的最愛">
                  </i>
                </span>
              </div>
              <div class="card-body d-flex flex-column justify-content-center text-center fw-bold">
                <span class="fs-4">
                    {{ item.title }}
                  <span class="fs-6 text-muted">（{{ item.category }}）</span>
                </span>
                <span class="fs-5">
                  NT ${{ item.price }}
                  <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
                </span>
                <button type="button"
                        class="btn btn-outline-primary text-dark fw-bold fs-5 mt-3"
                        :disabled="cartLoadingItem === item.id"
                        @click="addCart(item.id)">
                  <div v-if="cartLoadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                    加到購物車
                </button>
              </div>
                <!-- 按下特定id按鈕之後先disabled，運行完之後再開放，避免重複點擊 -->
              <div class="d-flex justify-content-center pb-2 fw-bold">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserFooter/>
</template>

<script>
import UserFooter from '@/components/UserFooter.vue'
import { mapState, mapActions } from 'pinia'
import productsStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import favoriteStore from '@/stores/favoriteStore'
import goStore from '@/stores/goStore'
export default {
  data () {
    return {
      // category: 'all'
    }
  },
  components: {
    UserFooter
  },
  methods: {
    ...mapActions(favoriteStore, ['getFavorite', 'getFavoriteIds', 'toggleFavorite']),
    ...mapActions(productsStore, ['getProducts', 'setCategory']),
    ...mapActions(cartStore, ['getCart', 'addCart']),
    ...mapActions(goStore, ['goProduct'])
  },
  computed: {
    ...mapState(favoriteStore, ['favorite', 'favoriteIds', 'favState']),
    ...mapState(productsStore, ['products', 'filterProducts', 'category']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    // filterProducts () {
    //   let filterProducts
    //   switch (this.category) {
    //     case 'all':
    //       filterProducts = this.products.filter((item) => {
    //         return item
    //       })
    //       break
    //     case 'S':
    //       filterProducts = this.products.filter((item) => {
    //         return item.category === 'S'
    //       })
    //       break
    //     case 'A':
    //       filterProducts = this.products.filter((item) => {
    //         return item.category === 'A'
    //       })
    //       break
    //     case 'B':
    //       filterProducts = this.products.filter((item) => {
    //         return item.category === 'B'
    //       })
    //       break
    //     case 'C':
    //       filterProducts = this.products.filter((item) => {
    //         return item.category === 'C'
    //       })
    //       break
    //     case '馬鞍':
    //       filterProducts = this.products.filter((item) => {
    //         return item.description === '馬鞍'
    //       })
    //       break
    //     case '馬蹄鐵':
    //       filterProducts = this.products.filter((item) => {
    //         return item.description === '馬蹄鐵'
    //       })
    //       break
    //     case '馬飼料':
    //       filterProducts = this.products.filter((item) => {
    //         return item.description === '馬飼料'
    //       })
    //       break
    //   }
    //   return filterProducts
    // }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    this.getFavoriteIds()
  }

}
</script>

<style lang="scss" scoped>
.f-kalam {
  font-family: 'Kalam', cursive;
}
.productsBanner {
  height: 300px;
  background-image: url(https://i.imgur.com/4vGqi7D.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
  .bg-dark{
  z-index: 1;
  opacity: 1;
  }
}
.fav-icon {
  width: 50px;
  height: 50px;
  color: rgb(201, 54, 54);
  top: 5px;
  right: 5px;
  z-index: 2;
}
.img-fit{
  width: 100%;
  object-fit: cover;
  transition: 0.5s;
}
// 圖片放大，配合overflow-hidden
.scale{
  &:hover{
    .btn{
      opacity: 1;
    }
    img{
      transform: scale(1.15);
    }
  }
}
.bg-dark{
  z-index: 1; // 往上拉才點的到，不然會點到a標籤
  opacity: 0;
  transition: 0.5s;
}
</style>
