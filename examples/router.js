import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue'),
      children: [
        {
          name: 'Start',
          path: 'start',
          component: () => import('./pages/basic/Start.vue'),
        },
        {
          name: 'Coord',
          path: 'coord',
          component: () => import('./pages/basic/Coord.vue'),
        }
      ]
    },
  ]
})

export default router
