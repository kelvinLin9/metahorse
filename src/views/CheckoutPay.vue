<template>
  <UserCheckoutBar/>
  <div class="container">
    <div class="py-5 row justify-content-center">
      <h1 class="fs-2 text-center fw-bold">購物明細</h1>
      <form class="col-12 col-md-9 col-lg-6 table-responsive" @submit.prevent="payOrder">
        <table class="table align-middle">
          <thead class="table-primary">
            <th>品名</th>
            <th>數量</th>
            <th class="text-end">小計</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}</td>
              <td class="text-end">
                <small class="fs-7">
                  NT$
                </small>
                {{ $filters.currency(item.final_total) }} 元
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end fs-4">
                總計 :
                <small class="fs-6">
                  NT$
                </small>
                {{ $filters.currency(order.total) }} 元
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="card">
          <h5 class="card-header">訂單編號 :</h5>
          <div class="card-body">
            <p class="card-text" id="orderId">{{ order.id }}</p>
            <a href="#" class="btn btn-primary btn-sm"
              @click.prevent="copyCode(order.id)">
              複製訂單編號
            </a>
          </div>
        </div>
        <table class="table">
          <tbody>
          <tr>
            <th width="100" class="fw-bold">訂購日期 :</th>
            <td>{{ $filters.date(order.create_at) }}</td>
          </tr>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="px-3 py-2 d-flex justify-content-between">
          <button type="button"
                  class="btn btn-secondary btn-hover rounded-0 fw-bold"
                  @click="printWindow">
            列印此頁
          </button>
          <button type="button"
                  class="btn btn-primary btn-hover rounded-0 fw-bold"
                  @click="showAlert()">
            確認付款
          </button>
        </div>
      </form>
    </div>
  </div>
  <GameModal ref="GameModal" />
</template>

<script>
import UserCheckoutBar from '@/components/UserCheckoutBar.vue'
import GameModal from '@/components/GameModal.vue'
import { mapState, mapActions, mapWritableState } from 'pinia'
import copyStore from '@/stores/copyStore'
import orderStore from '@/stores/orderStore'

export default {
  components: {
    UserCheckoutBar,
    GameModal
  },
  computed: {
    ...mapWritableState(orderStore, ['orderId']),
    ...mapState(orderStore, ['order'])
  },
  methods: {
    ...mapActions(copyStore, ['copyCode']),
    ...mapActions(orderStore, ['getOrder', 'payOrder']),
    showAlert () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          if (this.order.total > 30000) {
            this.$swal.fire({
              title: '感謝您的支持',
              text: '產品將會在3個工作天內寄出',
              icon: 'success',
              allowOutsideClick: false,
              confirmButtonText: '開始滿額小遊戲'
            }).then(() => {
              this.$refs.GameModal.showModal()
            })
          } else {
            this.$swal.fire({
              title: '感謝您的支持',
              text: '產品將會在3個工作天內寄出',
              icon: 'success',
              confirmButtonText: '繼續購物'
            }).then(() => {
              this.$router.push('/products')
            })
          }
        }
      })
    },
    printWindow () {
      window.print()
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
