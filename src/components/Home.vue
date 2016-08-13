<template>
  <article class="wrapper">
    <h1 class="title">{{ title }}</h1>
  </article>
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

<style scoped>
.wrapper {
  padding: 50px 0 40px;
}

.title {
  color: #219858;
  font-size: 4.2rem;
  font-weight: normal;
}
</style>
