/*
 * @Description: Description
 * @Author: 清河
 * @Date: 2019-08-13 14:55:16
 * @LastEditTime: 2019-08-13 14:56:07
 * @LastEditors: 清河
 */
Vue.mixin({
    beforeRouteUpdate (to, from, next) {
      const { asyncData } = this.$options
      if (asyncData) {
        asyncData({
          store: this.$store,
          route: to
        }).then(next).catch(next)
      } else {
        next()
      }
    }
  })