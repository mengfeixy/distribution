<template>
  <div class="keter">
    <header title="测试" showText="true"></header>
    <image :src=imgUrl class="img"></image>
    <text>1231321jsadgfjksagfjksad3213</text>
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
  }
}
</script>

<style lang="stylus" scoped>
.keter
  width: 100%
  height: auto
  &>.img
    width: 240px
    height: 240px
    display: block
    margin-top: 80px;
</style>
