<template>
  <Loading :active="isLoading"></Loading>
  <div class="my-5 row justify-content-center">
    <div class="d-flex justify-content-center">
      <h1 class="fs-2 text-center fw-bold">購物明細</h1>
    </div>
    <form class="col-md-4" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead class="table-primary">
        <th>品名</th>
        <th>數量</th>
        <th class="text-end">單價</th>
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

      <table class="table">
        <tbody>
        <tr>
          <th width="100" class="fw-bold">訂單編號 :</th>
          <td>{{ order.id }}</td>
        </tr>
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
      <div class="text-center">
        <button class="btn btn-primary btn-hover rounded-0 fw-bold btn-lg"
        @click="showAlert"
        >
          確認付款
        </button>
      </div>
    </form>
  </div>
</template>

<script>
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
  methods: {
    showAlert () {
      this.$swal.fire(
        '感謝您的支持',
        '產品將會在3個工作天內寄出',
        'success'
      )
      this.goHome()
    },
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
            console.log(this.order)
          }
        })
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
    },
    goHome () {
      this.$router.push('/')
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    this.getOrder()
  }
}
</script>
