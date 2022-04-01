import Vue from 'vue'
import App from './App.vue'
import LchUI from '../packages/index'

Vue.config.productionTip = false
Vue.use(LchUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
