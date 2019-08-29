/*
 * @Description: Description
 * @Author: 清河
 * @Date: 2019-08-13 11:47:32
 * @LastEditTime: 2019-08-13 14:18:13
 * @LastEditors: 清河
 */
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
