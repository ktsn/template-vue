<template>
  <div class="app">
    <nav class="nav">
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/counter">Counter</li>
        <li><router-link to="/style_test">Style Test</router-link></li>
      </ul>
    </nav>
    <article class="content">
      <router-view></router-view>
    </article>
  </div>
</template>
