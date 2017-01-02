import { Actions, TodoStates, FilterStates } from './constants'
import { Assert } from './utils'

export const AddTodo = (id, title, description) => {
   console.log('From AddTodo');
   console.log(id, title, description);
   return {  // using named params
      type: Actions.ADD_TODO,
      id: id,
      title: title,
      description: description
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
