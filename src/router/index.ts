import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Encontre from '../views/Encontre.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Encontre',
    component: Encontre
  },
  {
    path: '/:system',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path:'/nao-encontrado',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
