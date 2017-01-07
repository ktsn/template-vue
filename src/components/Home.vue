<template lang="pug">
article.wrapper
  h1.title {{ title }}
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Hello Vue.js!'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px 0 40px;
}

.title {
  color: #219858;
  font-size: 4.2rem;
  font-weight: normal;
}
</style>
