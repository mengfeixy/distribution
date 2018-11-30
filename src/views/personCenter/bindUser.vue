<template>
  <div>
    <Header title='已绑定用户'></Header>
    <!-- Tab -->
    <div class="verify-content">
      <div @click="tabChange('1')">
        <text :style="{color: type === '1' ? 'rgba(24, 24, 24, 1)' : 'rgba(184, 182, 182, 1)'}">下级用户({{list.length}})</text>
        <div :class="{underline: type === '1'}"></div>
      </div>
      <div @click="tabChange('2')">
        <text :style="{color: type === '2' ? 'rgba(24, 24, 24, 1)' : 'rgba(184, 182, 182, 1)'}">上级用户({{list.length}})</text>
        <div :class="{underline: type === '2'}"></div>
      </div>
    </div>
    <!-- 审定列表 -->
    <div class="verify-list">
      <div class="item-list" v-for="(item, index) in list" :key='index'>
        <div class="left-content">
          <text>{{item.phone}}</text>
        </div>
        <div class='right-content'>
          <text>{{item.date}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  require('@/api/Aom-am')
  let stream = weex.requireModule('stream')

  export default {
    name: 'bindUser',
    components: {
      Header
    },
    data () {
      return {
        type: '1', // 1下级用户 2上级用户
        list: [] // 审核列表
      }
    },
    created () {
      this.dataList()
    },
    methods: {
      /**
       * 标签切换
       * @param type 1下级用户 2上级用户
       */
      tabChange (type) {
        this.type = type
        this.dataList(type)
      },
      /**
       * 请求列表
       * @param type 1下级用户 2上级用户
       */
      dataList (type) {
        stream.fetch({
          method: 'post',
          url: '/bound-user-list',
          type: 'json',
          body: {
            type: type || '1'
          }
        }, (res) => {
          let data = JSON.parse(res.data)
          this.list = data
        })
      }
    }
  }
</script>

<style lang='stylus' scoped>
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
    padding 0 28px
    background rgba(255, 255, 255, 1)
    width 100%
    margin-top 20px

  .verify-list
    >div:last-child
      border none

  .item-list
    flex-direction row
    justify-content space-between
    align-items center
    padding 32px 0
    border-bottom 2px solid rgba(233, 237, 238, 1)
    .left-content
      p
        font-size 32px
        color rgba(102, 102, 102, 1)
    .right-content
      p
        font-size 28px
        color rgba(149, 146, 146, 1)
</style>
