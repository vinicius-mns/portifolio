import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ViniciusT from '../components/ViniciusT.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vinicius',
      name: 'viniciu',
      component: ViniciusT
    }
  ]
})

export default router
