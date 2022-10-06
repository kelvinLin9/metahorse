<template>
  <div class="container pt-5">
    <div class="glass-container position-absolute top-50 start-50 translate-middle">
      <div class="container py-4 ">
        <form class="row justify-content-center"
              @submit.prevent="signIn">
          <div class="col-8">
            <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
            <div class="mb-2">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
              />
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                v-model="user.password"
              />
            </div>
            <div class="text-end mt-4">
              <button class="btn btn-lg btn-primary btn-block" type="submit">
                登入
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import statusStore from '@/stores/statusStore'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushManager']),
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard/order')
          } else {
            this.pushManager(false, '更新', '發生錯誤，請檢查帳號密碼')
          }
        }).catch(() => {
          this.pushManager(false, '更新', '發生錯誤，請檢查帳號密碼')
        })
    }
  }
}
</script>
