<template>
  <div class="qr">
    <div class="qr__img">
      <img src="@/assets/img/matexia.png">
    </div>
    <div class="qr__tips">打开<span>微信</span>扫描二维码登录</div>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'LoginQrCode'
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import '~@/assets/scss/env';
  .qr {
    margin: 10px auto 0 auto;
    @include e(title) {
      color: #323232;
      font-size: 24px;
      text-align: center;
      line-height: normal;
      margin-bottom: 10px;
      .icon {
        color: #d82253;
        font-size: 32px;
        margin-right: 10px;
      }
    }
    @include e(img) {
      width: 200px;
      height: 200px;
      border: 1px solid #e5e5e5;
      margin: 0 auto;
      padding: 5px;
      background-color: $white;
      img {
        @include img-responsive()
      }
    }
    @include e(tips) {
      color: #9f9f9f;
      font-size: 14px;
      text-align: center;
      margin-top: 10px;
      span {
        color: #d82253;
        display: inline-block;
        padding: 0 5px;
      }
    }
  }
</style>
