<template>
  <UserCheckoutBar/>
  <div class="container">
    <div class="py-3 row justify-content-center flex-sm-row-reverse">
      <div class="col-md-6">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 text-center fw-bold">購物清單</h1>
        </div>
        <div class="table-responsive-md my-4">
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
                    <small class="fs-7">
                      NT$
                    </small>
                    {{ $filters.currency(item.final_total) }} 元
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot class="table-primary">
              <tr>
                <td colspan="3" class="text-end fs-4">
                  總計 :
                  <small class="fs-6">
                    NT$
                  </small>
                  {{ $filters.currency(cart.final_total) }} 元
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <VForm class="col-md-6"
            v-slot="{ errors }"
            @submit="gotoPay">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 fw-bold">收件人資訊</h1>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold fs-5 ">
            Email：
          </label>
          <VField id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="form.user.email">
          </VField>
          <ErrorMessage name="email" class="invalid-feedback"/>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label fw-bold fs-5">
            收件人姓名：
          </label>
          <VField id="name" name="姓名" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required"
                  v-model="form.user.name">
          </VField>
          <ErrorMessage name="姓名" class="invalid-feedback"/>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label fw-bold fs-5">
            收件人電話：
          </label>
          <VField id="tel" name="電話" type="tel" class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話" rules="numeric|min:7|max:10|required"
                  v-model="form.user.tel">
          </VField>
          <ErrorMessage name="電話" class="invalid-feedback"/>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label fw-bold fs-5">
            收件人地址：
          </label>
          <VField id="address" name="地址" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required"
                  v-model="form.user.address">
          </VField>
          <ErrorMessage name="地址" class="invalid-feedback"/>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label fw-bold fs-5">
            留言：
          </label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"/>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <button type="button" class="btn btn-outline-primary btn-hover rounded-0 fw-bold btn-lg text-dark"
          @click="goCart">
            <i class="bi bi-caret-left-fill "></i>回購物車
          </button>
          <button type="submit" class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg">
            付款去<i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<script>
import UserCheckoutBar from '@/components/UserCheckoutBar.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import cartStore from '@/stores/cartStore'
import goStore from '@/stores/goStore'

export default {
  components: {
    UserCheckoutBar
  },
  computed: {
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
