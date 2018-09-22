import Vue from 'vue'
import DevelopApp from './dev/develop-app.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DevelopApp)
}).$mount('#app')
