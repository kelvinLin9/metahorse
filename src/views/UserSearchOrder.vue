<template>
  <div class="searchBanner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center">
        <span class="me-2 fs-1 fw-bolder text-white">訂單查詢</span>
        <span class="fs-4 text-primary align-self-end">/ Search Order</span>
      </h1>
    </div>
  </div>
  <div class="container py-5">
    <h1 class="fs-2 text-center fw-bold">請輸入20碼訂單編號</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <div class="input-group mt-3 mb-1">
          <input type="text" class="form-control" placeholder="輸入訂單編號" v-model="orderId">
          <button class="btn btn-dark btn-hover rounded-0" type="button"
                  @click="getOrder">送出
          </button>
        </div>
        <span class="text-success" v-if="statusGet">*取得此訂單</span>
        <span class="text-danger" v-if="statusNotGet">*查無此訂單</span>
        <div v-if="order.total">
          <h2 class="fs-2 text-center fw-bold mt-5">運送狀況</h2>
          <div class="d-flex justify-content-center align-items-center mt-5">
            <h5 class="fw-bold mb-0 text-warning">訂單成立</h5>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" class="fs-5 mx-3" />
            <h5 class="fw-bold mb-0 text-black-50 active">訂單處理中</h5>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" class="fs-5 mx-3" />
            <h5 class="text-black-50 fw-bold mb-0">出貨中</h5>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" class="fs-5 mx-3" />
            <h5 class="text-black-50 fw-bold mb-0 ">完成出貨(2~3天)</h5>
          </div>
          <h2 class="fs-2 text-center fw-bold mt-5">寄送明細</h2>
          <div class="table-responsive-md">
            <table class="table lh-lg">
              <tbody>
                <tr class="table-nowrap">
                  <th width="150" class="fw-bold text-end">訂單編號 :</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th width="100" class="fw-bold text-end">訂購日期 :</th>
                  <td>{{ $filters.date(order.create_at) }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th width="100" class="fw-bold text-end">Email :</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">姓名 :</td>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">收件人電話 :</td>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">收件人地址 :</td>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr class="table-nowrap">
                  <td width="100" class="fw-bold text-end">付款狀態 :</td>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-strong">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="fs-2 text-center fw-bold mt-5">商品明細</h2>
          <div class="table-responsive-md mt-4">
            <table class="table lh-lg">
              <thead class="table-dark text-center">
                <tr class="table-nowrap">
                  <th>商品名稱</th>
                  <th>數量</th>
                  <th width="200" class="text-end">價格</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in order.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end">NT$ {{ $filters.currency(item.final_total) }} 元</td>
                </tr>
              </tbody>
              <tfoot class="text-center">
                <tr>
                  <td colspan="2" class="text-end">總價 :</td>
                  <td class="text-end">NT$ {{ $filters.currency(order.total) }} 元</td>
                </tr>
                </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      orderId: '',
      order: {
        user: {}
      },
      statusGet: false,
      statusNotGet: false
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.order) {
          this.statusGet = true
          this.statusNotGet = false
          this.order = response.data.order
          this.isLoading = false
        } else {
          this.order = { user: {} }
          this.statusNotGet = true
          this.statusGet = false
          this.isLoading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBanner {
  height: 250px;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kelvinlin9/1666490670322.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oaa98PqXIN0nT87os0YMBVRwLaV9f%2BuE%2BAXTLEAmukKoimASC0m9StjhanYa2t1n6Fm2gOAKepx9SRe3aipyOD47SJJMLyoF15RomAO%2BSqKlltO%2FP5f5dBhU2DDP7IbZcjhMH7rrz229Mr9aPjQZb3hZ2PytDvUXv3ztQqstcQVmc%2FDKZhsMqzVPfS1eIxqDUkFqbba8GaFd%2FyfAl3GCskMyANaR%2BfQX4e7uVjuFuVGyfHrldUyMeglMT1wHMXXfSfKMm%2FtQpWrQU%2BY3zGcwZ9v2TrhHxmSVAZYlRc3M9TfeuY%2BtdCnByYffk64dVYQt%2FFjxSzdOdOn%2FgzqTT8gxHA%3D%3D);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center ;
  @media (max-width: 600px) {
    height: 150px;
  }
  .bg-dark{
    opacity: 0.8;
  }
}
</style>
