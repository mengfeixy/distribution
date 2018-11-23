<template>
  <div>
    <header :showBack="false" title="分销规则"></header>
    <div class="container">
      <text class="text">如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他 如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他，
        如果你无法简洁的表达你的想法，那只说明你还不够了解他，如果你无法简洁的表达你的想法，那只说明你还不够了解他</text>
      <div class="join">
        <button type="button" @click="joinDistributon">加入分销</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'

  export default {
    name: 'Join',
    components: {
      Header
    },
    methods: {
      joinDistributon () {
        // todo: go to login page
        alert('go to login page')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position: relative
    margin-top: 88 + 20px
    width: 100%
    height: 100%
    background-color: #fff
    .text
      margin-bottom: 182px
      padding: 40px 32px 0
    .join
      position: fixed
      left: 0
      bottom: 0
      padding: 20px 0
      width: 100%
      background-color: #fff;
      button
        margin: auto
        width: 694px
        text-align: center
        font-size: 36px
        color: #ffffff
        height: 96px
        background-color: #222222
        border-radius: 12px;
</style>
