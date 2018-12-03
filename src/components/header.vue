<template>
  <div class="header-box" :style="{background: showText ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}">
    <i
      v-if="showBack"
      class="iconfont return"
      :style="{color: showText ? 'rgba(34, 34, 34, 1)' : 'rgba(255, 255, 255, 1)'}"
      @click="$router.back()">
    </i>
    <text class="header-text" v-if="showText">{{title}}</text>
    <i
      v-if="showQRcodeIco"
      class="iconfont qr_code"
      style="color: rgba(255, 255, 255, 1)"
      @click='viewQRcode'></i>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      title: '', // 标题
      showBack: { // 返回箭头 - 默认显示
        type: Boolean,
        default: true
      },
      showText: { // 是否显示title - 默认显示
        type: Boolean,
        default: true
      },
      showQRcodeIco: { // 是否显示二维码图标
        type: Boolean,
        default: false
      }
    },
    methods: {
      viewQRcode () {
        this.$emit('viewQRcode')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header-box
    width 100%
    height 88px
    position fixed
    z-index 5000
    top: 0
    left: 0

  .return
  .qr_code
  .header-text
    font-size 36px
    line-height 88px

  .header-text
    color rgba(102, 102, 102, 1)
    text-align center

  .return
    position absolute
    left 28px
    z-index 5000

  .qr_code
    position absolute
    right 28px
    z-index 5000
</style>
