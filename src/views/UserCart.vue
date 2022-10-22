<template>
  <UserCheckoutBar/>
  <div class="container py-3"
      v-if="cart.total === 0">
    <div class="text-center pt-4">
      <h3 class="fw-bold">購物車還沒有任何商品，趕快挑選產品加入購物車 !</h3>
      <button type="button" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg mt-5"
              @click="goProducts">
        商品列表
      </button>
    </div>
  </div>
  <div class="container py-3"
      v-if="cart.total !== 0">
    <div class="d-flex justify-content-center">
      <h1 class="fs-2 text-center fw-bold">購物清單</h1>
    </div>
    <div class="row mt-2 justify-content-center">
      <!-- 購物車列表 -->
      <div class="col-lg-9 col-xl-8">
        <table class="table align-middle table-hover">
          <thead class="table-primary">
            <tr>
              <th>刪除</th>
              <th class="d-none d-sm-block">圖片</th>
              <th>品名</th>
              <th class="d-none d-md-block">單價</th>
              <th style="width:60px">數量</th>
              <th>總價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button type="button" class="btn text-primary fs-3"
                          :disabled="cartLoadingItem === item.id"
                          @click="removeCartItem(item.id)">
                    <FontAwesomeIcon icon="fa-solid fa-trash-can"/>
                  </button>
                </td>
                <td class="d-none d-sm-table-cell">
                  <img :src="item.product.imageUrl" alt="商品照片" width="80">
                </td>
                <td class="fs-title">
                  {{ item.product.title }}<br>
                </td>
                <td class="d-none d-md-table-cell">
                  <small class="fs-7">
                    NT$
                  </small>
                    {{ item.product.price }}
                </td>
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
                <td class="fs-6">
                  <div v-if="item.final_total === item.total">
                                      <small class="fs-7">
                    NT$
                  </small>
                    NT$ {{ $filters.currency(item.final_total) }}
                  </div>
                  <div v-if="item.final_total !== item.total">
                    <small class="fs-7">
                      NT$
                    </small>
                    {{ $filters.currency(item.final_total) }}
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
          <tr v-if="cart.final_total === cart.total">
            <td colspan="7" class="text-end fs-4">
              總計：
              <small>
                NT$
              </small>
              {{ $filters.currency(cart.total) }}
            </td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="7" class="text-end fs-5">
              <del>總計：
                NT$ {{ $filters.currency(cart.total) }}</del>
            </td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="7" class="text-end text-secondary fw-bold fs-3">
              折扣價：
              <small>
                NT$
              </small>
              {{ $filters.currency(cart.final_total) }}
            </td>
          </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3"
              v-if="cart.total !== 0">
          <input type="text" class="form-control" placeholder="請輸入優惠碼" aria-label="請輸入優惠碼" aria-describedby="button-addon"
                  v-model="coupon_code">
          <button class="btn btn-outline-secondary fw-bold btn-lg" type="button" id="button-addon"
                  @click="addCouponCode(coupon_code)">
            套用優惠碼
          </button>
        </div>
        <div class="text-end"
            v-if="(cart.total < 30000 && cart.final_total === cart.total)">
          還差
          <span class="fs-3">{{ `${30000 - cart.total}` }}</span>
          元即可參加抽獎
        </div>
        <div class="text-end"
            v-if="(cart.total < 30000 && cart.final_total !== cart.total)">
          還差
          <span class="fs-3">{{ `${30000 - cart.final_total}` }}</span>
          元即可參加抽獎
        </div>
        <div class="d-flex justify-content-between mt-3"
            v-if="cart.total !== 0">
          <button type="button" class="btn btn-outline-primary btn-hover rounded-0 fw-bold btn-lg text-dark"
                  @click="goProducts">
            <i class="bi bi-caret-left-fill"></i>商品列表
          </button>
          <button type="button" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg "
                  @click="goCheckout">
            填寫資料<i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCheckoutBar from '@/components/UserCheckoutBar.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import goStore from '@/stores/goStore'
import couponStore from '@/stores/couponStore'

export default {
  components: {
    UserCheckoutBar
  },
  computed: {
    ...mapState(statusStore, ['cartLoadingItem']),
    ...mapState(cartStore, ['cart']),
    ...mapWritableState(couponStore, ['coupon_code'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'updateCart', 'removeCartItem']),
    ...mapActions(goStore, ['goProducts', 'goCheckout']),
    ...mapActions(couponStore, ['addCouponCode'])
  }
}
</script>

<style lang="scss" scoped>
.fs-title {
  font-size: 16px;
  @media (max-width: 576px) {
  font-size: 14px;
  }
}
</style>
