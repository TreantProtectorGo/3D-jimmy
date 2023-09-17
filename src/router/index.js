import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/home.vue'
import IndoorNavigation_RequestPermission from '@/components/IndoorNavigation_RequestPermission.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/IndoorNavigation_RequestPermission',
        name: 'IndoorNavigation_RequestPermission',
        component: IndoorNavigation_RequestPermission
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router