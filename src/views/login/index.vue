<template>
  <div>
    <header :showBack="false" title="注册"></header>
    <div class="container">
      <text>login</text>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'

  export default {
    name: 'Login',
    data () {
      return {}
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position relative
    margin-top 88 + 20px
    width 100%
    height 100%
    background-color #fff
</style>
