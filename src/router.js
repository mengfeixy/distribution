/* global Vue */
import Router from 'vue-router'
// import test from '@/views/test'

// Aom-am
import Center from '@/views/personCenter'

// keter
import keter from '@/views/keter/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      // name: 'test',
      // component: test
      redirect: '/personCenter'
    }, {
      path: '/personCenter',
      name: 'Center',
      component: Center
    }, {
      path: '/keter',
      name: 'keter',
      component: keter
    }
  ]
})
