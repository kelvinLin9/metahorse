<template>
<br>
<br>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/products">產品列表</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    
    <div class="row justify-content-center">
      <article class="col-md-4">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3 rounded ">
      </article>
      <div class="col-md-4">
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
        <button type="button" class="btn btn-outline-danger"
                @click="addToCart(product.id)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
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
        this.$router.push('/user/cart')
      })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
