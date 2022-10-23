<template>
  <div class="productsBanner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <span class="me-2 fs-1 fw-bolder text-white">所有商品</span>
        <span class="fs-5 text-primary align-self-end">/ Products</span>
      </h1>
    </div>
  </div>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <h2 class="fw-bold text-center f-kalam bg-primary">賽馬( Level )</h2>
        <div class="fw-bold list-group flex-row flex-lg-column fs-5">
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === 'all' ,'fs-4' : category === 'all'}"
              @click.prevent="setCategory('all')">-All</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === 'S' ,'fs-4' : category === 'S'}"
              @click.prevent="setCategory('S')">- S</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === 'A' ,'fs-4' : category === 'A'}"
              @click.prevent="setCategory('A')">- A</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === 'B' ,'fs-4' : category === 'B'}"
              @click.prevent="setCategory('B')">- B</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === 'C' ,'fs-4' : category === 'C'}"
              @click.prevent="setCategory('C')">- C</a>
        </div>
        <hr>
        <h2 class="fw-bold text-center f-kalam bg-primary">道具</h2>
        <div class="fw-bold list-group flex-row flex-lg-column fs-5">
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === '馬鞍' ,'fs-4' : category === '馬鞍'}"
              @click.prevent="setCategory('馬鞍')">- 馬鞍</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === '馬蹄鐵' ,'fs-4' : category === '馬蹄鐵'}"
              @click.prevent="setCategory('馬蹄鐵')">- 馬蹄鐵</a>
            <a href="#" class="list-group-item list-group-item-action border-0 f-kalam"
              :class="{ 'text-primary' : category === '馬飼料' ,'fs-4' : category === '馬飼料'}"
              @click.prevent="setCategory('馬飼料')">- 馬飼料</a>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="form-floating mb-2 mt-2 mt-lg-0">
          <input type="search" class="form-control" id="search" placeholder="search"
          v-model="cacheSearch">
          <label for="search">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            search
          </label>
        </div>
        <div class="row g-3">
          <div class="col-lg-4 col-md-6 col-12"
              v-for="item in filterProducts" :key="item.id">
            <div class="card rounded-3 scale"
                @click="goProduct(item.id)"
            >
              <div class="card-img overflow-hidden position-relative">
                <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
                >
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> 詳細資訊
                </button>
                <img class="rounded-3 img-fit"
                      :src="item.imageUrl" alt="商品照片">
                <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white d-flex justify-content-center align-items-center "
                      @click.stop="toggleFavorite(item.id)">
                  <FontAwesomeIcon :icon="favState(item.id)"
                              class="love"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="加入 / 移除我的最愛"
                  />
                </span>
              </div>
              <div class="card-body d-flex flex-column text-center fw-bold">
                <span class="fs-5">
                    {{ item.title }}
                  <span class="fs-6 text-muted">（{{ item.category }}）</span>
                </span>
                <span class="fs-5">
                  NT ${{ item.price }}
                  <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
                </span>
                <div class="row mt-2">
                  <div class="input-group input-group-sm col">
                    <input type="number" class="form-control"
                          min="1"
                          :disabled="item.id === cartLoadingItem"
                          v-model.number="item.qty"
                          @input.stop="item.qty = Number($event.target.value.replace(/^(0+)|[^\d]+/g, '')) || 1"
                          @click.stop
                    >
                  </div>
                  <button type="button"
                          class="col-7 btn btn-outline-primary text-dark fw-bold fs- me-2"
                          :disabled="cartLoadingItem === item.id"
                          @click.stop="addCart(item.id, item.qty)">
                    <!-- 按下特定id按鈕之後先disabled，運行完之後再開放，避免重複點擊 -->
                    <div v-if="cartLoadingItem === item.id"
                        class="spinner-grow text-danger spinner-grow-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                      加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import favoriteStore from '@/stores/favoriteStore'
import goStore from '@/stores/goStore'

export default {
  methods: {
    ...mapActions(favoriteStore, ['getFavorite', 'getFavoriteIds', 'toggleFavorite']),
    ...mapActions(productStore, ['getProducts', 'setCategory']),
    ...mapActions(cartStore, ['getCart', 'addCart']),
    ...mapActions(goStore, ['goProduct'])
  },
  computed: {
    ...mapState(favoriteStore, ['favorite', 'favoriteIds', 'favState']),
    ...mapState(productStore, ['products', 'filterProducts', 'category']),
    ...mapState(statusStore, ['cartLoadingItem']),
    ...mapWritableState(productStore, ['cacheSearch'])
  }
}
</script>

<style lang="scss" scoped>
.productsBanner {
  height: 250px;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490583092.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TuG7uToyQQgQPSLoxxPXW1WD2I0HdVVEQEcn6LU3k8VDdcxWPMic3a9l5jbeCIOg2FE8m7xswHXUr%2BLkW8jkq2gd7WgD4J9Q9lfSbZqlUYDSB50Hp3dWRNV%2FEgyWkuh5LQxQRssR8k6JTV880QKiMUh4iu0GMqChQ1I%2FxXQ84jUbDOvcN7MDu1eI2%2FnLjNJgSQhavfe6sOkKKUl7qFGptThJw%2FZZiv9b%2BoCppdL9tqi8lOPHCm901EZUQUrV%2BPburvexV2dRBjaOvh2npxAkYd9TTWkAukdleS32o0o00Dcg2Bp%2FkBKTTkV9zaAYM9kvqNjKfB0flb3UhFP4r1qbIQ%3D%3D);
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
  cursor:pointer;
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
