<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="my-5 row justify-content-center">
      <Form class="col-md-6" v-slot="{ errors }"
              @submit="goPay">
        <div class="d-flex justify-content-center">
          <h1 class="fs-2 text-center fw-bold">收件人資訊</h1>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold fs-5 ">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label fw-bold fs-5">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label fw-bold fs-5">收件人電話</label>
          <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label fw-bold fs-5">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fw-bold fs-5">留言</label>
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
      </Form>
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
                <tr class="table-nowrap text-start" v-for="item in carts" :key="item.id">
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
                    總計 :NT$ {{ $filters.currency(final_total) }} 元
                  </td>
                 </tr>
                 </tfoot>
             </table>
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
  components: {
    UserFooter
  },
  data () {
    return {
      isLoading: false,
      carts: [],
      total: 0,
      final_total: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.carts = response.data.data.carts
          this.total = response.data.data.total
          this.final_total = response.data.data.final_total
          this.isLoading = false
        }
      })
    },
    goPay () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
          this.$router.push(`/checkoutPay/${res.data.orderId}`)
          emitter.emit('update-cart')
        })
    },
    goCart () {
      this.$router.push('/cart')
    }
  },
  created () {
    this.getCart()
  }
}
</script>
