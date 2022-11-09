import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (to.hash === "") { // control if hash for hash links
      return {
        top: 0
      }
    }

  },
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/matete',
    
      component: () => import('../views/MyHeadView.vue'),
      children: [{
          path: '',
          name: 'matete',
          component: () => import('../pages/MyHeadArticle.vue'),
          meta:{
            breadcrumb:[
              {name:'Ma tête'},
             
            ]
          }
        },
        {
          path: 'stress',
          name: 'stress',
          component: () => import('../pages/StressArticle.vue'),
          meta:{
            breadcrumb:[
              {name:'Ma tête', link:'matete'},
              {name:"L’activité physique, votre meilleure alliée"}
            ]
          }
        }
      ]
    },
    {
      path: '/quizz',
      
      component: () => import('../views/QuizzView.vue'),
      
      children: [{
          path: "",
          name: 'quizz',
          component: () => import('../pages/QuizzPage.vue'),
          meta:{
            breadcrumb:[
              {name:'Quizz'}
            ]
          },
        },
        {
          path: "/module",
          name: "module",
          component: () => import('../pages/QuizzCardsPage.vue'),
          meta:{
            breadcrumb:[
              {name:'Bien dans mon corps'}
            ]
          },
        },
        {
          path: "resultat",
          name: "resultat",
          component: () => import('../pages/ResultsPage.vue'),
          meta:{
            breadcrumb:[
              {name:'Quizz', link:'quizz'},
              {name:'Resultat'}
            ]
          },
        },

      ]
    },
    {
      path: '/Mediatheque',
      name: 'mediatheque',
      component: () => import('../views/MediathequeView.vue'),
      children: [{
        path: '',
        component: () => import('../pages/MediathequePage.vue'),
      }]
    }
  ]
})


export default router