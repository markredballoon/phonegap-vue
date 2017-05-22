<template>
  <div class="page page--index">

    <header>
      <h1>Index</h1>
    </header>

    <main>
      <div class="index-list">
        <note-button 
          v-for="note in notes"
          :note="note"
          symbol="plus"></note-button>
      </div>
      <circle-button 
        @clicked="addNew"></circle-button>
    </main>

  </div>
</template>

<script>
import NoteButton from '../components/NoteButton.vue';
import CircleButton from '../components/CircleButton.vue';

export default {
  components:{
    'note-button': NoteButton,
    'circle-button': CircleButton
  },
  computed:{
    notes () {
      return this.$store.state.notes;
    }
  },
  methods:{
    addNew(e){
      this.$store.dispatch('addNote');
    }
  }
}
</script>