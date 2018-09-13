<template>
  <Form class="form" ref="form" :model="form" :rules="rules">
    <FormItem prop="username">
      <Input type="text" v-model="form.username" placeholder="用户名" clearable>
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="密码" clearable>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="verify_password">
      <Input type="password" v-model="form.verify_password" placeholder="确认密码" clearable>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="onSubmitForm()" long>下一步</Button>
    </FormItem>
    <FormItem class="service_agreement" prop="service_agreement">
      <Checkbox v-model="form.service_agreement">确定并同意</Checkbox>
      <span class="agreement" @click="onTips">《服务协议》</span>
    </FormItem>
  </Form>
</template>
<script type="text/babel">
import api from '@/api'
export default {
  name: 'RegisterTypeForm',
  data () {
    let that = this
    return {
      rules: {
        username: { required: true, message: '用户名不能为空', trigger: 'blur' },
        password: { required: true, message: '密码不能为空', trigger: 'blur' },
        verify_password: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          {
            validator (rule, value, callback, source, options) {
              const errors = []
              if (value !== that.form.password) {
                errors.push(new Error('两次密码不一致'))
              }
              callback(errors)
            }
          }
        ],
        service_agreement: [
          { type: 'boolean', required: true, message: '请勾选同意“服务协议”', trigger: 'change' },
          {
            validator (rule, value, callback, source, options) {
              const errors = []
              if (!value) {
                errors.push(new Error('请勾选同意“服务协议”'))
              }
              callback(errors)
            }
          }
        ]
      },
      form: {
        username: '',
        password: '',
        verify_password: '',
        service_agreement: false
      }
    }
  },
  methods: {
    onTips () {
      this.$Message.destroy()
      this.$Message.error('正在开发中！')
    },
    onSubmitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          api.account.registerApi(this.form).then((res) => {
            if (res.success) {
              this.$emit('on-succeed')
            } else {
              this.$Message.error(res.message)
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/scss/env';
  .form {
    .ivu-form-item{
      margin-bottom: 20px;
    }
    .service_agreement {
      text-align: left;
      /deep/ {
        .ivu-form-item-content {
          line-height: normal;
        }
        .ivu-checkbox-wrapper {
          margin-right: 0;
        }
        .ivu-checkbox {
          margin-right: 5px;
        }
      }
      .agreement {
        color: #3462aa;
        cursor: pointer;
      }
    }
  }
</style>
