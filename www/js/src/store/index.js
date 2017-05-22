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
    addNote(note){

      const newNote = note || {};

      newNote.id = randomId();

      store.commit('ADDNOTE', newNote);
      
    }
  },
  mutations: {
    ADDNOTE(statem, note){
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