<template>
  <div>
    <Header :showText="true" title="提交申请"></Header>
    <div style="margin-top: 104px;">
      <i class="iconfont checkbox-circle-chec"></i>
      <text>绑定申请已提交，等待对方审核通过</text>
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

<style scoped>

</style>
