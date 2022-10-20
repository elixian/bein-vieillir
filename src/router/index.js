import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/matete',
      name:'matete',
      component: () => import('../views/MyHeadView.vue'),
      children:[
        {
          path: '',
          
        component: () => import('../pages/MyHeadArticle.vue'),
        },
        {
          path: 'stress',
         name: 'stress',
      component: () => import('../pages/StressArticle.vue'),
        }
      ]
    },
  ]
})

export default router
