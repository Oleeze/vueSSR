<template >
  <div>
    <transition-group name="list" class="rDWrapper">
      <div
        :class="{ ohYeah: isActive }"
        class="rDItem"
        v-for="(randomDrink) of arrayRandom"
        :key="randomDrink.itemid"
        ref="item"
      >
        <div class="rDPrimary">
          <div class="rDPS">
            <img v-on:load="hello()" :src="randomDrink.strDrinkThumb">
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
    </transition-group>
  </div>
</template>

<script>
export default {
  props: [
    "strDrink",
    "strDrinkThumb",
    "strAlcoholic",
    "strGlass",
    "strIngredients",
    "strInstructions",
    "arrayRandom",
    "itemid"
  ],
  data() {
    return {
      isActive: true,
      id: 0
    };
  },
  methods: {
    hello: function() {
      this.$refs.item[this.id].classList.remove("ohYeah");
      this.id += 1;
    }
  }
};
</script>

<style>
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
}

.rDItem img {
  width: 100%;
}

.list-enter-active {
  transition: opacity 2.5s;
  animation: slidein 0.4s;
}

.list-enter {
  opacity: 0;
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
.ohYeah:first-of-type {
  visibility: hidden;
}
</style>
