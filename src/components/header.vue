<template>
  <div class="header-box" :style="{background: showText ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}">
    <i
      v-if="showBack"
      class="iconfont return"
      :style="{color: showText ? 'rgba(34, 34, 34, 1)' : 'rgba(255, 255, 255, 1)'}"
      @click="$router.back()">
    </i>
    <text class="header-text" v-if="showText">{{title}}</text>
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
    font-size 36px
    line-height 88px

  .header-text
    color rgba(102, 102, 102, 1)
    text-align center

  .return
    position absolute
    left 28px
    z-index 1000
</style>
