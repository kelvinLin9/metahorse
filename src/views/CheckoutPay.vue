<template>
  <UserCheckoutBar/>
  <div class="container">
    <div class="py-5 row justify-content-center">
      <h1 class="fs-2 text-center fw-bold">購物明細</h1>
      <form class="col-10" @submit.prevent="payOrder">
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
              NT$ {{ $filters.currency(item.final_total) }} 元
            </td>
          </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end fs-4">
                總計 :NT$ {{ $filters.currency(order.total) }} 元
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="card">
          <h5 class="card-header">訂單編號 :</h5>
          <div class="card-body">
            <p class="card-text" id="orderId">{{ order.id }}</p>
            <a href="#" class="btn btn-primary btn-sm"
              @click.prevent="copyCodeOld('orderId')">
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
          <button class="btn btn-secondary btn-hover rounded-0 fw-bold"
                  @click.prevent="printWindow">
            列印此頁
          </button>
          <button class="btn btn-primary btn-hover rounded-0 fw-bold"
                  @click.prevent="showAlert()">
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
import { mapActions } from 'pinia'
import copyStore from '@/stores/copyStore'
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  components: {
    UserCheckoutBar,
    GameModal
  },
  methods: {
    ...mapActions(copyStore, ['copyCodeOld']),
    showAlert () {
      // console.log(this.order.total)
      if (this.order.total > 30000) {
        this.$swal.fire({
          title: '感謝您的支持',
          text: '產品將會在3個工作天內寄出',
          icon: 'success',
          allowOutsideClick: false,
          confirmButtonText: '開始滿額小遊戲'
        }).then((result) => {
          this.$refs.GameModal.showModal()
        })
      } else {
        this.$swal.fire({
          title: '感謝您的支持',
          text: '產品將會在3個工作天內寄出',
          icon: 'success',
          confirmButtonText: '回首頁'
        }).then((result) => {
          this.$router.push('/')
        })
      }
    },
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
            // console.log(this.order)
          }
        })
        .catch((err) => console.error(err))
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.getOrder()
          }
        })
        .catch((err) => console.error(err))
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
