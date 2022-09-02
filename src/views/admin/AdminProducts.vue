<template>
  <!-- <Loading :active="isLoading"></Loading> -->
  <div class="text-end pt-4">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
      增加一個產品
    </button>
  </div>
<div class="p-1">
  <table class="table">
    <thead>
      <tr>
        <th width="100">分類</th>
        <th width="50">產品名稱</th>
        <th width="50">圖片</th>
        <th width="80">產品描述</th>
        <th width="150">說明</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td>
          <img :src="item.imageUrl" alt="商品照片" width="100" height="100">
        </td>
        <td>{{ item.description }}</td>
        <td>{{ item.content }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination/>
</div>
  

  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct">
  </ProductModal>

  <DelModal
    :item="tempProduct"
    ref="delModal"
    @del-item="delProduct"/>
  </template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import adminStore from '@/stores/adminStore'
import ProductModal from '@/components/admin/ProductModal.vue'
import Pagination from '@/components/admin/Pagination.vue'
import DelModal from '@/components/admin/DelModal.vue'

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  computed: {
    ...mapState(adminStore, ['products', 'pagination']),
    ...mapWritableState(adminStore, ['tempProduct', 'isNew'])
  },
  methods: {
    ...mapActions(adminStore, ['getProducts']),
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
