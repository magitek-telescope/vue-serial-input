<template>
  <div id="app">
    <SerialInput />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SerialInput from './components/SerialInput.vue'

export default Vue.extend({
  name: 'app',
  components: {
    SerialInput
  }
})
</script>

<style>
html,
body {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>
