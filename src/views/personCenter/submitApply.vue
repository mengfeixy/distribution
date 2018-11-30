<template>
  <div>
    <Header title="提交申请"></Header>
    <div class="apply-content">
      <i class="iconfont checkbox-circle-chec"></i>
      <text style="font-size: 32px;color: rgba(102, 102, 102, 1)">绑定申请已提交，等待对方审核通过</text>
      <text style="font-size: 28px;color: rgba(153, 153, 153, 1);margin-top: 40px;">可在“绑定审核”中查看进程</text>
      <button @click="$router.replace('/personCenter')">完成</button>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'

  export default {
    name: 'submitApply',
    components: {
      Header
    },
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  .apply-content
    width 100%
    height 100vh
    padding-top 198px
    background rgba(255, 255, 255, 1)

  .apply-content
    i
    p
    button
      margin 0 auto
    i
      font-size 100px
      margin-bottom 98px
    button
      width 48%
      height 96px
      border 2px solid rgba(34, 34, 34, 1)
      -webkit-border-radius 96px
      -moz-border-radius 96px
      border-radius 96px
      outline none
      background rgba(255, 255, 255, 1)
      color rgba(34, 34, 34, 1)
      text-align center
      margin-top 130px
</style>
