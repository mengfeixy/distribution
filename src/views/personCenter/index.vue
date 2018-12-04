<template>
  <div style="position: relative;height: 100vh">
    <Header :showText="false" :showQRcodeIco='showQRcodeIco' @viewQRcode='viewQRcode'></Header>
    <div class="center-header">
      <image style="width: 118px;height: 118px;margin: 104px auto 28px" :src="headerImg"/>
      <text style="margin: 0 auto;color: white">{{userAccount}}</text>
    </div>
    <div class="center-content">
      <div class="first-line">
        <div></div>
        <text>可提现佣金</text>
      </div>
      <div class="second-line">
        <text>¥{{amount}}</text>
        <button @click="withdraw">提现</button>
      </div>
    </div>
    <button v-if="showBindBtn" class="default-btn" @click="showPop = true">绑定上级用户</button>
    <!-- 审核通过显示的内容 -->
    <div v-if="!showBindBtn" class="verify-pass-box">
      <div style="position: relative;">
        <router-link to="/bindVerify">
          <i class="iconfont binding_audit"></i>
          <text>绑定审核</text>
          <span class="bind-number">20</span>
        </router-link>
      </div>
      <div>
        <router-link to="/bindUser">
          <i class="iconfont bound_user"></i>
          <text>已绑定用户</text>
          <text>16人</text>
        </router-link>
      </div>
      <div>
        <router-link to="/keter">
          <i class="iconfont distribution"></i>
          <text>推广分销</text>
        </router-link>
      </div>
      <div>
        <router-link to="/keter/commission-detail">
          <i class="iconfont commissions"></i>
          <text>佣金明细</text>
        </router-link>
      </div>
      <div>
        <!-- <router-link to="/keter/commission-detail"> -->
          <i class="iconfont withdrawal_record"></i>
          <text>提现记录</text>
        <!-- </router-link> -->
      </div>
    </div>

    <!-- 手机绑定弹窗 -->
    <div v-if="showPop">
      <div class="pop-mask" @click="showPop = false"></div>
      <div class="pop-content">
        <div class="content-title">
          <text>请选择绑定方式</text>
        </div>
        <div class="content-btns">
          <text style="width: 50%;color: rgba(153, 153, 153, 1);border-right: 2px solid rgba(205, 211, 215, 1)">扫码绑定</text>
          <text style="width: 50%;" @click="$router.push('/bindPhone')">手机号绑定</text>
        </div>
      </div>
    </div>
    <!-- 提现弹窗 -->
    <div v-if="showPopWithdraw">
      <div class="pop-mask" @click="showPopWithdraw = false"></div>
      <div class="pop-content">
        <div class="content-title">
          <text>金额超过100元才可提现</text>
        </div>
        <div class="confirm-btn">
          <text @click="withdrawConfirm">确认</text>
        </div>
      </div>
    </div>
    <!-- 二维码图片弹窗 -->
    <div v-if="showQRcode">
      <div class="pop-mask" @click="showQRcode = false"></div>
      <div class="qrcode-img-box">
        <i class="iconfont close" @click="showQRcode = false"></i>
        <image class="qrimg" :src='qrcodeImg'/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  require('@/api/Aom-am')
  let stream = weex.requireModule('stream')

  export default {
    name: 'index',
    components: {
      Header
    },
    data () {
      return {
        headerImg: '/src/assets/images/headerImg@2x.png', // 头像
        qrcodeImg: '/src/assets/images/qrcode.png', // 二维码图片
        showPop: false, // 绑定方式弹窗
        showPopWithdraw: false, // 提现弹窗
        showBindBtn: false, // 绑定上级用户按钮
        showQRcode: false, // QRcode弹窗
        showQRcodeIco: false, // 头部QRcode图标
        userAccount: '', // user账号
        amount: '' // 可提现金额
      }
    },
    created () {
      sessionStorage.setItem('user', '15554550888')

      let data = sessionStorage.getItem('user')
      if (data) {
        this.userAccount = data
        stream.fetch({
          method: 'post',
          url: '/isBind',
          type: 'json'
        }, (res) => {
          let data = JSON.parse(res.data)
          console.log(data, '是否绑定上级用户')
          if (data.code === 0) { // 未绑定上级用户
            this.showBindBtn = true
            this.amount = '0.00'
          } else { // 已绑定上级
            this.showBindBtn = false
            this.showQRcodeIco = true
            stream.fetch({
              method: 'post',
              url: '/can-withdraw-amount',
              type: 'json'
            }, (res) => {
              let data = JSON.parse(res.data)
              console.log(data, '可提现金额')
              this.amount = data.amount
            })
          }
        })
      } else {
        this.$router.push('/login')
      }
    },
    methods: {
      // 点击查看二维码
      viewQRcode () {
        this.showQRcode = true
      },
      withdrawConfirm () {
        this.showPopWithdraw = false
      },
      // 提现
      withdraw () {
        if (parseFloat(this.amount) > 100) {
          this.$router.push('/keter/withdraw-cash')
        } else {
          this.showPopWithdraw = true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .center-header
    width 100%
    height 424px
    background-color black

  .center-content
    width 100%
    height 180px
    background-color rgba(255, 255, 255, 1)
    margin 20px 0
    padding 28px

  .first-line
    flex-direction row
    align-items center
    justify-content left

  .first-line
      div
        width 8px
        height 36px
        background-color rgba(34, 34, 34, 1)
      p
        font-size 36px
        color rgba(102, 102, 102, 1)
        margin-left 10px

  .second-line
    flex-direction row
    justify-content space-between
    align-items center
    margin-top 20px

  .second-line
    p
      font-size 40px
      color rgba(102, 102, 102, 1)
    button
      width 140px
      height 56px
      background rgba(255, 255, 255, 1)
      border-radius 4px
      border 2px solid
      text-align center
      outline none

  .default-btn
    width 92.5%
    height 96px
    background rgba(34, 34, 34, 1)
    -webkit-border-radius 12px
    -moz-border-radius 12px
    border-radius 12px
    color rgba(255, 255, 255, 1)
    text-align center
    margin 0 auto
    border none
    outline none

  .pop-mask
    background rgba(74, 74, 74, 0.25)
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 6000

  .pop-content
    width 66.7%
    height 296px
    background-color rgba(255, 255, 255, 1)
    -moz-box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    -webkit-box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    border-radius 12px
    position fixed
    z-index 7000
    top 50%
    left 50%
    -webkit-transform translate(-50%, -50%)
    -moz-transform translate(-50%, -50%)
    -ms-transform translate(-50%, -50%)
    -o-transform translate(-50%, -50%)
    transform translate(-50%, -50%)

  .content-title
    height 200px
    width 100%
    border-bottom 2px solid rgba(205, 211, 215, 1)

  .content-title
    p
      font-size 28px
      color rgba(108, 108, 108, 1)
      line-height 200px
      text-align center

  .content-btns
    height 96px
    flex-direction row

  .confirm-btn
  .content-btns
    p
      text-align center
      line-height 96px
      color rgba(34, 34, 34, 1)

  .verify-pass-box
    background rgba(255, 255, 255, 1)
    padding 40px 30px 0
    width 100%
    flex-direction row
    justify-content space-between
    flex-wrap wrap
    position absolute
    top 644px
    bottom 0

  .verify-pass-box
    div
      i
      p
        margin 0 auto
      i
        font-size 60px
        color rgba(102, 102, 102, 1)
      p
        font-size 28px
        color rgba(153, 153, 153, 1)
        text-wrap none
    div
      width calc(100%/4)
      margin-bottom 46px

  .bind-number
    display block
    width 40px
    height 28px
    background rgba(217, 173, 101, 1)
    -webkit-border-radius 60px
    -moz-border-radius 60px
    border-radius 60px
    color rgba(255, 255, 255, 1)
    font-size 22px
    text-align center
    position absolute
    top 2px
    right 32px

  .qrcode-img-box
    width 452px
    height 460px
    background rgba(255, 255, 255, 1)
    position absolute
    bottom 0
    left 0
    right 0
    top 0
    margin auto
    z-index 6000
    border-radius 16px

  .qrcode-img-box
    i
      font-size 24px
      position absolute
      top 20px
      right 20px
    .qrimg
      width 340px
      height 340px
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
</style>
