<template>
  <div class="app">
    <nav class="nav">
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/counter">Counter</li>
      </ul>
    </nav>
    <article class="content">
      <router-view></router-view>
    </article>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 1.3;
}

body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt, dd, pre, fieldset {
  margin: 0;
  padding: 0;
}

fieldset {
  border: none;
}

h1, h2, h3, h4, h5, h6, input, button, select, textarea {
  font-size: inherit;
}

input[type="button"], input[type="submit"] {
  -webkit-appearance: button;
}

select {
  -webkit-appearance: menulist-button;
}

textarea {
  font-family: sans-serif;
  line-height: 1;
}

optgroup {
  font-style: normal;
}

ul, ol {
  list-style: none;
}

th {
  text-align: left;
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
</style>
