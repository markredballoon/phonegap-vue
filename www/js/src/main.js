/* START: Polyfills */
//require("babel-polyfill");
/* END: Polyfills */




/* START: Imports */
// Vue and plugins
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync'
import axios from 'axios';
// Import store and router
import vuexStore from './store/index';
import vueRoutes from './routes/index';
// Import vue files
import App from './App.vue';
/* END: Imports */




/* START: Vue plugins */
// Add Vuex to Vue
Vue.use(Vuex); 
// Add Vue Router
Vue.use(VueRouter); 
// Add $http vue axios:
Vue.prototype.$http = axios; 
/* END: Vue plugins */




/* START: Vue init */
// Create store
const store = new Vuex.Store(vuexStore);
// Create router
const router = new VueRouter(vueRoutes);
// Sync the router to the store
sync(store, router);  
// initialise the app
const vm = new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
/* END: Vue init */