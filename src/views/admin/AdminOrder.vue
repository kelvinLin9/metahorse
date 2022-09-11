<template>
<div class="container pt-3">
  <div class="pb-1">
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
            <canvas id="pieChart"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <canvas id="barChart"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- 訂單資料 -->
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="bg-light border-bottom-3 fw-bold">
              <tr class="align-middle">
                <th scope="col" class="ps-3 py-3">購買時間</th>
                <th scope="col">訂單編號</th>
                <th scope="col">Email</th>
                <th scope="col">用戶姓名</th>
                <th scope="col">購買品項</th>
                <th scope="col">數量</th>
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
                  <td class="email">{{ item.user.email }}</td>
                  <td class="name">{{ item.user.name }}</td>
                  <td>
                    <ul class="list-unstyled">
                      <li v-for="(product, i) in item.products" :key="i">
                        {{ product.product.title }}
                      </li>
                    </ul>
                  </td>
                  <td class="qty">
                    <ul class="list-unstyled">
                      <li v-for="(product, i) in item.products" :key="i">
                        {{ product.qty }}
                      </li>
                    </ul>
                  </td>
                  <td class="text-right">{{ $filters.currency(item.total) }}</td>
                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                             v-model="item.is_paid"
                             @change="updateOrder(item)">
                      <label class="form-check-label" :for="`paidSwitch${item.id}`">
                        <span v-if="item.is_paid">已付款</span>
                        <span v-else>未付款</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button class="btn btn-outline-primary btn-sm text-dark"
                              @click="openModal(false, item)">編輯</button>
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
    <OrderModal ref="orderModal" />
    <Pagination/>
  </div>
</div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import adminStore from '@/stores/adminStore'
import OrderModal from '@/components/admin/OrderModal.vue'
import Pagination from '@/components/admin/Pagination.vue'
import 'bootstrap/js/dist/offcanvas'

export default {
  components: {
    OrderModal,
    Pagination
  },
  computed: {
    ...mapState(adminStore, ['orders', 'revenue', 'ordersNum', 'pagination']),
    ...mapWritableState(adminStore, ['tempOrder', 'isNew'])
  },
  methods: {
    ...mapActions(adminStore, ['getOrders', 'getAllOrdersData', 'updateOrder']),
    openModal (isNew, item) {
      if (isNew) {
        this.tempOrder = {}
      } else {
        this.tempOrder = { ...item }
      }
      this.isNew = isNew
      this.$refs.orderModal.showModal()

      // this.tempOrder = { ...item }
      // // console.log(this.tempOrder)
      // this.isNew = false
      // this.$refs.orderModal.showModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      this.$swal.fire({
        title: '確定刪除?',
        text: '刪除後將無法恢復',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.delOrder()
        }
      })
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        this.$swal.fire(
          'Deleted!',
          '刪除成功',
          'success'
        )
        this.getOrders(this.pagination.current_page)
      })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
<style lang="scss" scoped>
  .email {
    // word-break: break-all;
    max-width: 200px;
  }
  .name {
    max-width: 100px;
  }
  .qty {
    min-width: 50px;
  }
</style>