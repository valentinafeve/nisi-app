import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sessions_managing',
    component: () => import('@/apps/Sessions_managing.vue')
  },
  {
    path: "/main",
    name: "main",
    component: () => import( "@/views/Main.vue"),
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: '/near',
        name: 'near',
        component: () => import('@/views/Near.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( "@/views/Login.vue"),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( "@/views/Signup.vue"),
  },
]


const  router  =  new  VueRouter({
routes
})

export default router;
