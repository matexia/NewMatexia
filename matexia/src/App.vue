<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    document.addEventListener('visibilitychange', this.changeTitle, false)
  },
  methods: {
    changeTitle () { // 切换标签页后，改变title
      if (document.hidden) {
        document.title = 'leave'
      } else {
        document.title = 'matexia'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
