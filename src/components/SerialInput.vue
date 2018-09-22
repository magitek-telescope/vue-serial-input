<template>
  <input class="vue-serial-input" type="text" :value="formattedValue" @input="updateValue" />
</template>

<script lang="ts">
import Vue from 'vue'
import { convertToSerial } from '../utils/converter'

export default Vue.extend({
  name: 'vue-serial-input',
  props: {
    value: String
  },
  computed: {
    formattedValue() : string {
      return this.value.indexOf('-') + 1 ? this.value : convertToSerial(this.value)
    }
  },
  methods: {
    updateValue(event: Event) {
      const target = event.target as HTMLInputElement
      this.$emit('input', convertToSerial(target.value.replace(/-/g, '')))
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
