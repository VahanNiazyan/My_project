import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/home',
        component: Home
    }
]

const history = createWebHistory();

const router = createRouter({
    history: history,
    routes
})

export  default router
