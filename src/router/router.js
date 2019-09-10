// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Tequila from '../components/Tequila.vue'

Vue.use(Router);



export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', redirect: '/tequila/1' },
      { path: '/tequila/:id?', name: 'tequila', component: Tequila, meta: { test: "This is tequila" }}
    ]
  });
}