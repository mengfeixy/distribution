<template>
  <div class="keter" :style="{'height': height}">
    <Header title="keter123" :showText="true"></Header>
    <div class="container">
      <image :src=imgUrl class="img"/>
      <div class="button save" @click="scan">扫描</div>
      <div class="button share-to" @click="showPopup">分享</div>
      <div class="button go-to" @click="goToCommissionDetail">查看佣金明细</div>
    </div>
    <div class="popup" v-show="popup.isShow" :style="{'height': height, 'width': width}" @click="closePopup">
      <div class="share-content">QQ</div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  const event = weex.requireModule('event')

  export default {
    name: 'keter',
    components: {
      Header
    },
    data () {
      return {
        imgUrl: '',
        height: null,
        width: null,
        popup: {
          isShow: false
        }
      }
    },
    created () {
      this.imgUrl = '/src/assets/images/weixin.jpg'
      let h = document.querySelector('body').clientHeight
      let w = document.querySelector('body').clientWidth
      this.height = h * 2 + 'px'
      this.width = w * 2 + 'px'
    },
    methods: {
      showPopup () {
        this.popup.isShow = true
      },
      scan () {
        console.log('1111111111111')
        try {
          event.openURL('weex://go/scan')
        } catch (e) {
          try {
            navigator.push({ url: 'weex://go/scan' })
          } catch (e) {}
        }
      },
      closePopup () {
        this.popup.isShow = false
      },
      goToCommissionDetail () {
        this.$router.push({
          name: 'commissionDetail'
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.keter
  width 100%
  height 100%
  background-color #fff
  .container
    width 100%
    height auto
    &>.img
      width 516px
      height 516px
      display block
      margin 240px auto 0
      box-shadow 0px 4px 20px 1px rgba(0, 0, 0, 0.07)
    .button
      width 516px
      height 96px
      line-height 96px
      text-align center
      color #fff
      font-size 16px
      margin 80px auto 0
      border-radius 96px
      &.save
        background-color rgba(217, 173, 101, 1)
      &.share-to
        background-color rgba(34, 34, 34, 1)
      &.go-to
        background-color rgba(34, 34, 34, 0.5)
  .popup
    position fixed
    top 0
    left 0
    background-color rgba(0, 0, 0, 0.4)
    .share-content
      position absolute
      bottom 0
      left 0
      width 100%
      height 80px
      line-height 80px
      text-align center
      background-color #fff
</style>
