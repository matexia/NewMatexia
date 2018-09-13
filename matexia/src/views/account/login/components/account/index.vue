<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="left">
    <FormItem prop="username">
      <Input type="text" v-model="formInline.username" placeholder="用户名" clearable>
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="密码" clearable>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="single" class="login-site">
      <Checkbox v-model="single">下次自动登录</Checkbox>
    </FormItem>
    <FormItem class="login-site">
      <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script type="text/babel">
import api from '@/api'
export default {
  name: 'LoginAccount',
  data () {
    return {
      single: '',
      formInline: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          api.account.getLogin(this.formInline).then((res) => {
            if (res.success) {
              this.$store.dispatch('login/login', {
                token: res.id_token,
                user: {
                  user: res.data.username
                }
              })
              sessionStorage.setItem('token', res.id_token)
              if (this.single) {
                this.$matexia.cookie.set('matexiaUserName', this.formInline.username)
                this.$matexia.cookie.set('matexiaPassword', this.$base64.encode(this.formInline.password))
                this.$matexia.cookie.set('matexiaRemember', '1')
              } else {
                this.$matexia.cookie.set('matexiaUserName', this.formInline.username)
                this.$matexia.cookie.del('matexiaPassword')
                this.$matexia.cookie.set('matexiaRemember', '0')
              }
              this.$router.replace({
                name: 'home'
              })
            } else {
              this.$Message.error(res.message)
            }
          })
        }
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.formInline.username = this.$matexia.cookie.get('matexiaUserName')
      if (this.$matexia.cookie.get('matexiaRemember') === '1') {
        this.formInline.password = this.$base64.decode(this.$matexia.cookie.get('matexiaPassword'))
        this.single = true
      } else {
        this.single = false
      }
    })
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  .ivu-form-item{
    margin-bottom: 20px;
  }
  .login-site{
    text-align:left;
  }
</style>
