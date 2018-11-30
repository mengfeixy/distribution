<template>
  <div class="withdraw-success">
    <header title="提交申请" :showText="true"></header>
    <div class="content">
      <text>提现成功</text>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'

  export default {
    name: 'withdrawSuccess',
    components: {
      Header
    }
  }
</script>

<style lang="stylus" scoped>
.withdraw-success
  width 100%
  height auto
  .content
    width 100%
    height auto
    margin 98px auto 0
    padding 0 10px
    background-color #fff
</style>
