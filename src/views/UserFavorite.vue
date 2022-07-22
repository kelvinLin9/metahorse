<template>
  <div class="bg-light">
    <div class="container-fluid"
        v-if="favorite.length === 0">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="fs-2 text-center fw-bold mb-5">目前沒有收藏任何商品</h1>
        <RouterLink to="products" type="button" class="btn btn-outline-primary text-dark fw-bold fs-5">回產品列表</RouterLink>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row g-4 justify-content-center"
          v-if="favorite.length !== 0">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 text-center fw-bold">我的最愛</h1>
        </div>
        <div class="col-md-6 col-lg-4 col-12"
            v-for="item in favorite" :key="item.id">
          <div class="card rounded-3">
            <div class="card-img overflow-hidden position-relative cursorPointer">
              <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
              @click.prevent="goProduct(item.id)">
                詳細資訊
              </button>
              <img class="rounded-3 img-fit"
                  :src="item.imageUrl" alt="商品照片">
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
              <div class="px-3 py-2 d-flex justify-content-between">
                <button type="button"
                        class="btn btn-outline-secondary fw-bold fs-5 px-3"
                        @click.stop="removeFavorite(item.id)">
                  移除收藏
                </button>
                <button type="button"
                        class="btn btn-outline-primary text-dark fw-bold fs-5 px-3"
                        :disabled="this.status.loadingItem === item.id"
                        @click.stop="addCart(item.id)">
                  <div v-if="this.status.loadingItem === item.id"
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
  <UserFooter/>
</template>

<script>
import emitter from '@/methods/emitter'
import UserFooter from '@/components/UserFooter.vue'
export default {

  data () {
    return {
      favorite: [],
      favoriteIds: [],
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  components: {
    UserFooter
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        // console.log('products:', res)
        this.isLoading = false
        this.getFavoriteIds()
      })
    },
    getFavorite () {
      // console.log('this.products', this.products)
      this.favorite = []
      this.products.forEach((item) => {
        if (this.favoriteIds.indexOf(item.id) > -1) {
          this.favorite.push(item)
        }
      })
      emitter.emit('updateFavorite', this.favorite)
      console.log('this.favorite', this.favorite)
    },
    getFavoriteIds () {
      this.favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || []
      console.log(this.favoriteIds)
      this.getFavorite()
    },
    removeFavorite (item) {
      this.favoriteIds.splice(this.favoriteIds.indexOf(item), 1)
      localStorage.setItem('favoriteIds', JSON.stringify(this.favoriteIds))
      this.getFavoriteIds()
      emitter.emit('update-favoriteIds') // 傳送到UserNavbar
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1 // 產品數量
      }
      this.$http.post(url, { data: cart })
        .then((res) => {
          // 等到ajax成功之後，再把id清空
          this.status.loadingItem = ''
          console.log('加入購物車後回傳的訊息', res)
          this.getCart()
          emitter.emit('update-cart')
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        console.log('重新取得購物車訊息', res)
        // 包含陣列列表、總金額
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    goProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.test {
  outline: 3px solid red;
}
.img-fit{
  width: 100%;
  object-fit: cover;
  transition: .5s;
}
.cursorPointer{
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
