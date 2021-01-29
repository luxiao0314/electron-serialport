<template>
  <div id="app">
    <serial-port-page/>
  </div>
</template>

<script>
import SerialPortPage from './components/page/SerialPortPage.vue'

export default {
  name: 'App',
  components: {
    SerialPortPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
