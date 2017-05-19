<template>
  <footer>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <span>Index</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <span>Settings</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
/*EXPORT:*/
export default {
  name: 'app-footer'
}
</script>