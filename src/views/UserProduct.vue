<template>
<br>
<br>
<br>
  <Loading :active="isLoading"></Loading>
  <div class="container">
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
        <h5>商品說明﹔</h5>
        <div>{{ product.content }}</div>
        <hr>
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
      <h2>常見問題</h2>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        我該如何取得NFT
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong>付款完成之後，將 <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
        // this.$swal({
        //   title: `已將 ${item.title} 加入我的最愛`,
        //   width: '28rem'
        // })
      } else {
        const delItem = this.favorite.find((item) => {
          return item.id === id
        })
        this.favorite.splice(this.favorite.indexOf(delItem), 1)
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
        // this.$swal({
        //   title: `取消關注 ${item.title}`,
        //   width: '24rem'
        // })
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
.fav-icon {
  width: 50px;
  height: 50px;
  color: rgb(201, 54, 54);
  top: 5px;
  right: 15px;
  z-index: 2;
}

</style>
