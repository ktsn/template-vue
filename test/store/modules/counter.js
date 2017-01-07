import assert from 'power-assert'
import sinon from 'sinon'
import { deepClone } from '../../helpers'

import { actions, mutations } from 'store/modules/counter'

import {
  INCREMENT_COUNTER as INCREMENT,
  INCREMENT_ASYNC_COUNTER as INCREMENT_ASYNC
} from 'store/types'

describe('counter mutations', () => {
  const baseState = {
    count: 0
  }
  let state

  beforeEach(() => {
    state = deepClone(baseState)
  })

  it(INCREMENT, () => {
    const payload = { amount: 3 }
    mutations[INCREMENT](state, payload)
    assert(state.count === 3)
  })
})

describe('counter actions', () => {
  it(INCREMENT_ASYNC, () => {
    const commit = sinon.spy()
    const payload = { amount: 5, interval: 0 }
    return actions[INCREMENT_ASYNC]({ commit }, payload)
      .then(() => {
        assert(commit.calledWith(INCREMENT, { amount: payload.amount }))
      })
  })
})
