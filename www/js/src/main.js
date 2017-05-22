/* START: Polyfills */
//require("babel-polyfill");
/* END: Polyfills */




/* START: Imports */
// Vue and plugins
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync'; // Keeps store and router in sync 
import axios from 'axios'; // For http communication
// Import store and router
import vuexStore from './store/index';
import routes from './routes/index';
// Import vue files
import App from './App.vue';
import Header from './components/Header.vue';
/* END: Imports */




/* START: Vue plugins */
// Add Vuex to Vue
Vue.use(Vuex); 
// Add Vue Router
Vue.use(VueRouter); 
// Add $http vue axios:
Vue.prototype.$http = axios; 
/* END: Vue plugins */




/* START: Global Components */
Vue.component('app-header', {
  template: Header
})
/* END: Global Components */




/* START: Vue init */
// Create store
const store = new Vuex.Store({
  ...vuexStore,
  strict: true
});

// Create router
const router = new VueRouter({
  routes,
  mode: 'history'
});
// Sync the router to the store
sync(store, router);  
// initialise the app
window.vm = new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
/* END: Vue init */