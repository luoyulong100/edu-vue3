import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppLayout',
      component: () => import('../components/layout/appLayout.vue'),
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

export default router
