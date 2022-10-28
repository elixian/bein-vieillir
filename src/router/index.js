import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (to.hash===""){ // control if hash for hash links
      return { top: 0 }
    }
  
  },
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
    {
      path: '/quizz',
      name: 'quizz',
      component: () => import('../views/QuizzView.vue'),
      children :[
        {
          path:"",
          component:()=> import('../pages/QuizzPage.vue')
        },
        {
          path:"/module",
          name:"module",
          component:()=> import('../pages/QuizzCardsPage.vue')
        },

      ]
    },
    {
      path: '/Mediatheque',
      name: 'mediatheque',
      component: () => import('../views/MediathequeView.vue'),
      children:[
        {
          path: '',
        component: () => import('../pages/MediathequePage.vue'),
        }
      ]
    }
  ]
})


export default router
