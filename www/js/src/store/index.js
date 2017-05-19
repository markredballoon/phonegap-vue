import notes from './notes';

/* Store for the app */
export default {
  state: {
    notes
  },
  actions: {
  },
  mutations: {
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