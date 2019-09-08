// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

Vue.use(Router);

//Each route will map to a component

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      //this will be a dynamic segment, they usually stat with a colon
      { path: '/about', component: About }
    ]
  });
}