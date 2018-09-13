<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="left">
    <FormItem prop="username">
      <Input type="text" v-model="formInline.username" placeholder="用户名" clearable>
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="email" class="forgot__form">
      <Input type="email" v-model="formInline.email" placeholder="邮箱" clearable>
        <Icon type="ios-mail" slot="prepend"></Icon>
      </Input>
      <Button type="primary" @click="sentSubmit">发送验证码</Button>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="邮箱验证码" clearable>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem class="login-site">
      <Button type="primary" @click="handleSubmit('formInline')" long>提交</Button>
    </FormItem>
  </Form>
</template>
<script type="text/babel">
import api from '@/api'
export default {
  name: 'LoginAccount',
  data () {
    return {
      formInline: {
        username: '',
        email: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    sentSubmit () {
      if (this.formInline.username && this.formInline.email) {
        api.account.verificationApi({username: this.formInline.username, email: this.formInline.email}).then((res) => {

        })
      } else {
        this.$Message.warning('请填写用户名及邮箱')
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          api.account.getLogin(this.formInline).then((res) => {
            if (res.success) {
            } else {
              this.$Message.error(res.message)
            }
          })
        }
      })
    }
  },
  mounted () {
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
  .forgot__form{
    /deep/ .ivu-form-item-content{
      height:32px;
      .ivu-input-group{
        width: 65%;
        position: absolute;
        left: 0;
      }
      .ivu-btn-primary{
        position: absolute;
        right: 0;
      }
    }
  }
</style>
