import { Actions, TodoStates, FilterStates } from './constants'
import { Assert } from './utils'

export const SetSaveTodoInflight = () => {
   return {
      type: Actions.SET_SAVE_TODO_INFLIGHT,
      timestamp: Date.now()
   };
};

export const SetSaveTodoSuccess = (id) => {
   return {
      type: Actions.SET_SAVE_TODO_SUCCESS,
      id,
      timestamp: Date.now()
   };
};

export const SetSaveTodoErr = (err) => {
   return {
      type: Actions.SET_SAVE_TODO_ERR,
      err,
      timestamp: Date.now()
   };
};

export const ResetSaveTodoStatus = () => {
   return {
      type: Actions.RESET_SAVE_TODO_STATUS
   }
}

export const AddTodo = (id, title, description, state) => {
   return {
      type: Actions.ADD_TODO,
      id,
      title,
      description,
      state
   }
};

export const MarkTodo = (id, todoState) => {
   Assert(typeof TodoStates[todoState] !== 'undefined');

   return {
      type: Actions.MARK_TODO,
      id: id,
      state: TodoStates[todoState]
   };
};

export const SetSearchQuery = q => ({
   type: Actions.SET_SEARCH_QUERY,
   q
});

export const SetVisibilityFilter = (filter) => {
   Assert(typeof FilterStates[filter] !== 'undefined');

   return {
      type: Actions.SET_VISIBILITY_FILTER,
      filter:  [filter]
   };
};

export const SaveTodo = (firebaseDB, title, description) => dispatch => {
   const todoRef = firebaseDB.ref('todos');

   dispatch(SetSaveTodoInflight);

   todoRef.push({
      title,
      description,
      state: TodoStates.ACTIVE
   }).then(todoRef => {
      dispatch(SetSaveTodoSuccess(todoRef.key));
   }, (err) => {
      dispatch(SetSaveTodoErr(err));
   });
}
