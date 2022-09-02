<template>
  <AdminNavbar :key="$route.path"/>
  <div class="user-loading position-absolute top-50 start-50 translate-middle"
      v-if="isLoading">
    <UserLoading/>
  </div>
  <div class="container-fluid position-relative min-height milkyWay">
    <router-view/>
  </div>
  <ToastMessages/>
  <UserFooter/>
</template>

<script>
// .vue記得要加
import emitter from '@/methods/emitter'
import UserFooter from '@/components/UserFooter.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import AdminNavbar from '@/components/admin/AdminNavbar.vue'
import { mapActions, mapState } from 'pinia'
import statusStore from '@/stores/statusStore'

export default {
  // 區域註冊
  components: {
    AdminNavbar,
    ToastMessages,
    UserFooter
  },
  computed: {
    ...mapState(statusStore, ['isLoading'])
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
.user-loading {
  z-index: 1000;
}
.min-height {
   min-height: calc(100vh - 60px - 130px);
}
</style>