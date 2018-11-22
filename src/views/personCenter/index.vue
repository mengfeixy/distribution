<template>
  <div>
    <Header :showText="true"></Header>
    <div class="header">
      <text>个人中心</text>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
let stream = weex.requireModule('stream')

export default {
  name: 'index',
  components: {
    Header
  },
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
  .header {
    width: 100%;
    height: 424px;
    background-color: black;
  }

  .header-box i {
    color: white;
  }
</style>
