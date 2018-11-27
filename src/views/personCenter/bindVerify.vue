<template>
  <div>
    <Header title="绑定审核"></Header>
    <div class="verify-content">
      <div @click="tabChange('1')">
        <text :style="{color: type === '1' ? 'rgba(24, 24, 24, 1)' : 'rgba(184, 182, 182, 1)'}">下级用户(3)</text>
        <div :class="{underline: type === '1'}"></div>
      </div>
      <div @click="tabChange('2')">
        <text :style="{color: type === '2' ? 'rgba(24, 24, 24, 1)' : 'rgba(184, 182, 182, 1)'}">上级用户(12)</text>
        <div :class="{underline: type === '2'}"></div>
      </div>
    </div>
    <!-- 审定列表 -->
    <div class="verify-list">
      <div>
        <div>
          <text>13554550888</text>
          <text>2017-11-24 15:08</text>
        </div>
        <div>
          <text>审核</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'

  export default {
    name: 'bindVerify',
    components: {
      Header
    },
    data () {
      return {
        type: '1' // 1下级用户 2上级用户
      }
    },
    methods: {
      /**
       * 标签切换
       * @param type 1下级用户 2上级用户
       */
      tabChange (type) {
        this.type = type
      },
      dataList () {
        console.log('列表')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .verify-content
    width 100%
    height 88px
    background rgba(255, 255, 255, 1)
    margin-top 88px
    flex-direction row

  .verify-content
    >div
      width 50%
    p
      text-align center
      line-height 88px
      font-size 32px
      color rgba(184, 182, 182, 1)

  .underline
    height 8px
    width 100px
    background rgba(34, 34, 34, 1)
    margin 0 auto
    position relative
    bottom 8px

  .verify-list
    margin-top 20px
    padding 0 28px
</style>
