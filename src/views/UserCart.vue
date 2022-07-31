<template>
  <div class="cartBanner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center mb-0 mt-5">
        <span class="me-2 fs-1 fw-bolder text-white">首購享66折</span>
        <span class="fs-3 text-primary align-self-end">/ 結帳輸入優惠碼：666666</span>
      </h1>
    </div>
  </div>
  <Loading :active="isLoading"></Loading>
  <div class="container my-5">
    <div class="d-flex justify-content-center">
      <h1 class="fs-2 text-center fw-bold">購物清單</h1>
    </div>
    <div class="row mt-4">
      <!-- 購物車列表 -->
      <div class="col">
        <table class="table align-middle">
          <thead class="table-primary">
            <tr>
              <th style="width: 50px">刪除</th>
              <th style="width: 150px">品名</th>
              <th style="width: 100px">圖片</th>
              <th style="width: 80px">單價</th>
              <th style="width: 80px">數量</th>
              <th style="width: 200px" class="text-end">總價</th>
            </tr>
          </thead>
          <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button type="button" class="btn btn-outline-primary btn-sm"
                       :disabled="cartLoadingItem === item.id"
                       @click="removeCartItem(item.id)">
                  <i class="bi bi-x"></i>
                </button>
              </td>
              <td>
                {{ item.product.title }}  /  {{item.product.description }}
                <div class="text-secondary fw-bold" v-if="item.coupon">
                  已套用優惠券 ({{item.final_total / item.total * 100 }}% OFF)<br>
                  代碼：{{item.coupon.code}}
                </div>
              </td>
              <td>
                <img :src="item.product.imageUrl" alt="商品照片" width="50">
              </td>
              <td>
                NT$ {{item.product.price}}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input type="number" class="form-control"
                       min="1"
                       :disabled="item.id === cartLoadingItem"
                       @change="updateCart(item)"
                       v-model.number="item.qty">
                </div>
              </td>
              <td class="text-end">
                <div v-if="item.final_total === item.total" class="fs-5">
                   NT$ {{ $filters.currency(item.final_total) }}
                </div>
                <div v-if="item.final_total !== item.total" class="fs-5">
                  <small class="text-secondary fs-6">
                  優惠券折扣價：
                  </small>
                  NT$ {{ $filters.currency(item.final_total) }}
                </div>
              </td>
            </tr>
          </template>
          </tbody>
          <tfoot>
          <tr v-if="cart.final_total == cart.total">
            <td colspan="7" class="text-end fs-1">
              總計：NT$ {{ $filters.currency(cart.total) }}
            </td>
         </tr>
         <tr v-if="cart.final_total !== cart.total">
           <td colspan="7" class="text-end fs-3">
             <del>總計：NT$ {{ $filters.currency(cart.total) }}</del>
           </td>
         </tr>
         <tr v-if="cart.final_total !== cart.total">
           <td colspan="7" class="text-end text-secondary fw-bold fs-1">
             折扣價：NT$ {{ $filters.currency(cart.final_total) }}
           </td>
         </tr>
         </tfoot>
        </table>

        <div class="input-group mb-3 input-group-sm"
             v-if="cart.total !== 0">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary fw-bold btn-lg" type="button" @click="addCouponCode(coupon_code)">
              套用優惠碼
            </button>
          </div>
        </div>
      <div class="d-flex justify-content-between mt-5"
             v-if="cart.total !== 0">
          <button type="button" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg"
                @click="goProducts">
            <i class="bi bi-caret-left-fill"></i>商品列表
          </button>
          <button type="button" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg"
                  @click="goCheckout">
            填寫資料<i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
        <div class="text-center pt-4"
             v-if="cart.total === 0">
          <h3 class="fw-bold">購物車還沒有任何商品，趕快挑選產品加入購物車 !</h3>
          <button type="button" class="btn btn-dark btn-hover rounded-0 mt-5"
                  @click="goProducts">
            查看產品 Go
          </button>
        </div>
      </div>
    </div>
  </div>
  <UserFooter/>
</template>

<script>
import UserFooter from '@/components/UserFooter.vue'

import { mapState, mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import goStore from '@/stores/goStore'
import couponStore from '@/stores/couponStore'
export default {
  components: {
    UserFooter
  },
  data () {
    return {
      coupon_code: ''
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['cart'])
    // ...mapState(couponStore ['coupon_code']), 為什麼會有問題
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'updateCart', 'removeCartItem']),
    ...mapActions(goStore, ['goProducts', 'goCheckout']),
    ...mapActions(couponStore, ['addCouponCode'])
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.cartBanner {
  height: 300px;
  background-image: url(https://i.imgur.com/6ix9eOm.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
}
</style>
