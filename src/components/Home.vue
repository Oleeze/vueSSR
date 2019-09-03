<template>
  <div>
    <div class="randomButtonWrapper">
      <button v-on:click="getRandom">Get Random Drink</button>
    </div>
    <randomDrinkList :arrayRandom="arrayRandom" :itemid="itemid"></randomDrinkList>
  </div>
</template>

<script>
import axios from "axios";
import RandomDrinkList from "../comps/Drink.vue";

export default {
  components: {
    randomDrinkList: RandomDrinkList
  },

  data() {
    return {
      liquors: ["vodka", "gin", "rum", "tequila", "whiskey"],
      // checkedLiquor: [],
      // listOfDrinks: [],
      arrayRandom: [],
      item: 0
    };
  },
  methods: {
    // test() {
    //   for (let liquor of this.liquors) {
    //     axios
    //       .get("test", { params: { liquor: liquor } })
    //       .then(res => {
    //         console.log(res.data);
    //         this.listOfDrinks.push(res.data);
    //       })
    //       .catch(err => console.log(err));
    //   }

    // this.listOfDrinks.flat(1);
    // console.log("This is the list of drinks" + this.listOfDrinks);
    // },
    getRandom() {
      let obj = {
        strDrink: "",
        strAlcoholic: "",
        strGlass: "",
        strInstructions: "",
        strDrinkThumb: "",
        strIngredients: {},
        itemid: this.item
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
        this.item += 1;
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
  display: block;
  z-index: 5;
  position: relative;
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
</style>
<!-- <form>
      <div v-for="(liquor, index) of liquors" :key="index">
        <input v-model="checkedLiquor" type="checkbox" :id="liquor" :value="liquor">
        <label :for="liquor">{{liquor}}</label>
      </div>
    </form>
    <button v-on:click="test">Get Drinks</button>
    <h3 v-for="(drink, index) of listOfDrinks" :key="index">Drink {{drink}}</h3>


        <div v-for="(drink) of arrayRandom" :key="drink.id">
      <randomDrinkList
        :strDrink="drink.strDrink"
        :strAlcoholic="drink.strAlcoholic"
        :strGlass="drink.strGlass"
        :strInstructions="drink.strInstructions"
        :strDrinkThumb="drink.strDrinkThumb"
        :strIngredients="drink.strIngredients"
      ></randomDrinkList>
    </div>