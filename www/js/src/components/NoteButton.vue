<template>
	<div class="btn btn--note">
    <router-link :to="'/note/'+note.id">
      {{ note.title || 'New Note' }}
    </router-link>
  </div>
</template>

<script>
/* EXPORT: */
export default {
  name: 'note-button',
  props: {
    note:{
      type: Object,
      default() {
        return {
          id: 0,
          title: '',
          content: ''
        }
      }
    }
  }
}
</script>