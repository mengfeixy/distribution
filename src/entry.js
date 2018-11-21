/* global Vue */

/* weex initialized here, please do not move this line */
require('@/api/mock.js')

const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
