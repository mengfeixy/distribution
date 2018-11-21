/* global Vue */
import Router from 'vue-router'
import test from '@/views/test'
import Center from '@/views/personCenter'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    }, {
      path: '/personCenter',
      name: 'Center',
      component: Center
    }
  ]
})
