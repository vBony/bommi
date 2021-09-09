import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/:system',
    name: 'Home',
    component: Home
  },
  {
    path:'/nao-encontrado',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'Cadastro',
    component: Cadastro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
