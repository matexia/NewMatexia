<template>
  <div class="register">
    <!-- <template v-if="type === 'Form'">
      <router-link class="register__back" :to="{ name: 'login' }" replace>&lt; 返回</router-link>
    </template> -->
    <Card class="register__card">
      <p slot="title">{{ type === 'Form' ? '用户注册' : '注册成功' }}</p>
      <component :is="type" @on-succeed="type = 'Result'"/>
      <div class="register__login" v-if="type === 'Form'">
        <router-link :to="{ name: 'login' }" replace>已有账号？<span>立即登录>></span></router-link>
      </div>
    </Card>
  </div>
</template>
<script type="text/babel">
import { Form, Result } from './components'
export default {
  name: 'Register',
  components: { Form, Result },
  data () {
    return {
      type: 'Form'
    }
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/scss/env';
  .register{
    height: 350px;
    @include e(card) {
      height: 350px;
    }
  }
</style>
