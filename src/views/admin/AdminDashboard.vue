<template>
  <AdminNavbar :key="$route.path"/>
  <div class="user-loading position-absolute top-50 start-50 translate-middle"
      v-if="isLoading">
    <UserLoading/>
  </div>
  <div class="container-fluid position-relative min-height milkyWay">
    <RouterView/>
  </div>
  <ToastMessages/>
  <GoTop/>
  <UserFooter/>
</template>

<script>
import emitter from '@/methods/emitter'
import UserFooter from '@/components/UserFooter.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import AdminNavbar from '@/components/admin/AdminNavbar.vue'
import { mapActions, mapState } from 'pinia'
import statusStore from '@/stores/statusStore'
import adminStore from '@/stores/adminStore'
import GoTop from '@/components/GoTop.vue'

export default {
  components: {
    AdminNavbar,
    ToastMessages,
    UserFooter,
    GoTop
  },
  computed: {
    ...mapState(statusStore, ['isLoading'])
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    ...mapActions(adminStore, ['getOrders', 'getProducts', 'getCoupons'])
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/adminLogin')
      }
    })
  }
}
</script>

<style scoped>
.user-loading {
  z-index: 1000;
}
.min-height {
  min-height: calc(100vh - 60px - 130px);
}
</style>
