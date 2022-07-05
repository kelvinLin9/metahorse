import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
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
        component: () => import('../views/Checkout.vue')
      },
      // {
      //   path: 'checkoutPat',
      //   component: () => import('../views/CheckoutPay.vue')
      // },
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
