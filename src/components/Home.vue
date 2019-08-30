<template>
  <div>
    <div class="randomButtonWrapper">
      <button v-on:click="getRandom">Get Random Drink</button>
    </div>

    <div class="randomDrinksWrapper">
      <div class="randomDrinkItem" v-for="(randomDrink, index) of arrayRandom" :key="index">
        <p>Name: {{randomDrink.strDrink }}</p>
        <p>Type: {{randomDrink.strAlcoholic}}</p>
        <p>Glass: {{randomDrink.strGlass}}</p>
        <p>Instructions: {{randomDrink.strInstructions}}</p>
        <p>Ingredients:</p>
        <p
          v-for="(value, name, index) in randomDrink.strIngredients"
          :key="index"
        >{{name}} : {{value}}</p>
        <img data-original="{{index}}" v-bind:src="randomDrink.strDrinkThumb">
      </div>
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
        strDrink: "",
        strAlcoholic: "",
        strGlass: "",
        strInstructions: "",
        strDrinkThumb: "",
        strIngredients: {}
      };
      axios.get("/random").then(res => {
        for (let value in res.data[0]) {
          if (res.data[0][value] && res.data[0][value].length > 2) {
            if (obj.hasOwnProperty(value)) {
              obj[value] = res.data[0][value];
            } else if (value.includes("strIngredient")) {
              obj.strIngredients[res.data[0][value]] =
                res.data[0]["strMeasure" + value.slice(-1)];
            }
          }
        }
        this.arrayRandom.unshift(obj);
      });
    }
  }
};
</script>

<style>
body {
  background: lightgray;
  margin: 0;
}

.randomButtonWrapper {
  background: white;
  padding: 2em;
}

.randomButtonWrapper button {
  display: block;
  margin: auto;
  padding: 1em;
}

.randomDrinksWrapper {
  padding: 2em;
}

.randomDrinkItem {
  border: 1px solid black;
  border-radius: 12px;
  background: white;
  padding: 1em;
  margin-top: 2em;
}
</style>
<!-- <form>
      <div v-for="(liquor, index) of liquors" :key="index">
        <input v-model="checkedLiquor" type="checkbox" :id="liquor" :value="liquor">
        <label :for="liquor">{{liquor}}</label>
      </div>
    </form>
    <button v-on:click="test">Get Drinks</button>
    <h3 v-for="(drink, index) of listOfDrinks" :key="index">Drink {{drink}}</h3>