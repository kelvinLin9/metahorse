import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/UserHome0722.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/AdminCoupons.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/UserBoard.vue'),
    children: [
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
