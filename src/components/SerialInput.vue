<template>
  <input class="vue-serial-input" type="text" :value="value" @input="updateVal" />
</template>

<script lang="ts">
import Vue from 'vue'
import { convertToSerial } from '../utils/converter'

export default Vue.extend({
  name: 'vue-serial-input',
  props: {
    value: String
  },
  methods: {
    updateVal(event: Event) {
      const target = event.target as HTMLInputElement
      this.$emit('input', convertToSerial(target.value))
    }
  }
})
</script>

<style scoped>
.vue-serial-input {
  padding: 10px 10px;
  border-radius: 3px;
  border: solid 1px #e5e5e5;
  -webkit-font-smoothing: antialiased;
}
</style>
