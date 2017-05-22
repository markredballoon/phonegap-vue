<template>
  <div class="page page--note">
    <header>
      <router-link to="/">Back</router-link>
      <button 
        @click="saveNote">
        Save</button>
    </header>
    <main>

      <input 
        class="title-input" 
        type="text" 
        v-model="title"
      >
      <textarea 
        class="content-input" 
        v-model="content"
      ></textarea>
      
    </main>
  </div>
</template>

<script>

/**
 * Recursive Array Search
 * @param {Array} a - Array
 * @param {String} k - Key
 * @param {any} v - Value
 * @param {Number} n - nth iteration
 */
const recursiveArraySearch = (a, k, v, n) => {
  n = n || 0;
  if (!a || !k || !v || n > a.length){
    return 0;
  }
  if (a[n][k] == v ){
    return n;
  }
  recursiveArraySearch(a, k, v, n+1);
};


export default {
  name: 'note-view',
  methods:{
    saveNote(event){
      const newContent = {
        id: this.theNote.id,
        title: this.title,
        content: this.content,
        edited: Date.now()
      }
      this.$store.dispatch('saveNote', newContent);
    }
  },
  computed: {
    noteId(){
      return this.$route.params.id || 0;
    },
    notes() {
      return this.$store.state.notes;
    },
    theNote(){
      for (let i = 0; i < this.notes.length; i++){
        if ( this.notes[i].id === this.noteId ){
          return this.notes[i];
        }
      }
      return this.$store.state.placeholder;
    }
  },
  data(){
    return {
      title: '',
      content: ''
    }
  },
  mounted: function () {
    console.log(this.theNote);
    this.title = this.theNote.title;
    this.content = this.theNote.content;
  }
}
</script>