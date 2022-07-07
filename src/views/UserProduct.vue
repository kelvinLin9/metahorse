<template>
<br>
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
    <div class="row justify-content-center ">
      <article class="col-md-4 position-relative">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3 rounded">
        <span class="cursorPointer material-icons position-absolute rounded-circle fs-4 p-2 bbb"
            :class="{'favorite': isFavorite(id)}"
            @click.stop="toggleFavorite(product)">
          <i :class="favState(id)"
            class="fs-1"></i>
        </span>
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
        <button type="button" class="btn btn-outline-primary text-dark fw-bold fs-5"
                @click="addToCart(product.id)">
          加到購物車
        </button>
      </div>
    </div>
    <h2>常見問題</h2>
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
        this.$router.push('/user/cart')
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
.bbb {
  color: rgb(230, 103, 235);
  right: 15px;
}

// .list-group-flush > .list-group-item {
//   white-space: nowrap;
//   width: auto;
//   transition: .7s;
//   background-color: transparent;
//   color: #587778;
//   &:hover,&:focus,&.active {
//     color: #ffffff;
//     box-shadow: inset 0 0 0 3em #587778;
//   }
//   @media(max-width: 768px){
//     flex-grow: 1;
//   }
//   @media(max-width: 576px){
//     flex-grow: 0;
//     width: 50%;
//   }
// }
// .list-group-item + .list-group-item.active{
//   margin-top: 0;
// }
.img-fit{
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: .5s;
}
.cursorPointer{
  cursor: pointer;
  &:hover{
    img{
      transform: scale(1.15);
    }
    box-shadow:0 0 8px rgb(128, 209, 214, .2);
  }
  .material-icons {
    transition: .3s;
    top: 8px;
    right: 8px;
    background-color: rgb(255, 255, 255, .3);
    color: #dee2e6;
    &:hover,&.favorite {
      color: #FF5959;
    }
  }
}
</style>