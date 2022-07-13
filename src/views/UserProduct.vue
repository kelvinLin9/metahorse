<template>
  <br>
  <Loading :active="isLoading"></Loading>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item fs-5">
          <router-link to="/user/products">產品列表</router-link>
        </li>
        <li class="breadcrumb-item active fs-5" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center ">

      <div class="col-md-6 position-relative">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3 rounded">

        <span class="position-absolute rounded-circle fs-2 p-1 fav-icon bg-white text-center"
            :class="{'favorite': isFavorite(id)}"
            @click.stop="toggleFavorite(product)">
          <i :class="favState(id)"></i>
        </span>
      </div>

      <div class="col-md-6">
        <h2>{{ product.title }}</h2>
        <div>{{ product.description }}</div>
        <hr>
        <h5>{{product.content}}</h5>
        <hr>

        <div class="w-50" v-if="product.speed">
          <h5>遊戲中素質：</h5>
          <span>速度<i class="bi bi-lightning-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.speed*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              {{product.speed}}
            </div>
          </div>
          <span>耐力<i class="bi bi-clock-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.stamina*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              {{product.stamina}}
            </div>
          </div>
          <span>幸運<i class="bi bi-dice-6-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.lucky*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              {{product.lucky}}
            </div>
          </div>
          <span>智慧<i class="bi bi-mortarboard-fill mx-1"></i></span>
          <div class="progress mb-3">
            <div class="progress-bar text-dark fw-bold" role="progressbar" :style="{width: `${product.intelligence*20}%`}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              {{product.intelligence}}
            </div>
          </div>
          <hr>
        </div>

        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-primary text-dark fw-bold fs-5"
                @click="addToCart(product.id)">
          加到購物車
        </button>
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
      product: {},
      favorite: [],
      favoriteIds: [],
      id: ''
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      })
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, '加入購物車')
        emitter.emit('update-cart')
      })
    },
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
      this.favoriteIds = []
      this.favorite.forEach((item) => {
        this.favoriteIds.push(item.id)
      })
      // console.log(this.favoriteIds)
    },
    viewProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    isFavorite (id) {
      return this.favoriteIds.some((item) => item === id)
    },
    toggleFavorite (item) {
      const id = item.id
      const hasFavorite = this.favorite.some((item) => item.id === id)
      if (!hasFavorite) {
        this.favorite.push(item)
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      } else {
        const delItem = this.favorite.find((item) => {
          return item.id === id
        })
        this.favorite.splice(this.favorite.indexOf(delItem), 1)
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      }
      this.getFavorite()
      emitter.emit('update-favorite')
    }
  },
  computed: {
    favState () { // 閉包傳送參數 https://segmentfault.com/q/1010000009648670
      // 因為v-for的關係，有幾個項目就會觸發幾次
      return function (id) {
        if (this.favoriteIds.indexOf(id) > -1) {
          return 'bi bi-heart-fill'
        } else {
          return 'bi bi-heart'
        }
      }
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getFavorite()
  }
}
</script>
<style lang="scss" scoped>
.productBanner {
  height: 300px;
  background-image: url(https://i.imgur.com/4vGqi7D.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
}
.fav-icon {
  width: 50px;
  height: 50px;
  color: rgb(201, 54, 54);
  top: 5px;
  right: 15px;
  z-index: 2;
}

</style>
