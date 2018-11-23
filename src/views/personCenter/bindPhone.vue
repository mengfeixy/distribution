<template>
  <div>
    <Header title="绑定手机号"></Header>
    <div class="input-content">
      <div>
        <text>+86</text>
      </div>
      <input v-model="bindPhone" maxlength="11" type="text" placeholder="请输入需要绑定的上级用户手机号">
    </div>
    <button
        :class="bindPhone.length === 11 ? 'default-btn' : 'disable-btn'"
        @click="bindPhoneFun">
      确认
    </button>

    <!-- 弹窗 -->
    <div v-if="showPop">
      <div class="pop-mask" @click="showPop = false"></div>
      <div class="pop-content">
        <div class="content-title">
          <text style="font-size:32px;color: rgba(102, 102, 102, 1);margin-bottom: 20px;">手机号输入不正确</text>
          <text>请重新输入</text>
        </div>
        <div class="confirm-btn">
          <text @click="showPop = false">确认</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'

  export default {
    name: 'bindPhone',
    components: {
      Header
    },
    data () {
      return {
        bindPhone: '',
        showPop: false // 是否显示弹窗
      }
    },
    methods: {
      bindPhoneFun () {
        if (this.bindPhone.length === 11) {
          let phoneRge = /^1[3-9][0-9]{9}$/
          if (phoneRge.test(this.bindPhone)) {
            this.$router.replace('/submitApply')
          } else {
            this.showPop = true
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  defaultFontSize = 32px
  defaultColor = rgba(102, 102, 102, 1)

  .default-btn
    width 92.5%
    height 96px
    background rgba(34, 34, 34, 1)
    -webkit-border-radius 12px
    -moz-border-radius 12px
    border-radius 12px
    color rgba(255, 255, 255, 1)
    text-align center
    margin 0 auto
    outline none

  .disable-btn
    width 92.5%
    height 96px
    background rgba(34, 34, 34, 0.3)
    -webkit-border-radius 12px
    -moz-border-radius 12px
    border-radius 12px
    color rgba(255, 255, 255, 0.3)
    text-align center
    margin 0 auto
    outline none

  .input-content
    width 100%
    height 96px
    margin 108px 0 60px
    background rgba(255, 255, 255, 1)
    flex-direction row
    align-items center

  .input-content
    div
      border-right 2px solid rgba(205, 211, 215, 1)
      margin-right 26px
      padding 0 28px
      p
        font-size defaultFontSize
        color defaultColor
    input
      width 70%
      color defaultColor
      font-size defaultFontSize
      outline none
    ::placeholder
      color rgba(153, 153, 153, 1)

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
    -webkit-transform: translate(-50%, -50%)
    -moz-transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    -o-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)

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

  .confirm-btn
    p
      color rgba(34, 34, 34, 1)
      text-align center
      line-height 96px
</style>
