<template>
  <div class="keter">
    <header title="keter" :showText="true"></header>
    <div class="space"></div>
    <image :src=imgUrl class="img"></image>
    <div class="button save">保存</div>
    <div class="button share-to">分享</div>
    <div class="button go-to" @click="goToCommissionDetail">查看佣金明细</div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'

  export default {
    name: 'keter',
    components: {
      Header
    },
    data () {
      return {
        imgUrl: ''
      }
    },
    created () {
      this.imgUrl = '/src/assets/images/weixin.jpg'
    },
    methods: {
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
  height auto
  .space
    position fixed
    top 88px
    left 0
    width 100%
    height 10px
    background-color rgba(236, 236, 236, 1)
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
</style>
