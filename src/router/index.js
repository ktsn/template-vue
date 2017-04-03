import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'components/Home'
import Counter from 'components/Counter'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/counter', component: Counter }
  ]
})
