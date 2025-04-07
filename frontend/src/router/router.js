import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Auth', component: AuthView },
  { path: '/home', name: 'Home', component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router