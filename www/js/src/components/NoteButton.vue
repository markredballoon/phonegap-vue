<template>
	<div class="btn">
    <router-link :to="'/note/'+note.id">
      {{note.title}}<div class="arrow"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'note-button',
  props: ['note']
}
</script>