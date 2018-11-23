<template>
  <div>
    <Header :showText="true" title="绑定手机号"></Header>
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
      disabled: true
    }
  },
  created () {
    console.log('bind')
  },
  methods: {
    bindPhoneFun () {
      if (this.bindPhone.length === 11) {
        this.$router.push('/submitApply')
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
</style>
