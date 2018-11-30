<template>
  <div>
    <Header title="绑定审核"></Header>
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
        <div>
          <text>{{item.phone}}</text>
          <text class="small-text">{{item.date}}</text>
        </div>
        <div class="verify-btns">
          <text class="wait-btn" v-if="item.state === '审核'" @click='goVerify(item.phone)'>审核</text>
          <text v-if="item.state === '等待审核'">等待审核</text>
          <text v-if="item.state === '审核不通过'" style="color: rgba(217, 173, 101, 1);">审核不通过</text>
          <text v-if="item.state === '审核通过'">审核通过</text>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <div v-if="showPop">
      <div class="pop-mask" @click="showPop = false"></div>
      <div class="pop-content">
        <div class="content-title">
          <text>是否通过{{verifyPhone}}</text>
          <text>作为您的下级用户</text>
        </div>
        <div class="content-btns">
          <text
            style="color: rgba(153, 153, 153, 1);border-right: 2px solid rgba(205, 211, 215, 1)"
            @click="showPop = false">拒绝
          </text>
          <text @click="showPop = false">确认</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'
  require('@/api/Aom-am')
  let stream = weex.requireModule('stream')

  export default {
    name: 'bindVerify',
    components: {
      Header
    },
    data () {
      return {
        type: '1', // 1下级用户 2上级用户
        list: [], // 审核列表
        showPop: false, // 审核弹窗
        verifyPhone: '' // 审核的手机号
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
          url: '/bind-verify-list',
          type: 'json',
          body: {
            type: type || '1'
          }
        }, (res) => {
          let data = JSON.parse(res.data)
          this.list = data
        })
      },
      /**
       * 审核下级用户
       * @param phone 要审核的用户
       */
      goVerify (phone) {
        this.verifyPhone = phone
        this.showPop = true
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

  .item-list
    >div
      p
        color rgba(102, 102, 102, 1)
        font-size 32px
    .small-text
      font-size 28px
      color rgba(149, 146, 146, 1)
      margin-top 20px
    .verify-btns
      p
        font-size 28px
        color rgba(34, 34, 34, 1)
    .wait-btn
      width 116px
      height 56px
      background rgba(255, 255, 255, 1)
      border-radius 70px
      border 2px solid rgba(34, 34, 34, 1)
      text-align center
      line-height 56px

  .pop-mask
    background rgba(74, 74, 74, 0.25)
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 6000

  .pop-content
    width 66.7%
    height 296px
    background-color rgba(255, 255, 255, 1)
    -moz-box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    -webkit-box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    border-radius 12px
    position fixed
    z-index 7000
    top 50%
    left 50%
    -webkit-transform translate(-50%, -50%)
    -moz-transform translate(-50%, -50%)
    -ms-transform translate(-50%, -50%)
    -o-transform translate(-50%, -50%)
    transform translate(-50%, -50%)

  .content-title
    height 200px
    width 100%
    border-bottom 2px solid rgba(205, 211, 215, 1)
    flex-direction column
    justify-content center

  .content-title
    p
      font-size 28px
      color rgba(153, 153, 153, 1)
      text-align center

  .content-btns
    height 96px
    flex-direction row

  .content-btns
    p
      width 50%
      text-align center
      line-height 96px
      color rgba(34, 34, 34, 1)
</style>
