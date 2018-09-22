import Vue from 'vue'
import DevelopApp from './develop-app.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DevelopApp)
}).$mount('#app')
