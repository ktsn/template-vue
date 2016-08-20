<template{{#if_eq template "Pug"}} lang="pug"{{/if_eq}}>
{{#if_eq template "HTML"}}
  <article class="wrapper">
    <h1 class="title">\{{ title }}</h1>
  </article>
{{/if_eq}}
{{#if_eq template "Pug"}}
article.wrapper
  h1.title \{{ title }}
{{/if_eq}}
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

<style{{#if_eq style "SCSS"}} lang="scss"{{/if_eq}} scoped>
.wrapper {
  padding: 50px 0 40px;
}

.title {
  color: #219858;
  font-size: 4.2rem;
  font-weight: normal;
}
</style>
