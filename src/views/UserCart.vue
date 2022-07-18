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
             <th style="width: 200px">品名</th>
             <th style="width: 200px">圖片</th>
             <th style="width: 80px">單價</th>
             <th style="width: 80px">數量</th>
             <th style="width: 250px" class="text-end">總價</th>
           </tr>
         </thead>
         <tbody>
         <template v-if="cart.carts">
           <tr v-for="item in cart.carts" :key="item.id">
             <td>
               <button type="button" class="btn btn-outline-primary btn-sm"
                       :disabled="status.loadingItem === item.id"
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
                       :disabled="item.id === status.loadingItem"
                       @change="updateCart(item)"
                       v-model.number="item.qty">
               </div>
             </td>
             <td class="text-end">
               <div v-if="item.final_total === item.total" class="fs-3">
                   NT$ {{ $filters.currency(item.final_total) }}
               </div>
               <div v-if="item.final_total !== item.total" class="fs-3">
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
           <button class="btn btn-outline-secondary fw-bold btn-lg" type="button" @click="addCouponCode">
             套用優惠碼
           </button>
         </div>
       </div>
       <!-- 另外寫函式處理 -->
       <!-- <div v-for="item in cart.carts" :key="item.id">
           已使用優惠碼：{{item.coupon.code}}
       </div> -->
       <!-- 另外寫函式處理 -->
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
import emitter from '@/methods/emitter'
import UserFooter from '@/components/UserFooter.vue'
export default {
  components: {
    UserFooter
  },
  data () {
    return {
      products: [],
      product: {},
      status: {
        // 對應品項 id 當loadingItem為一個特定品項的時候
        // 我們就會把這個按鈕轉為disabled
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      coupon_code: ''
    }
  },
  inject: ['emitter'],
  methods: {
    goProducts () {
      this.$router.push('/products')
    },
    goCheckout () {
      this.$router.push('/checkout')
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
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
        this.cart = response.data.data
        this.isLoading = false
      })
    },
    // 更改購物車商品數量
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res)
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    removeCartItem (id) {
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
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response.data.message)
        this.$httpMessageState(response, '加入優惠券')
        this.getCart()
        this.isLoading = false
        this.coupon_code = ''
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res)
        })
    }
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
