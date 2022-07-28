<template>
  <Loading :active="isLoading"></Loading>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item fs-5">
          <router-link to="/products" class="fw-bold bg-dark">
            產品列表
          </router-link>
        </li>
        <li class="breadcrumb-item active fs-5" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">

      <div class="col-md-6 position-relative">
        <img :src="product.imageUrl" alt="商品照片" class="img-fluid mb-3 rounded h-100">

        <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center"
            @click.stop="toggleFavorite(product.id)">
          <i :class="favState(id)"></i>
        </span>
      </div>

      <div class="col-md-6 d-flex flex-column">
        <h2>{{ product.title }}</h2>
        <div>{{ product.description }}</div>
        <hr>
        <h5>{{product.content}}</h5>
        <hr>

        <div class="w-50" v-if="product.speed">
          <h5>遊戲中素質：</h5>
          <span>速度<i class="bi bi-lightning-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.speed*20}%`}">
              {{product.speed}} / 5
            </div>
          </div>
          <span>耐力<i class="bi bi-clock-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.stamina*20}%`}">
              {{product.stamina}} / 5
            </div>
          </div>
          <span>幸運<i class="bi bi-dice-6-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.lucky*20}%`}">
              {{product.lucky}} / 5
            </div>
          </div>
          <span>智慧<i class="bi bi-mortarboard-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.intelligence*20}%`}">
              {{product.intelligence}} / 5
            </div>
          </div>
          <hr>
        </div>

        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>

        <div class="row mt-auto">
          <div class="input-group input-group-sm col">
            <input type="number" class="form-control"
                  min="1"
                  :disabled="product.id === status.loadingItem"
                  v-model.number="qty">
          </div>

          <button type="button"
                  class="col-9 btn btn-outline-primary text-dark fw-bold fs-5"
                  :disabled="this.status.loadingItem === product.id"
                  @click="addCart(product.id, qty)">
            <div v-if="this.status.loadingItem === product.id"
                  class="spinner-grow text-danger spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            加到購物車
          </button>
        </div>
      </div>
    </div>
    <div class="my-5">
      <h2 class="fs-2 text-center fw-bold">常見問題</h2>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button fw-bold text-dark fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
        我該如何取得NFT
      </button>
    </h2>
    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        付款完成之後，我們將在3個工作日內將NFT轉移至您的錢包
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button fw-bold text-dark fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapseOne">
        我能擁有一匹真正的賽馬嗎
      </button>
    </h2>
    <div id="collapse2" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        每個NFT都對應到一匹真實的馬，透過遊戲，在錦標賽最終獲勝的玩家將能獲得一匹真實的馬
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button fw-bold text-dark fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapseOne">
        遊戲什麼時候會開放
      </button>
    </h2>
    <div id="collapse3" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        根據我們的路線圖，我們將在2022年第四季度提供Beta測試版
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
export default {
  data () {
    return {
      products: [],
      product: {},
      qty: 1,
      favorite: [],
      favoriteIds: [],
      id: '',
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.isLoading = false
        this.getFavoriteIds()
      })
    },
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        // console.log(res.data)
        this.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
        }
      })
    },
    addCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart })
        .then((res) => {
          // 等到ajax成功之後，再把id清空
          this.status.loadingItem = ''
          console.log('加入購物車的res', res)
          // this.getCart() // 重新取得購物車資料(單一頁面不需要)
          this.$httpMessageState(res, '加入購物車')
          emitter.emit('update-cart')// 通知Navbar元件也執行getCart()
        })
    },
    getFavorite () {
      this.favorite = []
      this.products.forEach((item) => {
        if (this.favoriteIds.indexOf(item.id) > -1) {
          this.favorite.push(item)
        }
      })
    },
    getFavoriteIds () {
      this.favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || []
      this.getFavorite()
    },
    toggleFavorite (item) {
      const clickId = item
      const hasFavorite = this.favoriteIds.some((item) => item === clickId) 
      if (!hasFavorite) {
        this.favoriteIds.push(item)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      } else {
        const delItem = this.favoriteIds.find((item) => {
          return item === clickId
        })
        this.favoriteIds.splice(this.favoriteIds.indexOf(delItem), 1)
        localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      }
      this.getFavoriteIds()
      emitter.emit('update-favoriteIds')
    }
  },
  computed: {
    favState () {
      return (id) => {
        return this.favoriteIds.indexOf(id) > -1 ? 'bi bi-heart-fill' : 'bi bi-heart'
      }
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getProducts()
  }
}
</script >
<style lang="scss" scoped>
.fav-icon {
  width: 50px;
  height: 50px;
  color: rgb(201, 54, 54);
  top: 5px;
  right: 15px;
  z-index: 2;
}
</style>
