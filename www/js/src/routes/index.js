/* START: Imports */
// import the components for the routes here
import Index from './Index.vue';
import Default from './Default.vue';
import Settings from './Settings.vue';
import Note from './Note.vue';
/* END: Imports */




/* EXPORT: Routes */
export default [
  { 
    path: '/', 
    component: Index 
  },
  { 
    path: '/about', 
    component: Default 
  },
  { 
    path: '/settings', 
    component: Settings 
  },
  { 
    path: '*', 
    component: Default 
  },
  { 
    path: '/note/:id', 
    component: Note
  },
]