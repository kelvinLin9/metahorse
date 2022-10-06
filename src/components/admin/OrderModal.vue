<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px;">
                      <label for="name" class="form-label">姓名</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="tempOrder.user.name"
                        placeholder="請輸入姓名"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="email" class="form-label">Email</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        v-model="tempOrder.user.email"
                        placeholder="請輸入信箱"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="tel" class="form-label">電話</label>
                    </th>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        id="tel"
                        v-model.number="tempOrder.user.tel"
                        placeholder="請輸入電話"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="address" class="form-label">地址</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        v-model="tempOrder.user.address"
                        placeholder="請輸入地址"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="message" class="form-label">留言</label>
                    </th>
                    <td>
                      <textarea
                        type="text"
                        class="form-control"
                        id="message"
                        v-model="tempOrder.message"
                        placeholder="請輸入留言"
                      >
                      </textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $filters.date(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ $filters.currency(tempOrder.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>
                      {{ item.qty }} / {{ item.product.unit }}
                    </td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary"
                  data-bs-dismiss="modal"
                  @click.prevent="updateOrder(tempOrder)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin'
import { mapActions, mapWritableState } from 'pinia'
import adminStore from '@/stores/adminStore'

export default {
  computed: {
    ...mapWritableState(adminStore, ['tempOrder', 'isNew'])
  },
  methods: {
    ...mapActions(adminStore, ['updateOrder'])
  },
  mixins: [modalMixin]
}
</script>
