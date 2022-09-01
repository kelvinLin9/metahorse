<template>
  <!-- <Loading :active="isLoading"></Loading> -->
<div class="container main">
  <div class="border-bottom sticky-top bg-white menu-btn">
      <i class="bi bi-arrows-angle-expand"></i>
  </div>
  <div class="p-4">
    <!-- 統計資料 -->
    <div class="row gy-3 mb-4">
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body text-end text-nowrap">
            <h2 class="display-6">訂單數</h2>
            <p class="display-4">{{ ordersNum }}</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body text-end text-nowrap">
            <h2 class="display-6">營業額</h2>
            <p class="display-4"><span class="fs-4">NT$</span>{{ $filters.currency(revenue) }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 統計圖表 -->
    <div class="row gy-3 mb-4">
      <div class="col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <PieChart/>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <BarChart/>
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
                <th scope="col" class="ps-3 py-3">購買時間</th>
                <th scope="col">訂單編號</th>
                <th scope="col">Email</th>
                <th scope="col">用戶姓名</th>
                <th scope="col">購買品項</th>
                <th scope="col">購買金額</th>
                <th scope="col">付款狀態</th>
                <th scope="col" class="pe-3">編輯 / 刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, key) in orders" :key="key">
                <tr v-if="orders.length"
                    :class="{'text-danger': !item.is_paid}">
                  <td>{{ $filters.date(item.create_at) }}</td>
                  <td>{{ item.id }}</td>
                  <td><span v-text="item.user.email" v-if="item.user"></span></td>
                  <td><span v-text="item.user.name" v-if="item.user"></span></td>
                  <td>
                    <ul class="list-unstyled">
                      <li v-for="(product, i) in item.products" :key="i">
                        {{ product.product.title }} 數量：{{ product.qty }} /
                        {{ product.product.unit }}
                      </li>
                    </ul>
                  </td>
                  <td class="text-right">{{ $filters.currency(item.total) }}</td>
                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                             v-model="item.is_paid"
                             @change="updatePaid(item)">
                      <label class="form-check-label" :for="`paidSwitch${item.id}`">
                        <span v-if="item.is_paid">已付款</span>
                        <span v-else>未付款</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button class="btn btn-outline-primary btn-sm text-dark"
                              @click="openModal(false, item)">檢視</button>
                      <button class="btn btn-outline-danger btn-sm"
                              @click="openDelOrderModal(item)"
                      >刪除</button>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination/>
  </div>
</div>

</template>

<script>
import { mapState, mapActions } from 'pinia'
import chartStore from '@/stores/chartStore'
import ProductModal from '@/components/admin/ProductModal.vue'
import Pagination from '@/components/admin/Pagination.vue'
import DelModal from '@/components/admin/DelModal.vue'
import PieChart from '@/components/admin/PieChart.vue'
import BarChart from '@/components/admin/BarChart.vue'

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination,
    PieChart,
    BarChart
  },
  computed: {
    ...mapState(chartStore, ['orders', 'revenue', 'allOrders', 'ordersNum', 'pagination', '', ''])
  },
  methods: {
    ...mapActions(chartStore, ['getOrders_1', 'getOrders', 'openModal']),
    updatePaid (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false
        this.getOrders(this.pagination.current_page)
        // this.$httpMessageState(response, '更新付款狀態')
      })
    },
  },
  created () {
    this.getOrders_1()
    // this.getProducts()
  }
}
</script>
