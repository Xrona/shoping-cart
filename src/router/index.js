import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
]

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
