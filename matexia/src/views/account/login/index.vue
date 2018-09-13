<template>
  <div class="login">
    <Card>
      <p slot="title">{{ type === 'Account' ? '账号登录' : '扫码登录' }}</p>
      <div class="login__body"><component :is="type"/></div>
      <div class="login__foot"><router-link class="login__foot--forgot" :to="{ name: 'forgot' }" replace>忘记密码</router-link><router-link class="login__foot--register" :to="{ name: 'register' }" replace>注册</router-link></div>
    </Card>
    <div><span @click="handleSubmit1">{{ type === 'Account' ? '扫码登录' : '账号登录' }}</span></div>
  </div>
</template>
<script type="text/babel">
import { Qr, Account } from './components'
export default {
  name: 'Login',
  components: { Qr, Account },
  data () {
    return {
      type: 'Account'
    }
  },
  methods: {
    handleSubmit1 () {
      this.type = this.type === 'Account' ? 'Qr' : 'Account'
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/scss/env';
  .login{
    @include e(foot) {
      height: 20px;
      @include m(forgot) {
        float: left;
      }
      @include m(register) {
        float: right;
      }
    }
  }
</style>
