<template>
    <section class="my-5">
        <div class="text-center py-5">
            拿來放圖的地方
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h2 class="fw-bold text-center f-kalam bg-primary">賽馬( Level )</h2>
                    <div class="fw-bold list-group flex-row flex-lg-column ">
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == 'all' ,'fs-4' : category == 'all'}"
                          @click.prevent="category = 'all'">- All</a>
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == 'S' ,'fs-4' : category == 'S'}"
                          @click.prevent="category = 'S'">- S</a>
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == 'A' ,'fs-4' : category == 'A'}"
                          @click.prevent="category = 'A'">- A</a>
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == 'B' ,'fs-4' : category == 'B'}"
                          @click.prevent="category = 'B'">- B</a>
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == 'C' ,'fs-4' : category == 'C'}"
                          @click.prevent="category = 'C'">- C</a>
                    </div>
                    <hr>
                    <h2 class="fw-bold text-center f-kalam bg-primary">道具</h2>
                      <div class="fw-bold list-group flex-row flex-lg-column ">
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == '馬鞍' ,'fs-4' : category == '馬鞍'}"
                          @click.prevent="category = '馬鞍'">- 馬鞍</a>
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == '馬蹄鐵' ,'fs-4' : category == '馬蹄鐵'}"
                          @click.prevent="category = '馬蹄鐵'">- 馬蹄鐵</a>
                        <a href="#" class="list-group-item list-group-item-action border-0 f-kalam fs-5"
                          :class="{ 'text-primary' : category == '飼料' ,'fs-4' : category == '飼料'}"
                          @click.prevent="category = '飼料'">- 飼料</a>
                    </div>
                </div>
                <div class="col-lg-9">
                  <div class="row g-4">
                    <div class="col-lg-4 col-md-6 col-10"
                          v-for="item in filterProducts" :key="item.id">
                      <div class="card all-hover border-0 rounded-3">
                          <div class="card-img position-relative">
                            <a href="#">
                              <img class="img-fluid rounded-3"
                                   :src="item.imageUrl" alt=""
                              @click.prevent="getProduct(item.id)">
                            </a>
                            <span class="cursorPointer material-icons position-absolute rounded-circle fs-4 p-2 bbb"
                                  :class="{'favorite': isFavorite(item.id)}"
                                  @click.stop="toggleFavorite(item)">
                                  <i :class="favState(item.id)"
                                     class=""></i>
                            </span>
                          </div>
                          <div class="card-body">
                              <h5 class="card-text">{{ item.title }}</h5>
                              <p class="card-text">{{ item.description }}</p>
                              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                          </div>
                          <div class="btn-group btn-group-sm">
                            <!-- 按下特定id按鈕之後先disabled，運行完之後再開放，避免重複點擊 -->
                            <button type="button" class="btn btn-outline-primary text-dark fw-bold fs-5 "
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
    <Pagination
    :pages="pagination"
    @emit-pages="getProducts"></Pagination>
    <Footer/>
</template>

<script>
import emitter from '@/methods/emitter'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      products: [], // jsonData
      productss: [],
      eachPage: [],
      perPage: 8, // 每頁預設有8筆資料
      page: {
        totalPage: 0, // 總頁數
        currentPage: 1, // 當前頁數
        pageNumBox: [], // 每次只存放的頁碼數(預定5頁)
        hasPage: false, // 上一頁
        hasNext: false // 下一頁
      },
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
  components: {
    Footer
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        console.log('products:', res)
        this.isLoading = false
      })
    },
    pagination (nowPage) { // 製作分頁(分頁元件會回傳點擊到的頁面  )
      this.page.currentPage = nowPage
      console.log(1, nowPage)
      console.log(2, this.filterProducts)
      this.page.totalPage = Math.ceil(this.filterProducts.length / this.perPage) // 總共有 17頁
      this.eachPage = [] // 每次都要清空一次
      // 將currentPage 可能會遇到的情況加以限制
      if (this.page.currentPage < 1) {
        this.page.currentPage = 1
      }
      if (this.page.currentPage > this.page.totalPage) {
        this.page.currentPage = this.page.totalPage
      }
      // 判斷是否有前後頁
      this.page.hasPage = this.page.currentPage > 1
      this.page.hasNext = this.page.currentPage < this.page.totalPage

      // 由前面可知 最小數字為 6 ，所以用答案來回推公式。
      const minData = (this.page.currentPage * this.perPage) - this.perPage + 1 // 每頁第1筆資料 索引值
      const maxData = (this.page.currentPage * this.perPage) // 每頁最後1筆資料 索引值

      // 這邊將會使用 ES6 forEach 做資料處理
      // 首先必須使用索引來判斷資料位子，所以要使用 index
      this.filterProducts.forEach((item, index) => {
        // 獲取陣列索引，但因為索引是從 0 開始所以要 +1。
        const num = index + 1
        // 這邊判斷式會稍微複雜一點
        // 當 num 比 minData 大且又小於 maxData 就push進去新陣列。
        if (num >= minData && num <= maxData) {
          // 將全部資料每20筆寫入至eachPage裡
          this.eachPage.push(item)
        }
      })
      this.showPageBox()
    },
    showPageBox () { // 製作下面頁碼呈現方式
      const pageBox = 5 // 下面頁碼只會顯示五頁
      let startPage = this.page.currentPage - Math.floor(pageBox / 2) // 起始：目前頁數 − (5/2的最大整數＝2)
      let endPage = this.page.currentPage + Math.floor(pageBox / 2) // 結尾：目前頁數 ＋ (5/2的最大整數＝2)
      if (startPage < 1) { // 頁數1，2會套用
        startPage = 1
        endPage = pageBox
      }
      if (endPage > this.page.totalPage) { // 頁數16，17套用
        endPage = this.page.totalPage
        startPage = this.page.totalPage - (pageBox - 1)
      }
      if (this.page.totalPage < 5) { // 如果頁數總長<5，就套用起始頁＝１，結尾頁＝總頁
        startPage = 1
        endPage = this.page.totalPage
      }
      this.page.pageNumBox = [] // 每次都淨空重新渲染一次
      for (let i = startPage; i <= endPage; i++) { // 其餘頁數套用
        this.page.pageNumBox.push(i)
      }
      console.log(this.page.pageNumBox)
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
    },
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
        case '馬鞍':
          filterProducts = this.products.filter((item) => {
            return item.category === '馬鞍'
          })
          break
        case '馬蹄鐵':
          filterProducts = this.products.filter((item) => {
            return item.category === '馬蹄鐵'
          })
          break
        case '飼料':
          filterProducts = this.products.filter((item) => {
            return item.category === '飼料'
          })
          break
      }
      console.log(999, this.filterProducts)
      return filterProducts
    }
  },
  created () {
    this.getProducts()
    this.getFavorite()
    this.pagination(1)
  }
}
</script>

<style lang="scss" scoped>
.bbb {
  color: rgb(230, 103, 235);
  right: 5px;
}
.activee {
  color: rgb(230, 191, 21);
}
// .img-fit{
//   height: 250px;
//   width: 100%;
//   object-fit: cover;
//   transition: .5s;
// }
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
