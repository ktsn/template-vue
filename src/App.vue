<template lang="pug">
.app
  router-view
  nav.nav
    ul.nav-list
      li.nav-item
        router-link.nav-link(to="/") Home
      li.nav-item
        router-link.nav-link(to="/counter") Counter
</template>

<style lang="scss" scoped>
.app {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 600px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(96, 96, 96, 0.2);
  text-align: center;
  transform: translate(-50%, -50%);
}

.nav-list {
  display: flex;
  width: 100%;
  justify-content: center;
}

.nav-item {
  flex: 1 1 50%;
}

.nav-link {
  display: block;
  padding: 15px 0;
  background-color: #28c470;
  color: #fff;
  text-decoration: none;
  transition: background-color 200ms ease-out;
}

.nav-link:hover {
  background-color: #47d589;
}
</style>
