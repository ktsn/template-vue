import {
  INCREMENT_COUNTER as INCREMENT,
  INCREMENT_ASYNC_COUNTER as INCREMENT_ASYNC
} from '../mutation-types'

const state = {
  count: 0
}

const getters = {
  count: state => state.count
}

const actions = {
  [INCREMENT_ASYNC] ({ commit }, { amount = 1, interval = 1000 }) {
    setTimeout(() => {
      commit(INCREMENT, { amount })
    }, interval)
  }
}

const mutations = {
  [INCREMENT] (state, { amount }) {
    state.count += amount
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
