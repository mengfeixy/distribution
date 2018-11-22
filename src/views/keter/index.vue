<template>
  <div class="keter">
    <image :src=imgUrl class="img"></image>
    <text>12313213213</text>
  </div>
</template>

<script>
export default {
  name: 'keter',
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
</style>
