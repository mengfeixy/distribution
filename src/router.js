/* global Vue */
import Router from 'vue-router'

// Aom-am
import Center from '@/views/personCenter'
import BindPhone from '@/views/personCenter/bindPhone'
import SubmitApply from '@/views/personCenter/submitApply'
import BindVerify from '@/views/personCenter/bindVerify'

// keter
import keter from '@/views/keter/index'
import commissionDetail from '@/views/keter/commission_detail'
import withdrawCash from '@/views/keter/withdraw_cash'
import withdrawSuccess from '@/views/keter/withdraw_success'

// Mr.Piz
import Join from '@/views/login/join' // 加入分销页面
import Login from '@/views/login' // 登录页面

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
      path: '/keter/withdraw-cash',
      name: 'withdrawCash',
      component: withdrawCash
    }, {
      path: '/keter/withdraw-success',
      name: 'withdrawSuccess',
      component: withdrawSuccess
    }, {
      path: '/join',
      name: 'Join',
      component: Join
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/submitApply',
      name: 'SubmitApply',
      component: SubmitApply
    }, {
      path: '/bindVerify',
      name: 'BindVerify',
      component: BindVerify
    }
  ]
})
