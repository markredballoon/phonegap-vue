/* START: Imports */
// import the components for the routes here
import Home from './Home.vue';
import Default from './Default.vue';
/* END: Imports */




/* EXPORT: Routes */
export default {
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: Default },
    { path: '*', component: Default }
  ]
};