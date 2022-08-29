<template>
  <Loading :active="isLoading"></Loading>
<div class="container main">
  <div class="border-bottom sticky-top bg-white menu-btn">
    <a href="#" id="toggle-btn" class="px-3 py-2 border-end d-inline-block">
      <i class="bi bi-arrows-angle-expand"></i>
    </a>
  </div>
  <div class="p-4">
    <!-- 統計資料 -->
    <div class="row gy-3 mb-4">
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body text-end text-nowrap">
            <h2 class="display-6">在線人數</h2>
            <p class="display-4">3,456</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body text-end text-nowrap">
            <h2 class="display-6">訂單數</h2>
            <p class="display-4">1,092</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body text-end text-nowrap">
            <h2 class="display-6">營業額</h2>
            <p class="display-4"><span class="fs-4">NT$</span>142,456</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 統計圖表 -->
    <div class="row gy-3 mb-4">
      <div class="col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <canvas id="pie-chart" class="img-fluid"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <canvas id="bar-chart" class="img-fluid"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- 訂單資料 -->
    <div class="card shadow-sm">
      <div class="card-title py-2 mb-0">
        <div class="input-group mb-0">
          <span class="input-group-text bg-white border-0 ps-3 pe-1">
            <i class="bi bi-search"></i>
          </span>
          <input type="text" 
          class="form-control shadow-none border-0" 
          placeholder="search">
        </div>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0 text-nowrap">
            <thead class="bg-light border-bottom-3 fw-bold">
              <tr class="align-middle">
                <th scope="col" class="ps-3 py-3">訂單編號</th>
                <th scope="col">Email</th>
                <th scope="col">用戶姓名</th>
                <th scope="col">購買品項</th>
                <th scope="col">付款狀態</th>
                <th scope="col">購買金額</th>
                <th scope="col" class="pe-3">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr class="align-middle">
                <td scope="row">TX123456788</td>
                <td>ab1234@email.com</td>
                <td>卡小伯</td>
                <td>六角西餐：大麥克全家餐</td>
                <td class="text-danger">尚未付款</td>
                <td class="text-end pe-3">900</td>
                <td>
                  <a href="#" class="btn btn-outline-dark">
                    編輯<i class="bi bi-pencil-square"></i>
                  </a>
                </td>
              </tr>
              <tr class="align-middle">
                <td scope="row">TX123456788</td>
                <td>ab1234@email.com</td>
                <td>卡小伯</td>
                <td>六角西餐：大麥克全家餐</td>
                <td class="text-danger">尚未付款</td>
                <td class="text-end pe-3">900</td>
                <td>
                  <a href="#" class="btn btn-outline-dark">
                    編輯<i class="bi bi-pencil-square"></i>
                  </a>
                </td>
              </tr>
              <tr class="align-middle">
                <td scope="row">TX123456788</td>
                <td>ab1234@email.com</td>
                <td>卡小伯</td>
                <td>六角西餐：大麥克全家餐</td>
                <td class="text-danger">尚未付款</td>
                <td class="text-end pe-3">900</td>
                <td>
                  <a href="#" class="btn btn-outline-dark">
                    編輯<i class="bi bi-pencil-square"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer bg-white">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end mb-0">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>



</template>

<script>
import ProductModal from '@/components/admin/ProductModal.vue'
import Pagination from '@/components/admin/Pagination.vue'
import DelModal from '@/components/admin/DelModal.vue'

export default {
  data () {
    return {
      products: [], // 所有產品資訊
      pagination: {}, // 分頁資訊
      // 先傳給ProductModal，ProductModal接收後儲存起來
      tempProduct: {}, // 主要為了編輯
      isNew: false, // 是否新增
      isLoading: false
    }
  },
  // 區域註冊
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  methods: {
    // 在生命週期觸發
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      // 不需要加入資料 get(路徑)就可以了
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          console.log(1, res.data)
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    },
    // 新增(isNew)，tempProduct清空
    // 編輯(!isNew)，tempProduct = item
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    // 把外層資料儲存下來，再傳送到遠端
    updateProduct (item) {
      // console.log(item)
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response)
        productComponent.hideModal()
        if (response.data.success) {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: response.data.message.join('、')
          })
        }
      })
    },
    // 開啟刪除 Modal
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((response) => {
        console.log(response.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped>

</style>