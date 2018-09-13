<template>
  <div class="wrap">
    <h1 @click="matexia">Home</h1>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'Home',
  methods: {
    matexia () {
      console.log(123)
    }
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  h1 {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
    font-size: 40px;
    color: #B0BEC5;
    font-weight: normal;
  }
</style>
