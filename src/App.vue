<template>
  <div id="app">
    <div class="nav">
      <img src="./images/Logo.png">
      <h1>Tequila Cocktails</h1>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style>
body {
  margin: 0;
}

.nav {
  padding: 2em;
  background: black;
  color: white;
  border-bottom: 1px solid pink;
}

.nav img {
  display: inline-block;
  height: 50px;
}

.nav h1 {
  margin: 0;
  display: inline-block;
}
</style>

