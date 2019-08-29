/*
 * @Description: Description
 * @Author: 清河
 * @Date: 2019-08-13 11:25:01
 * @LastEditTime: 2019-08-13 14:34:14
 * @LastEditors: 清河
 */
// app.js
import Vue from 'vue'
import App from './App';
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
export function createApp () {
  // 创建 router 和 store 实例
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    // 创建应用程序实例，将 router 和 store 注入
    router,
    store,
    render: h => h(App)
  })

  // 返回 app 和 router
  return { app, router, store }
}