import Vue from 'vue'
import VueRouter from 'vue-router'
import Sessions_managing from './apps/Sessions_managing'
import Main from './views/Main'
import Home from './views/Home'
import Profile from './views/Profile'
import Near from './views/Near'
import Login from './views/Login'
import Signup from './views/Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sessions_managing',
    component: Sessions_managing
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: '/near',
        name: 'near',
        component: Near
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
]


const  router  =  new  VueRouter({
  routes
})

export default router;
