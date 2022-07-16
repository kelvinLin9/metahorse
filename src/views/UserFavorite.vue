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
          <div class="card rounded-3 cursorPointer">
            <div class="card-img overflow-hidden position-relative">
              <button class="btn bg-dark fs-4 position-absolute text-white w-100 h-100 bg-opacity-75" type="button"
              @click.prevent="getProduct(item.id)">
                查看更多
              </button>
              <img class="rounded-3 img-fit"
                  :src="item.imageUrl" alt="">
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
                        @click.stop="removeFavorite(item)">
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
      <!-- <SectionOnSale /> -->
    </div>
  </div>
  <!-- <SectionBanner :info="SectionCouponBanner" /> -->
  <Footer />
</template>

<script>
import emitter from '@/methods/emitter'
import Footer from '@/components/Footer'
export default {
  data () {
    return {
      favorite: [],
      isLoading: false,
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled(配合v-if做提示效果)
        loadingItem: ''
      }
    }
  },
  components: {
    Footer
  },
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
    },
    removeFavorite (item) {
      console.log('我的最愛列表', this.favorite)
      console.log('點到的是第幾筆資料', this.favorite.indexOf(item))
      this.favorite.splice(this.favorite.indexOf(item), 1)
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
      this.getFavorite()
      emitter.emit('update-favorite') // 傳送到UserNavbar
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
    getProduct (id) {
      console.log(id)
      this.$router.push(`/user/product/${id}`)
    }
  },
  created () {
    this.getFavorite()
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
  cursor: pointer;
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
