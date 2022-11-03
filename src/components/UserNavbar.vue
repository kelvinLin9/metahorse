<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark no-print">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span class="text-warning f-kalam fs-2 text-center">MetaHorse</span>
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490927331.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZMQ6vOwjCgcPZNVwcyYK8LMN5koHVFmYYrchE8TwG0EXn64m4cQSrpVuY2A%2BML%2BvP8tQ9YrFRjAcTVr%2BMvB1ku3hA2AIma%2FDoybnYVRGT5ESCrq%2FXYuVKILUH8GmJLc4j7Wtnyh3Ai8rcEuiGp%2BWw%2Bi9lmMAQksyFruCvbYOAA58yy%2F3pvNM4ta1TAhSOZjAx6ngIUwS8cfmHaETVeKQU62sfskvZG3G43hgGZ%2Bz2BjVagCaGHWSpEWupz58evWUovo4s1ASzlLX%2B3BFLH9KcAvYPJfFfapPLT9sGBwk9MrUoYtfLAOxc%2F8s4BlnP%2FhNaglAlQiuNiuMrGbN0SMUkA%3D%3D" alt="logo" width="50" class="logo">
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
            :class="{ 'text-warning':  $route.name === 'home' }">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link fs-5"
            :class="{ 'text-warning':  $route.name === 'products' }">產品列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/UserCoupon" class="nav-link fs-5"
            :class="{ 'text-warning':  $route.name === 'UserCoupon' }">優惠活動</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/UserSearchOrder" class="nav-link fs-5"
            :class="{ 'text-warning':  $route.name === 'UserSearchOrder' }">訂單查詢</RouterLink>
          </li>
          <li class="nav-item d-block d-lg-none">
            <RouterLink to="/cart" class="nav-link fs-5"
            :class="{ 'text-warning':  $route.name === 'cart' }">購物車</RouterLink>
          </li>
          <li class="nav-item d-block d-lg-none">
            <RouterLink to="/favorite" class="nav-link fs-5"
            :class="{ 'text-warning':  $route.name === 'favorite' }">我的最愛</RouterLink>
          </li>
        </ul>
        <!-- 購物車、最愛、使用者介面改成靠右圖示 -->
        <ul class="navbar-nav d-none d-lg-flex ms-auto me-2">
          <li class="nav-item position-relative">
            <div class="nav-link px-3"
                :class="{ 'text-warning':  $route.name === 'cart' }"
                @click="cartBoxToggle">
              <i class="bi bi-cart3 fs-4 cart" data-bs-toggle="tooltip" data-bs-placement="top" title="購物車"></i>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num"
                    v-if="cartNum !== 0">
                {{ cartNum }}
              </div>
            </div>
          </li>
          <!-- 購物車小視窗 -->
          <div class="dropdown-menu cart-box p-3 overflow-auto"
              :class="{ 'show': cartBoxState }">
            <h5 class="fw-bold" v-if="cartNum>0">已選購商品</h5>
            <div class="table-responsive-md he">
              <table class="table table-sm">
                <thead class="table-dark">
                  <tr class="table-nowrap text-center">
                    <th class="text-start">商品名稱</th>
                    <th style="width:70px">數量</th>
                    <th class="text-end">價格</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                    <td>{{ item.product.title }}</td>
                    <td>
                      <div class="input-group input-group-sm">
                      <input type="number" class="form-control fs-7"
                            min="1"
                            :disabled="item.id === cartLoadingItem"
                            @change="updateCart(item)"
                            v-model.number="item.qty"
                            @input="item.qty = Number($event.target.value.replace(/^(0+)|[^\d]+/g, '')) || 1">
                      </div>
                    </td>
                    <td class="text-end">
                      <small class="fs-7">
                        NT$
                      </small>
                      {{ $filters.currency(item.total) }}
                    </td>
                    <td class="text-center">
                      <button type="button" class="btn btn-outline-primary btn-sm"
                          :disabled="cartLoadingItem === item.id"
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
              <RouterLink to="/cart" class="btn btn-dark btn-hover rounded-0"
                          @click="cartBoxToggle"
                          v-if="cartNum > 0">
                <FontAwesomeIcon icon="fa-solid fa-cash-register" /> 結帳去
              </RouterLink>
              <RouterLink to="/products" class="btn btn-dark btn-hover rounded-0"
                          @click="cartBoxToggle"
                          v-else>
                <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> 選購去
              </RouterLink>
            </div>
          </div>
          <li class="nav-item position-relative">
            <RouterLink to="/Favorite" class="nav-link px-3"
            :class="{ 'text-warning':  $route.name === 'favorite' }">
              <i class="bi bi-search-heart fs-4" data-bs-toggle="tooltip" data-bs-placement="top" title="我的最愛"></i>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num"
                    v-if="favoriteNum != 0">
                {{ favoriteNum }}
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import statusStore from '@/stores/statusStore'
import favoriteStore from '@/stores/favoriteStore'
import goStore from '@/stores/goStore'

export default {
  computed: {
    ...mapState(cartStore, ['cart', 'cartNum', 'cartBoxState', 'updateCart']),
    ...mapState(favoriteStore, ['favoriteNum']),
    ...mapState(statusStore, ['cartLoadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'removeCartItem', 'cartBoxToggle']),
    ...mapActions(goStore, ['goCart', 'goProducts'])
  }
}
</script>

<style lang="scss" scoped>
.num {
  width:20px;
  top: 5px;
  right: 5px;
  font-size: 12px;
}
/* 小購物車框 */
.cart-box{
  min-width: 450px;
  max-height: 400px;
  position: absolute;
  right: 1px;
  top: 60px;
}
.logo {
  position: absolute;
  left: 165px;
  top: 10px;
  @media (max-width: 768px) {
    left: 145px;
  }
  @media (max-width: 576px) {
    left: 137px;
  }
  @media (max-width: 414px) {
    left: 130px;
  }
}
</style>
