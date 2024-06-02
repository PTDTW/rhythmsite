import { createRouter, createWebHistory } from 'vue-router'


// 頁面
import HomeView from '../views/home.vue' //首頁

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/developer.vue'),
    },
    {
      path: '/invite',
      name: 'invite',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/RouterChildrenPage/botinviteIndex.vue'),
      component: () => import('../views/BotInviteOnly.vue'),
      // children: [
      //   {
      //     name: 'botInviteOnly',
      //     path: 'only',
      //     component: () => import('../views/BotInviteOnly.vue'),
      //   },
      //   {
      //     name: 'botInvitethanks',
      //     path: 'thanks',
      //     component: () => import('../views/thanks.vue'),
      //   },
      //   {
      //     path: '',
      //     component: () => import('../views/BotInvite.vue'),
      //   },
      //   {
      //     path: "/:notFound",
      //     component: import('../views/error/404.vue'),
      //   },
      // ],
  
    },
  ]
})

export default router
