import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: '首頁'
    },
    {
        path: '/domain-dns',
        component: () => import('../views/Dns.vue'),
        name: 'Domain & Dns'
    },
    {
        path: '/vue',
        component: () => import('../views/Vue.vue'),
        name: 'Vue'
    },
    {
        path: '/git-flow',
        component: () => import('../views/Git.vue'),
        name: 'git flow'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
