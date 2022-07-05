<template>
    <section class="my-5">
        <div class="text-center py-5">
            拿來放圖的地方
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h2 class="fw-bold ps-lg-3 text-center text-lg-start f-kalam">Level</h2>
                    <div class="fw-bold list-group list-group-flush bg-none flex-row flex-lg-column ">
                        <a href="#" class="list-group-item  list-group-item-action bg-lightpaper border-0 design-text" @click.prevent="category = 'all'">- All</a>
                        <a href="#" class="list-group-item list-group-item-action bg-lightpaper border-0 design-text" @click.prevent="category = 'S'">- S</a>
                        <a href="#" class="list-group-item list-group-item-action bg-lightpaper border-0 design-text" @click.prevent="category = 'A'">- A</a>
                        <a href="#" class="list-group-item list-group-item-action bg-lightpaper border-0 design-text" @click.prevent="category = 'B'">- B</a>
                        <a href="#" class="list-group-item list-group-item-action bg-lightpaper border-0 design-text" @click.prevent="category = 'C'">- C</a>
                    </div>
                </div>
                <div class="col-lg-9">
                  <div class="row g-4">
                    <div class="col-lg-4 col-md-6 col-10"
                          v-for="item in filterProducts" :key="item.id">
                      <div class="card all-hover border-0 rounded-3">
                          <div class="card-img">
                            <a href="#">
                              <img class="img-fluid rounded-3
                              " :src="item.imageUrl" alt=""
                              @click.prevent="getProduct(item.id)">
                            </a>
                          </div>
                          <div class="card-body">
                              <h5 class="card-text">{{ item.title }}</h5>
                              <p class="card-text">{{ item.description }}</p>
                              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                          </div>
                          <div class="btn-group btn-group-sm">
                            <button type="button" class="btn btn-outline-secondary"
                                    @click="getProduct(item.id)">
                              商品資訊
                            </button>
                            <!-- 按下特定id按鈕之後先disabled，運行完之後再開放，避免重複點擊 -->
                            <button type="button" class="btn btn-outline-danger"
                                    :disabled="this.status.loadingItem === item.id"
                                    @click="addCart(item.id)">
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
    </section>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      favorite: [],
      favoriteIds: [],
      category: 'all',
      isLoading: false,
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled(配合v-if做提示效果)
        loadingItem: ''
      }
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        console.log('products:', response)
        this.isLoading = false
      })
    },
    getProduct (id) {
      // 使用this.$router進入特定頁面
      // 進入單一頁面之後，重新取的遠端資料
      this.$router.push(`/user/product/${id}`)
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
          console.log(res)
          this.getCart()
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response)
        // 包含陣列列表、總金額
        this.cart = response.data.data
        this.isLoading = false
      })
    }
  },
  computed: {
    filterProducts () {
      let filterProducts
      switch (this.category) {
        case 'all':
          filterProducts = this.products.filter((item) => {
            return item
          })
          break
        case 'S':
          filterProducts = this.products.filter((item) => {
            return item.category === 'S'
          })
          break
        case 'A':
          filterProducts = this.products.filter((item) => {
            return item.category === 'A'
          })
          break
        case 'B':
          filterProducts = this.products.filter((item) => {
            return item.category === 'B'
          })
          break
        case 'C':
          filterProducts = this.products.filter((item) => {
            return item.category === 'C'
          })
          break
      }
      return filterProducts
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>

</style>