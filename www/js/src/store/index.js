import notes from './notes';

const randomId = () => {
  return (new Date().getTime()).toString(16);
};

const storage = window.localStorage;

const loadNotes = () => {
  return JSON.parse(storage.getItem('notes'));
}
const saveNotes = (notes) => {
  storage.setItem('notes', JSON.stringify(notes));
}

/* Store for the app */
export default {
  state: {
    notes,
    currentNote: 0,
    placeholder: {
      id: 0,
      title: '',
      content: '',
      edited: 0,
      created: 0
    },
    fontSizes: {
      base: 20,
      small: 16,
      medium: 26,
      large: 32
    }
  },
  actions: {
    addNote(context, note){
      const newNote = note || { title:'', content:'' };
      newNote.id = randomId();
      context.commit('ADDNOTE', newNote); 
    },
    saveNote(context, data){
      context.commit('UPDATENOTE', data);
    },
    initalQuery (context){
      const storedData = loadNotes();
      if (storedData){
        context.commit('UPDATENOTESBULK', storedData);
      }
    }
  },
  mutations: {
    ADDNOTE(state, note){
      state.notes.push(note);
      saveNotes(state.notes);
    },
    UPDATENOTE(state, newData){
      let currentNote;
      for (let i = 0; i < state.notes.length; i++){
        if ( state.notes[i].id === newData.id ){
          currentNote = i;
          break;
        }
      }
      state.notes[currentNote] = newData;
      saveNotes(state.notes);
    },
    UPDATENOTESBULK(state, data){
      state.notes = data;
    }
  },
  getters: {
    notes(){
      return this.state.notes;
    }
  },  
  modules: {
  },
};