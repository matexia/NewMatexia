<template>
  <Row class="result" type="flex" align="middle" justify="center">
    <Col>
      <div class="result__tips ivu-btn  ">注册成功</div>
      <Button class="result__login" @click="onJumpLogin">立即登录</Button>
    </Col>
  </Row>
</template>
<script type="text/babel">
export default {
  name: 'RegisterTypeResult',
  data () {
    return {
      isRunAnimation: false
    }
  },
  methods: {
    onJumpLogin () {
      this.$router.replace({
        name: 'login'
      })
    }
  },
  async mounted () {
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/scss/env';
  .ivu-col{
    height: 350px;
    width: 100%;
    .result__tips{
      border: 0;
      display: block;
      position: absolute;
      top: 20%;
      left:35%;
    }
    .result__login{
      position: absolute;
      top: 30%;
      left:35%;
    }
  }
</style>
