<template>
  <UserCheckoutBar/>
  <div class="container">
    <div class="my-3 row justify-content-center flex-sm-row-reverse">
      <!-- 商品明細 -->
      <div class="col-md-6 mt-5 mt-md-0">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 text-center fw-bold">購物清單</h1>
        </div>
        <div class="table-responsive-md mt-4">
           <table class="table lh-lg">
            <thead class="table-primary">
              <tr class="table-nowrap">
                <th class="text-start">商品名稱</th>
                  <th>數量</th>
                  <th class="text-end">價格</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap text-start" v-for="item in cart.carts" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end">
                    <div class="text-strong">
                      NT$ {{ $filters.currency(item.final_total) }} 元
                    </div>
                  </td>
                </tr>
               </tbody>
               <tfoot class="text-center table-primary">
                 <tr>
                  <td colspan="3" class="text-end fs-4">
                    總計 :NT$ {{ $filters.currency(cart.final_total) }} 元
                  </td>
                 </tr>
                 </tfoot>
             </table>
           </div>
      </div>
      <v-form class="col-md-6" v-slot="{ errors }"
              @submit="gotoPay">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 fw-bold">收件人資訊</h1>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold fs-5 ">Email：</label>
          <v-field id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="form.user.email">
          </v-field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label fw-bold fs-5">收件人姓名：</label>
          <v-field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name">
          </v-field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label fw-bold fs-5">收件人電話：</label>
          <v-field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel">
          </v-field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label fw-bold fs-5">收件人地址：</label>
          <v-field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address">
          </v-field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fw-bold fs-5">留言：</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <button type="button" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg"
          @click.prevent="goCart">
          <i class="bi bi-caret-left-fill"></i>回購物車
          </button>
          <button type="submit" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg">
            付款去<i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import UserCheckoutBar from '@/components/UserCheckoutBar.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import goStore from '@/stores/goStore'
export default {
  components: {
    UserCheckoutBar
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(cartStore, ['cart', 'cartNum', 'gotoPay']),
    ...mapWritableState(cartStore, ['form'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(goStore, ['goCart']),
    ...mapActions(cartStore, ['getCart'])
  }
}
</script>
