<template>
  <article class="note">
    <header>
      <router-link to="/">Back</router-link>
      {{ title }}
    </header>
    <main>
      {{}}
    </main>
  </article>
</template>

<script>
export default {
  name: 'note-view',
  props: {
    noteId:{
      requird: true,
      type: Number
    }
  }
}
</script>