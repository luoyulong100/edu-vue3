import { createRouter, createWebHistory } from 'vue-router'
import { useTokenStore } from '@/stores/myToken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/loginView.vue')
    },
    {
      path: '/',
      name: 'AppLayout',
      component: () => import('../components/layout/appLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'IndexView',
          component: () => import('../views/indexView.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/:xxx(.*)*',
          name: 'ErrorPage',
          component: () => import('@/components/layout/errorPage.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useTokenStore()
  if (to.matched.some((r) => r.meta?.requiresAuth)) {
    if (!store.token.access_token) {
      next({ name: 'Login', query: { redirect: to.fullPath } })
      return
    }
  }
  next()
})

export default router
