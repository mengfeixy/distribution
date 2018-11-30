<template>
  <div class="withdraw-cash">
    <Header title="提现" :showText="true"></Header>
    <div class="content">
      <div class="top">
        <text>到账地址</text>
        <text>钱包 - 个人账户余额</text>
      </div>
      <div class="middle">
        <text>提现金额</text>
        <input type="text" placeholder="请输入提现金额" @input="watchCash" v-model="money">
      </div>
    </div>
    <div class="info">可提现￥{{cash}},<span>全部提现</span></div>
    <div class="button" :class="{'active': money !== '' && money <= cash && money > 0}" @click="withdraw">
      提现
    </div>
    <div class="bottom">奖励及提现规则</div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  require('@/api/keter/withdraw_cash.js')
  let stream = weex.requireModule('stream')

  export default {
    name: 'withdrawCash',
    components: {
      Header
    },
    data () {
      return {
        cash: '',
        // isShow: false,
        money: ''
      }
    },
    created () {
      stream.fetch({
        url: '/keter/withdraw-cash',
        method: 'post',
        type: 'json'
      }, (res) => {
        let data = JSON.parse(res.data)
        this.cash = data.cash
      })
    },
    methods: {
      // 监控金额输入
      watchCash () {
        setTimeout(() => {
          this.money = this.money.replace(/[^(\d|.)]/g, '')
        }, 100)
        // if (this.money <= this.cash) {
        //   this.isShow = true
        // } else {
        //   this.isShow = false
        // }
      },
      withdraw () {
        if (this.money !== '' && this.money <= this.cash && this.money > 0) {
          this.$router.push({
            name: 'withdrawSuccess'
          })
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.withdraw-cash
  width 100%
  height auto
  .content
    width 100%
    height auto
    margin 98px auto 0
    padding 0 10px
    background-color #fff
    .top
      height 96px
      flex-direction row
      p
        flex 0 0 50%
        width 50%
        font-size 18px
        height 96px
        line-height 96px
        color rgba(102, 102, 102, 1)
        &:nth-child(2)
          text-align right
          color rgba(153, 153, 153, 1)
    .middle
      height 48px
      flex-direction row
      margin 24px 0
      p
        flex 0 0 180px
        width 180px
        font-size 18px
        height 48px
        line-height 48px
        color rgba(102, 102, 102, 1)
        border-right 1px solid rgba(205, 211, 215, 1)
      input
        flex 0 0 calc(100% - 200px)
        width calc(100% - 200px)
        font-size 18px
        outline none
        margin-left 20px
  .info
    flex-direction row
    font-size 18px
    padding 0 10px
    height 96px
    line-height 96px
    span
      font-size 18px
      color rgba(217, 173, 101, 1)
      line-height 96px
  .button
    width 694px
    height 96px
    margin 0 auto 0
    text-align center
    line-height 96px
    background-color rgba(34, 34, 34, 0.3)
    color #fff
    border-radius 12px
    &.active
      background-color rgba(34, 34, 34, 1)
  .bottom
    position fixed
    bottom 20px
    left 0
    width 100%
    height 80px
    line-height 80px
    text-align center
    font-size 14px
    text-decoration underline
</style>
