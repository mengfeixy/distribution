<template>
  <div class="commission-detail">
    <header title="佣金明细" :showText="true"></header>
    <div class="space"></div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
require('@/api/keter/commission_detail.js')
let stream = weex.requireModule('stream')

export default {
  name: 'commissionDetail',
  components: {
    Header
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    stream.fetch({
      method: 'post',
      type: 'json',
      url: '/keter/commission-detail'
    }, (res) => {
      console.log(res, '11111111')
    })
  }
}
</script>

<style lang="stylus" scoped>
.commission-detail
  width 100%
  height auto
  .space
    position fixed
    top 88px
    left 0
    width 100%
    height 10px
    background-color rgba(236, 236, 236, 1)
</style>
