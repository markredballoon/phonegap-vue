<template>
  <div class="page page--index">
  	<h1>Index</h1>

  	<div class="index-list">
  		<note-button note=""></note-button>
  	</div>

  </div>
</template>

<script>
import NoteButton from '../components/NoteButton.vue';

export default {
  components:{
    'note-button': NoteButton
  },
  computed:{
    notes () {
      return this.$store.state.notes;
    }
  }
}
</script>