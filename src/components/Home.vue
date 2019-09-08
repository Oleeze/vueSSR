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
      arrayRandom: [],
      item: 0,
      tequilaCocktails: [
        {
          strDrink: "110 in the shade",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
          idDrink: "15423"
        },
        {
          strDrink: "3-Mile Long Island Iced Tea",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
          idDrink: "15300"
        },
        {
          strDrink: "Adam Bomb",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/tpxurs1454513016.jpg",
          idDrink: "16333"
        },
        {
          strDrink: "Amaretto Stone Sour #3",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/wutxqr1472720012.jpg",
          idDrink: "16100"
        },
        {
          strDrink: "Apple Grande",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/wqrptx1472668622.jpg",
          idDrink: "16289"
        },
        {
          strDrink: "Bloody Maria",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
          idDrink: "11112"
        },
        {
          strDrink: "Blue Margarita",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
          idDrink: "11118"
        },
        {
          strDrink: "Brave Bull Shooter",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/yrtypx1473344625.jpg",
          idDrink: "13068"
        },
        {
          strDrink: "Cherry Electric Lemonade",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg",
          idDrink: "17174"
        },
        {
          strDrink: "Downshift",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
          idDrink: "16991"
        },
        {
          strDrink: "Long Island Iced Tea",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg",
          idDrink: "17204"
        },
        {
          strDrink: "Margarita",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
          idDrink: "11007"
        },
        {
          strDrink: "Moranguito",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
          idDrink: "16196"
        },
        {
          strDrink: "Paloma",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
          idDrink: "17253"
        },
        {
          strDrink: "Radioactive Long Island Iced Tea",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/rdvqmh1503563512.jpg",
          idDrink: "16984"
        },
        {
          strDrink: "Strawberry Margarita",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
          idDrink: "12322"
        },
        {
          strDrink: "Tequila Fizz",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
          idDrink: "12362"
        },
        {
          strDrink: "Tequila Slammer",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/43uhr51551451311.jpg",
          idDrink: "178307"
        },
        {
          strDrink: "Tequila Sour",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/ek0mlq1504820601.jpg",
          idDrink: "12370"
        },
        {
          strDrink: "Tequila Sunrise",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
          idDrink: "13621"
        },
        {
          strDrink: "Tequila Surprise",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/8189p51504735581.jpg",
          idDrink: "14602"
        },
        {
          strDrink: "Tommy's Margarita",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
          idDrink: "17216"
        },
        {
          strDrink: "Vampiro",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/yfhn371504374246.jpg",
          idDrink: "17217"
        },
        {
          strDrink: "Whitecap Margarita",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
          idDrink: "16158"
        }
      ],
      pageIndex: 1
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