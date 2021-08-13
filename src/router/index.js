import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/',
      name: 'projects',
      meta: { layout: 'main' },
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/users',
      name: 'users',
      meta: { layout: 'main' },
      component: () => import('../views/Users.vue')
    }
  ]
})
