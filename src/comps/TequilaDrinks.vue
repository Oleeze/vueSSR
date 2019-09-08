<template>
  <div class="drinkWrapper">
    <div class="drinkItem" v-for="(drink, index) in drinkList" :key="index">
      <img :src="drink.strDrinkThumb">
      <div>
        <h1>{{drink.strDrink}}</h1>
        <p>Ingredients +</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["drinkList", "strDrink", "strDrinkThumb"],
  data() {
    return {};
  },
  methods: {
    next: function() {},
    previous: function() {}
  }
};
</script>

<style>
.drinkWrapper {
  padding: 2em;
}

.drinkItem {
  border: 1px solid black;
  padding: 2em;
  display: flex;
  margin-bottom: 2em;
}

.drinkItem div {
  position: relative;
}

.drinkItem h1 {
  margin: 0;
  align-items: start;
}
.drinkItem p {
  margin: 0;
  bottom: 0;
  position: absolute;
}

.drinkItem img {
  width: 15%;
  margin-right: 2em;
}
</style>