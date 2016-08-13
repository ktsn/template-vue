import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules
})

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const newModules = require('./modules').default
    store.hotUpdate({
      modules: newModules
    })
  })
}

export default store
