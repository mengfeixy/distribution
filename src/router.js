/* global Vue */
import Router from 'vue-router'

// Aom-am
import Center from '@/views/personCenter'
import BindPhone from '@/views/personCenter/bindPhone'
import SubmitApply from '@/views/personCenter/submitApply'

// keter
import keter from '@/views/keter/index'
import commissionDetail from '@/views/keter/commission_detail'

// Mr.Piz
import Login from '@/views/login'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/personCenter'
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
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/submitApply',
      name: 'SubmitApply',
      component: SubmitApply
    }
  ]
})
