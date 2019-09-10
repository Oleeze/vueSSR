<template>
  <div>
    <div class="pageTracker">
      <h1 v-if="pageIndex > 1" v-on:click="previous()">Prev</h1>
      <div class="pageCount">
        <h1>{{this.$route.params.id}}/</h1>
        <h1>{{ findLastPage(tequilaCocktails) }}</h1>
      </div>
      <h1 v-if="lastPage > pageIndex" v-on:click="next()">Next</h1>
    </div>
    <tequilaDrinks :drinkList="tempCockatils"></tequilaDrinks>
  </div>
</template>
<script>
import TequilaDrinks from "../comps/TequilaDrinks.vue";

export default {
  components: {
    tequilaDrinks: TequilaDrinks
  },
  data() {
    return {
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
      pageIndex: parseInt(this.$route.params.id) || 1,
      lastPage: null,
      tempCockatils: []
    };
  },
  created: function() {
    console.log("YES");
    let placeholder = this.pageIndex * 5 - 5;
    let index = this.pageIndex * 5;
    for (let i = 0 || placeholder; i < index; i++) {
      if (this.tequilaCocktails[i] != undefined) {
        this.tempCockatils.push(this.tequilaCocktails[i]);
      }
    }
  },
  updated: function() {
    this.pageIndex = parseInt(this.$route.params.id);
    // this.nex();
  },
  methods: {
    findLastPage: function(drinks) {
      let num = Math.round(drinks.length / 5);
      this.lastPage = num;
      return num;
    },
    nex: function() {
      let tempCockatils = [];
      let placeholder = this.pageIndex * 5 - 5;
      let index = this.pageIndex * 5;
      for (let i = 0 || placeholder; i < index; i++) {
        if (this.tequilaCocktails[i] != undefined) {
          tempCockatils.push(this.tequilaCocktails[i]);
        }
      }
      this.tempCockatils = tempCockatils;
    },
    next() {
      this.pageIndex += 1;
      this.$router.push({
        name: "tequila",
        params: { id: this.pageIndex }
      });
      this.nex();
    },
    previous() {
      this.pageIndex -= 1;
      this.$router.push({
        name: "tequila",
        params: { id: this.pageIndex }
      });
      this.nex();
    }
  }
};
</script>


<style>
.pageTracker {
  text-align: center;
  border-bottom: 2px solid black;
  padding: 1.5em 0;
}

.pageTracker h1 {
  display: inline-block;
  margin: 0;
}

.pageTracker button {
  padding: 1em 2em;
  background: gray;
  color: white;
  font-size: 18px;
}

.pageCount {
  display: inline-block;
  padding: 0 2em;
}
</style>