import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/pages/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
