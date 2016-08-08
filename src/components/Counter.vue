<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <div class="controls">
      <button type="button" @click="increment()">Increment</button>
      <button type="button" @click="incrementAsync()">Increment Async</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import {
  INCREMENT_COUNTER,
  INCREMENT_ASYNC_COUNTER
} from '../store/mutation-types'

export default {
  computed: mapGetters({
    count: 'count'
  }),

  methods: {
    ...mapActions({
      incrementAsync: INCREMENT_ASYNC_COUNTER
    }),
    ...mapMutations({
      increment: INCREMENT_COUNTER
    })
  }
}
</script>

<style>
</style>
