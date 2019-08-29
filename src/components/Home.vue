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
        <button v-on:click="getRandom">Get Random Drink</button>

    <div v-for="(randomDrink, index) of arrayRandom" :key="index">
        <p>Name: {{randomDrink.strDrink }}</p>
        <p>Type: {{randomDrink.strAlcoholic}}</p>
        {{randomDrink.strDrinkThumb}}

        <img data-original={{index}} v-bind:src="randomDrink.strDrinkThumb">

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      liquors: ["vodka", "gin", "rum", "tequila", "whiskey"],
      checkedLiquor: [],
      listOfDrinks: [],
      arrayRandom: []
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
    },
    getRandom() {
      let obj = {
        strDrink : '',
        strAlcoholic: '',
        strGlass: '',
        strInstructions: '',
        strDrinkThumb: '',
        strIngredients: {}
      }
      axios.get('/random').then(res => {
        console.log("This is the response: ",res.data[0])
        for (let value in res.data[0]) {
          if (obj.hasOwnProperty(value)) {
            obj[value] = res.data[0][value];
          }
        }
          console.log("This is obj: ",obj)
          this.arrayRandom.push(obj);
          console.log(this.arrayRandom)
      })
    }
  }
};
</script>