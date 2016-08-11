<template>
  <article>
    <h1>{{ title }}</h1>
    <style-test></style-test>
  </article>
</template>

<script>
import StyleTest from './StyleTest'

export default {
  data: function () {
    return {
      title: 'Hello Vue.js!'
    }
  },
  components: { StyleTest }
}
</script>
