import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
