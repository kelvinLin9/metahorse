import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/UserHome.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/UserDashboard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/UserHome.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/UserProducts.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/UserCheckout.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'CheckOrder',
        name: 'CheckOrder',
        component: () => import('../views/CheckOrder.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('../views/UserFavorite.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/UserLogin.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'checkoutPay/:orderId',
        component: () => import('../views/CheckoutPay.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import('../views/404Page.vue')
  }
]

const router = createRouter({
  // 網址路徑模式 使用網址hash形式 代表是由前端所模擬的 
  history: createWebHashHistory(),
  // `routes: routes` 的缩写
  routes
  // linkActiveClass:'active'
  // linkActiveClass: 'text-warning',
  // scrollBehavior (to, from, savedPosition) {
  // // return 期望滚动到哪个的位置
  // console.log(to, from, savedPosition)
  // }
})

export default router
