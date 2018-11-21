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
    return {
      qwer: ''
    }
  },
  created () {
    stream.fetch({
      method: 'post',
      url: '/news/index',
      type: 'json'
    }, (res) => {
      let data = JSON.parse(res.data)
      console.log(data, '0000')
    })
  }
}
</script>

<style scoped>

</style>
