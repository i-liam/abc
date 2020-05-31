<template>
  <div id="app">
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.app-container {
  width: 990px;
  position: relative;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
