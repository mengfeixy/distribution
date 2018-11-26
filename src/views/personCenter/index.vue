<template>
  <div>
    <Header :showText="false"></Header>
    <div class="center-header">
      <image style="width: 118px;height: 118px;margin: 104px auto 28px" :src="headerImg"></image>
      <text style="margin: 0 auto;color: white">18621549878</text>
    </div>
    <div class="center-content">
      <div class="first-line">
        <div></div>
        <text>可提现佣金</text>
      </div>
      <div class="second-line">
        <text>¥0.00</text>
        <button @click="showPopWithdraw = true">提现</button>
      </div>
    </div>
    <button class="default-btn" @click="showPop = true">绑定上级用户</button>

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
          <text>金额超过10元才可提现</text>
        </div>
        <div class="confirm-btn">
          <text @click="showPopWithdraw = false">确认</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  // let stream = weex.requireModule('stream')

  export default {
    name: 'index',
    components: {
      Header
    },
    data () {
      return {
        headerImg: '/src/assets/images/headerImg@2x.png', // 头像
        showPop: false, // 绑定方式弹窗
        showPopWithdraw: false // 提现弹窗
      }
    },
    created () {
      // stream.fetch({
      //   method: 'post',
      //   url: '/news/index',
      //   type: 'json'
      // }, (res) => {
      //   let data = JSON.parse(res.data)
      //   console.log(data, '0000')
      // })
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
    -webkit-transform: translate(-50%, -50%)
    -moz-transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    -o-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)

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
</style>
