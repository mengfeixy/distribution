<template>
  <div class="withdraw-success">
    <Header title="提交申请" :showText="true"></Header>
    <div class="content">
      <text class="success">已申请提现至“钱包 - 个人账户余额”</text>
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
    .success
      width 100%
      height 400px
      line-height 400px
      text-align center
</style>
