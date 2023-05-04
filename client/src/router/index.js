import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// GOOD
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name === 'login' && isAuthenticated) next('/')
  if (to.name === 'register' && isAuthenticated) next('/')
  if (to.name === 'home' && !isAuthenticated) next('/login')
  else next()
})


export default router
