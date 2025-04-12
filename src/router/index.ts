// Composables
import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import http from '@/helpers/http'

const routes = [
    {
        path: '/',
        // component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
            },
        ],
    },
    {
        path: '/api-tester',
        // component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: 'ApiTester',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "home" */ '@/views/ApiTester.vue'),
            },
        ],
    },
    {
        path: '/p/:nomeEstabelecimento',
        name: 'pagina-estabelecimento',
        component: () => import('@/views/Place.vue'),
        beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
            const nome = to.params.nomeEstabelecimento as string

            try {
                await http.get(`/place/exist-by-slug/${nome}`)
                next()
            } catch (err) {
                next({ name: 'not-found' })
            }
        }
    },
    {
        path: '/404',
        name: 'not-found',
        component: () => import('@/views/NotFound.vue')
    },
    {
        path: '/:catchAll(.*)', // pega qualquer rota não encontrada
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router

// Simulação de validação
async function verificarEstabelecimento(nome: string): Promise<boolean> {
    // Pode ser uma chamada à API ou checar num array local
    const estabelecimentos = ['barbearia-do-bony', 'spa-da-lu', 'unhas-top']
    return estabelecimentos.includes(nome)
}