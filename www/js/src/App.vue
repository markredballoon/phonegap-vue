<template>
  <div id="app-main">
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* IMPORTS: */
import Footer from './components/Footer.vue';


const localStorage = window.localStorage;


/* EXPORT: */
export default {
  name: 'App',
  components: {
    'app-footer': Footer
  },
  mounted(){
    this.$nextTick( ()=>{
      this.$store.dispatch('initalQuery');
    } );
  }
} 

</script>