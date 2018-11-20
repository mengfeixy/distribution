/* global Vue */
import Router from 'vue-router'
import test from '@/views/test'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    }
  ]
})
