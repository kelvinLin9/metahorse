<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="text-warning f-kalam fs-2 text-center">MetaHorse</span>
        <img src="https://i.imgur.com/61qkafr.jpg" alt="logo" width="50" class="logo">
      </a>
      <!-- 漢堡選單按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
           <RouterLink to="/" class="nav-link fs-5"
           :class="{ 'text-warning':  routeName === 'home' }">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <router-link to="/user/products" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === 'products' }">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/checkOrder" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === 'CheckOrder' }">訂單查詢</router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/user/cart" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === 'cart' }">購物車</router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/user/Favorite" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === 'favorite' }">我的最愛</router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/login" class="nav-link fs-5"
            :class="{ 'text-warning':  routeName === '/login' }">使用者介面</router-link>
          </li>
        </ul>

        <!-- 購物車、最愛、使用者介面改成靠右圖示 -->
        <ul class="d-none d-lg-flex navbar-nav ms-auto me-2">
          <li class="nav-item position-relative">
            <router-link to="" class="nav-link px-3"
            :class="{ 'text-warning':  routeName === 'cart' }"
            @click.prevent="cartBoxToggle">
              <i class="bi bi-cart3 fs-4 cart" data-bs-toggle="tooltip" data-bs-placement="top" title="購物車"></i>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num"
                    v-if="cartNum !== 0">
                {{ cartNum }}
              </div>
            </router-link>
          </li>
          <!-- 購物車小視窗 -->
          <div class="dropdown-menu cart-box p-3"
              :class="{ 'show': cartBoxState }">
            <h5 class="fw-bold" v-if="cartNum>0">已選購商品</h5>
            <div class="table-responsive-md">
              <table class="table table-sm">
                <thead class="table-dark">
                  <tr class="table-nowrap text-center">
                    <th class="text-start">商品名稱</th>
                    <th>數量</th>
                    <th class="text-end">價格</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                    <td>{{ item.product.title }}</td>
                    <td class="text-center">{{ item.qty }}</td>
                    <td class="text-end">NT$ {{ $filters.currency(item.total) }}</td>
                    <td class="text-center">
                      <button type="button" class="btn btn-outline-primary btn-sm"
                          :disabled="status.loadingItem === item.id"
                          @click="removeCartItem(item.id)">
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h5 class="fw-bold text-center mb-3" v-if="cartNum == 0">產品尚未加入購物車!</h5>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-dark btn-hover rounded-0"
              @click="goCart"
              v-if="cartNum > 0">
                <font-awesome-icon icon="fa-solid fa-cash-register" />
                <i class="fas fa-shopping-cart"></i> 結帳去
              </button>
              <button type="button" class="btn btn-dark btn-hover rounded-0" @click="goProducts" v-else>

                <font-awesome-icon icon="fa-solid fa-basket-shopping" /> 選購去
              </button>
            </div>
          </div>

          <li class="nav-item position-relative">
            <RouterLink to="/user/Favorite" class="nav-link px-3"
            :class="{ 'text-warning':  routeName === 'favorite' }">
              <i class="bi bi-search-heart fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="我的最愛"></i>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num"
                    v-if="favoriteNum != 0">
                {{ favoriteNum }}
              </div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link px-3"
            :class="{ 'text-warning':  routeName === '/login' }">
              <i class="bi bi-person-workspace fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="管理員登入"></i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/methods/emitter'
// 響應式行為會使用到折疊的 JavaScript 插件
import 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      // isCollapse: false, // 用不到
      routeName: '',
      favoriteNum: 0,
      cartNum: 0,
      cart: {},
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled
        loadingItem: ''
      },
      cartBoxState: false // 控制購物車小視窗開關
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        // console.log('getCart(res)', res)
        this.cartNum = res.data.data.carts.length
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    // 取得我的最愛筆數
    getFavorite () {
      this.favoriteNum = (JSON.parse(localStorage.getItem('favorite')) || []).length
    },
    goCart () {
      this.$router.push('/user/cart')
      this.cartBoxState = false
    },
    goProducts () {
      this.$router.push('/user/products')
      this.cartBoxState = false
    },
    removeCartItem (id) {
      console.log(id)
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項')
        this.status.loadingItem = ''
        this.getCart()
        this.isLoading = false
        emitter.emit('update-cart')
      })
    },
    cartBoxToggle () {
      this.cartBoxState = !this.cartBoxState
      emitter.emit('cartBoxState', this.cartBoxState)
    }
  },
  created () {
    this.getCart()
    this.getFavorite()
  },
  mounted () {
    // this.routeName = this.$route.name // 點擊後圖標變色
    // console.log('this.routeName', this.routeName)
    // console.log('this.status', this.status)
    // 接收資料
    emitter.on('update-cart', () => {
      this.getCart()
    })
    emitter.on('update-favorite', () => {
      this.getFavorite()
    })
  }
}
</script>

<style lang="scss" scoped>
.f-kalam {
  font-family: 'Kalam', cursive;
}
.num{
  width:20px;
  top: 5px;
  right: 5px;
  font-size: 12px;
}
/* 購物車按鈕 */
.cart {
  background-color: transparent;
  position: relative;
}
/* 購物車按鈕定位 */
.cart-box{
  min-width: 450px;
  position: absolute;
  right: 1px;
  top: 60px;
}
.logo {
  position: absolute;
  left: 165px;
  top: 10px;
}
@media (max-width: 768px) {
  .nav{
    z-index: 1;
  }
  .cart-box{
    min-width: 340px;
  }
  .logo {
   position: absolute;
   left: 145px;
  }
}
@media (max-width: 576px) {
  .logo {
   position: absolute;
   left: 140px;
  }
}
</style>
