<template>
  <div class="withdrawal-records">
    <Header title="提现记录" :showText="true"></Header>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        <div>{{item.name}}</div>
        <div><span :class="{'jianshao': item.num < 0}">{{item.num}}</span><br />{{item.date}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  require('@/api/keter/withdrawal_records.js')
  let stream = weex.requireModule('stream')

  export default {
    name: 'withdrawalRecords',
    components: {
      Header
    },
    data () {
      return {
        list: []
      }
    },
    created () {
      stream.fetch({
        method: 'post',
        type: 'json',
        url: '/keter/commission-records'
      }, (res) => {
        let data = JSON.parse(res.data)
        console.log(data, '11111111')
        this.list = data
      })
    }
  }
</script>

<style lang="stylus" scoped>
.withdrawal-records
  width 100%
  height auto
  .header-box
    background-color #fff
  .list
    width 100%
    margin 98px auto 0
    height auto
    padding 0 10px 10px 10px
    box-sizing border-box
    background-color #fff
    li
      list-style-type none
      width 100%
      height 144px
      margin-top 10px
      border-bottom 1px solid rgba(233, 237, 238, 1)
      overflow hidden
      div
        width 50%
        height 144px
        line-height 72px
        display block
        float left
        font-size 16px
        line-height 144px
        &:nth-child(2)
          text-align right
          line-height 72px
          span
            font-size 16px
          .jianshao
            color rgba(217, 173, 101, 1)
</style>
