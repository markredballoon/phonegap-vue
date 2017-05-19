<template>
  <div id="app-main">
    <div>
      <router-link to="/">Go to index</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/settings">settings</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
} 
</script>