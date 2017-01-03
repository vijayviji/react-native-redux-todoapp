import * as firebase from 'firebase';

 // firebase web configuration has to be here
import firebaseConfig from './firebase.config';
import { AddTodo } from './action_creators';

export default function DBSetup(store) {
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const database = firebaseApp.database();

   _setupEvents(database, store)

   return database;
}

function _setupEvents(database, store) {
   const todoRef = database.ref('todos');

   /**
    * Why we use initialDataLoaded?
    * Since child_added and value events both fire for initial data load, we're
    * skipping child_added until initial data load happens
    * http://stackoverflow.com/questions/19883736/how-to-discard-initial-data-in-a-firebase-db
    */
   var initialDataLoaded = false;

   // setup for reading updates
   todoRef.on('child_added',data => {
      if (initialDataLoaded) {
         const { title, description, state } = data.val();
         store.dispatch(AddTodo(data.key, title, description, state));
      }
   });

   // get initial values
   todoRef.once('value').then(snapshot => {
      var todoList = snapshot.val();
      initialDataLoaded = true;

      snapshot.forEach(data => {
         const { title, description, state } = data.val();
         store.dispatch(AddTodo(data.key, title, description, state));
      });
   });


}
