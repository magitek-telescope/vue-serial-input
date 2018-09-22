<template>
  <input :value="val" @input="updateVal" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      val: ''
    }
  },
  methods: {
    updateVal(event: Event) {
      const target = event.target as HTMLInputElement
      this.val = target.value.replace(/([^-]{4})([^-]{1})/g, '$1-$2')
    }
  }
})
</script>
