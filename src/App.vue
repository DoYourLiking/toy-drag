<template>
  <div id="app">
    <div class="header">
      
    </div>
    <router-view/>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header{
  height: 40px;
  width: 100%;
  background: hsl(240, 6%, 82%);
  line-height: 40px;
}
.footer{
  background: hsl(240, 6%, 82%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
}
</style>
