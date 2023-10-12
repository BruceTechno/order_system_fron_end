import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPersonView from '../views/AddPersonView.vue'
import CartView from '../views/CartView.vue'
import AddMenuView from '../views/AddMenuView.vue'
import MyOrderView from '../views/MyOrderView.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/add-person',
      name: 'add-person',
      component: AddPersonView
    },
    {
      path:'/cartView',
      name: 'cartView',
      component: CartView
    },
    {
      path:'/add-menu',
      name: 'add-menu',
      component: AddMenuView
    },
    {
      path:'/my-order',
      name: 'my-order',
      component: MyOrderView
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
   
  ]
})

export default router
