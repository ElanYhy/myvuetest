// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import todolist from './todolist'
import App from './App'

Vue.config.productionTip = false

// Vue.prototype.bus1 = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { todolist },
  template: '<todolist/>'
})
