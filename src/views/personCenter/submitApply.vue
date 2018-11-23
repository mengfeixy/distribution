<template>
  <div>
    <Header :showText="true" title="提交申请"></Header>
    <div class="apply-content">
      <i class="iconfont checkbox-circle-chec"></i>
      <text>绑定申请已提交，等待对方审核通过</text>
      <text>可在“绑定审核”中查看进程</text>
      <button>完成</button>
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
    },
    created () {
      console.log('in')
    }
  }
</script>

<style lang="stylus" scoped>
  .apply-content
    width 100%
    height 100%
</style>
