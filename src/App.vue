<template>
  <div>
    <input type="text" name="ingredient" v-bind:value="xey">
    <button>Enterrrrrr</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: {
    x: "Enter an ingredient"
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
</style>
