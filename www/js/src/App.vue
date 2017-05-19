<template>
  <div id="app-main">
  	<div>
	  <router-link to="/">Go to Foo</router-link>
	  <router-link to="/about">Go to Bar</router-link>
    </div>
	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
} 
</script>