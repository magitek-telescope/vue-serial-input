<template>
  <div id="app">
    <DevelopCorner />
    <header>
      <h1>vue-serial-input</h1>
      <p><small>Simple serialcode input form for Vue.js</small></p>
      <p>
        <code class="code">
          yarn add vue-serial-input
        </code>
      </p>
    </header>
    <main class="card">
      <SerialInput placeholder="XXXX-YYYY-ZZZZ" v-model="serialcode" />
      <code class="code2">
        <pre>{{sampleCode}}</pre>
      </code>
    </main>
    <footer>
      <p>
        <small>&copy; 2018 HANATANI Takuma(<a href="https://twitter.com/potato4d">@potato4d</a>)</small>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DevelopCorner from './develop-corner.vue'
import SerialInput from '../components/SerialInput.vue'

export default Vue.extend({
  name: 'app',
  data() {
    return {
      serialcode: ''
    }
  },
  components: {
    SerialInput,
    DevelopCorner
  },
  computed: {
    sampleCode() {
      return `<vue-serial-input v-model="value1">
</vue-serial-input>`
    }
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

* {
  box-sizing: border-box;
}

#app .vue-serial-input {
  width: 300px;
  padding: 10px 20px;
  font-size: 30px;
  border-radius: 0;
  border: solid 2px #e5e5e5;
  outline: none;
  transition: all 0.2s ease-out;
}

#app .vue-serial-input:focus {
  border: solid 2px #79d2fb;
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
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#fbfbfb, #f0f0f0);
}

h1 {
  margin-bottom: 0;
}
h1 + p {
  margin-top: 0.5em;
  margin-bottom: 0;
}

.code {
  display: inline-block;
  padding: 10px;
  color: #b9c0ca;
  border-radius: 3px;
  background: #282c33;
  margin-bottom: 0.5rem;
}

.code2 {
  width: 300px;
  display: inline-block;
  padding: 5px 10px;
  color: #b9c0ca;
  background: #282c33;
  margin-bottom: 0.5rem;
  text-align: left;
  /* margin-top: 1.0em; */
}

.card {
  margin: 15px;
  width: 600px;
  max-width: calc(100vw - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
