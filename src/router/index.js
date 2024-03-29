import { createRouter, createWebHashHistory } from 'vue-router'

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
        path: 'UserCoupon',
        name: 'UserCoupon',
        component: () => import('../views/UserCoupon.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('../views/UserFavorite.vue')
      },
      {
        path: 'UserSearchOrder',
        name: 'UserSearchOrder',
        component: () => import('../views/UserSearchOrder.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('../views/UserFavorite.vue')
      },
      {
        path: 'adminLogin',
        name: 'adminLogin',
        component: () => import('../views/admin/AdminLogin.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/UserCheckout.vue')
      },
      {
        path: 'product/:productId',
        name: 'product',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path: 'checkoutPay/:orderId',
        name: 'checkoutPay',
        component: () => import('../views/CheckoutPay.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
    children: [
      {
        path: 'order',
        name: 'AdminHome',
        component: () => import('../views/admin/AdminOrder.vue')
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
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
  history: createWebHashHistory(),
  routes
})

export default router
