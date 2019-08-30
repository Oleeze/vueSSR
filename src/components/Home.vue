<template>
  <div>
    <div class="randomButtonWrapper">
      <button v-on:click="getRandom">Get Random Drink</button>
    </div>

    <div class="rDWrapper">
      <div class="rDItem" v-for="(randomDrink, index) of arrayRandom" :key="index">
        <div class="rDPrimary">
          <div class="rDPS">
            <img data-original="{{index}}" v-bind:src="randomDrink.strDrinkThumb">
          </div>
          <div class="rDPS">
            <p>Name: {{randomDrink.strDrink }}</p>
            <p>Type: {{randomDrink.strAlcoholic}}</p>
            <p>Glass: {{randomDrink.strGlass}}</p>
            <p>
              <u>Ingredients</u>
            </p>
            <p
              v-for="(value, name, index) in randomDrink.strIngredients"
              :key="index"
            >{{name}} : {{value}}</p>
          </div>
        </div>

        <p class="underLine">Instructions</p>

        <p>{{randomDrink.strInstructions}}</p>
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
  background: #90ddf0;
  margin: 0;
}

.randomButtonWrapper {
  background: #23395b;
  padding: 2em;
}

.randomButtonWrapper button {
  display: block;
  margin: auto;
  padding: 2em;
  font-size: 24px;
  background: #d81e5b;
  color: white;
  border-radius: 24px;
  border: 1px solid white;
  cursor: pointer;
}

.rDWrapper {
  padding: 2em;
}

.rDItem {
  border: 1px solid black;
  border-radius: 12px;
  background: white;
  padding: 4em;
  margin-top: 2em;
}

.rDItem img {
  width: 100%;
}

.rDPrimary {
  display: flex;
  align-items: center;
  text-align: center;
}

.rDPS {
  flex: 1;
}

.underLine {
  border-bottom: 1px solid black;
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