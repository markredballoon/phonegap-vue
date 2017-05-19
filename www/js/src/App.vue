<template>
  <div id="app-main">
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* IMPORTS: */
import Footer from './components/Footer.vue';


/* EXPORT: */
export default {
  name: 'App',
  components: {
    'app-footer': Footer
  }
} 

</script>