<template>
  <div class="container pt-3">
    <div class="text-end pb-3">
      <button type=“button”
              class="btn btn-primary"
              @click="openCouponModal(true)">
        新增優惠券
      </button>
    </div>
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover mb-0 text-nowrap">
            <thead class="bg-light border-bottom-3 fw-bold">
              <tr class="align-middle">
                <th>名稱</th>
                <th>折扣碼</th>
                <th>折扣百分比</th>
                <th>到期日</th>
                <th>是否啟用</th>
                <th>編輯 / 刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in coupons" :key="key">
              <td>{{ item.title }}</td>
              <td>{{ item.code }}</td>
              <td>{{ item.percent }}%</td>
              <td>{{ $filters.date(item.due_date) }}</td>
              <td>
                <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                <span v-else class="text-muted">未起用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button"
                          class="btn btn-outline-primary btn-sm"
                          @click="openCouponModal(false, item)">
                    編輯
                  </button>
                  <button type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="openDelCouponModal(item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <CouponModal :coupon="tempCoupon"
                  ref="couponModal"
                  @update-coupon="updateCoupon"
    />
    <DelModal :item="tempCoupon"
              ref="delModal"
              @del-item="delCoupon"
    />
  </div>
</template>

<script>
import CouponModal from '@/components/admin/CouponModal.vue'
import DelModal from '@/components/admin/DelModal.vue'
import { mapState, mapActions } from 'pinia'
import adminStore from '@/stores/adminStore'
import statusStore from '@/stores/statusStore'

export default {
  components: {
    CouponModal,
    DelModal
  },
  props: {
    config: Object
  },
  data () {
    return {
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      }
    }
  },
  computed: {
    ...mapState(adminStore, ['coupons'])
  },
  methods: {
    ...mapActions(adminStore, ['getCoupons']),
    ...mapActions(statusStore, ['pushManager']),
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon }).then((res) => {
          this.pushManager(res, '新增優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon }).then((res) => {
          this.pushManager(res, '編輯優惠券')
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        })
      }
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        this.pushManager(res, '刪除優惠券')
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getCoupons()
      })
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
