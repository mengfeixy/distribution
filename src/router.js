/* global Vue */
import Router from 'vue-router'
import test from '@/views/test'

// Aom-am
import Center from '@/views/personCenter'
import BindPhone from '@/views/personCenter/bindPhone'

// keter
import keter from '@/views/keter/index'
import commissionDetail from '@/views/keter/commission_detail'

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
    }, {
      path: '/keter',
      name: 'keter',
      component: keter
    }, {
      path: '/bindPhone',
      name: 'BindPhone',
      component: BindPhone
    }, {
      path: '/keter/commission-detail',
      name: 'commissionDetail',
      component: commissionDetail
    }
  ]
})
