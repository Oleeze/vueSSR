<template>
  <div>
    <form>
      <div v-for="(liquor, index) of liquors" :key="index">
        <input v-model="checkedLiquor" type="checkbox" :id="liquor" :value="liquor">
        <label :for="liquor">{{liquor}}</label>
      </div>
    </form>
    <button v-on:click="test">Get Drinks</button>
    <h1>Look at all these drinks</h1>
    <h3 v-for="(drink, index) of listOfDrinks" :key="index">Drink {{drink}}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      liquors: ["vodka", "gin", "rum", "tequila", "whiskey"],
      checkedLiquor: [],
      listOfDrinks: []
    };
  },
  methods: {
    test() {
      for (let liquor of this.liquors) {
        axios
          .get("test", { params: { liquor: liquor } })
          .then(res => {
            console.log(res.data);
            this.listOfDrinks.push(res.data);
          })
          .catch(err => console.log(err));
      }

      // this.listOfDrinks.flat(1);
      // console.log("This is the list of drinks" + this.listOfDrinks);
    }
  }
};
</script>