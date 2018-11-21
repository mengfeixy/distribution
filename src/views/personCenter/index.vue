<template>
  <div>
    <text>个人中心</text>
  </div>
</template>

<script>
let stream = weex.requireModule('stream')

export default {
  name: 'index',
  data () {
    return {}
  },
  created () {
    stream.fetch({
      method: 'get',
      url: '/news/index',
      type: 'json'
    }, (res) => {
      console.log(res, '0000')
    })
  }
}
</script>

<style scoped>

</style>
