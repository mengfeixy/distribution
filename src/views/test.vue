<template>
  <div>
    <text @click="linkTo">test</text>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {}
  },
  methods: {
    linkTo () {
      this.$router.push('/personCenter')
    }
  }
}
</script>

<style scoped>

</style>
