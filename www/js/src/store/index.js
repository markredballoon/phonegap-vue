import notes from './notes';

const randomId = () => {
  return (new Date().getTime()).toString(16);
};

/* Store for the app */
export default {
  state: {
    notes
  },
  actions: {
    addNote(context, note){

      const newNote = note || { title:'', content:'' };
      newNote.id = randomId();
      context.commit('ADDNOTE', newNote);
      
    }
  },
  mutations: {
    ADDNOTE(state, note){
      state.notes.push(note);
    }
  },
  getters: {
    notesList(){
      return this.state.notes;
    },
    notesId(id){
      return this.state.notes[id];
    }
  },  
  modules: {
  }
};