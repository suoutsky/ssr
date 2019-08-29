import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../views/home/index.vue')
const School = () => import('../views/school/index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/Home' },
      { path: '/home', redirect: '/Home' },
      { path: '/school', redirect: '/School' }
    ]
  })
}
