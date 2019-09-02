<template v-cloak>
  <div>
    <div class="rDWrapper">
      <div class="rDItem active" v-for="(randomDrink, index) of arrayRandom" :key="index">
        <div class="rDPrimary" v-cloak>
          <div class="rDPS">
            <img v-on:load="hello(this)" :src="randomDrink.strDrinkThumb">
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
let self = this;

export default {
  props: ["arrayRandom"],
  data() {
    return {};
  },
  methods: {
    loading: function() {
      console.log("Enitre element has loaded");
    },
    hello: function(key) {
      // console.log(key);
      // console.log("This is the array: ", this.arrayRandom[0]);
    }
  }
};
</script>

<style>
[v-cloak] {
  background: pink;
}

.rDWrapper {
  padding: 2em;
}

.rDItem {
  margin: auto;
  width: 300px;
  border: 1px solid black;
  border-radius: 12px;
  background: white;
  margin-top: 2em;
  z-index: 1;
  animation: keepslidein 0.4s;
}

.rDItem:first-of-type {
  animation: slidein 0.4s;
}

.rDItem img {
  width: 100%;
}
@keyframes slidein {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes keepslidein {
  from {
    opacity: 0;
    transform: translateY(0);
  }

  to {
    opacity: 1;
    transform: translateY(100);
  }
}

.active {
  background: palegreen;
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
[v-cloak] {
  background: pink;
}
</style>
