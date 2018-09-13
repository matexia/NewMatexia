<template>
  <Row>
    <Col class="wrap">
      <div><router-view /></div>
    </Col>
  </Row>
</template>
<script type="text/babel">
export default {
  name: 'Account',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  destroyed () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.redirect_uri = from.fullPath
    })
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/scss/env';
  .wrap{
  width: 300px;
  margin:0 auto;
}
</style>
