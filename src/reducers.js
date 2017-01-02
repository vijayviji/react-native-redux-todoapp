import { Actions, TodoStates, FilterStates } from './constants'
import { Assert } from './utils'

/**
 * NOTE: All Reducers have to be PURE functions. They shouldn't change UI, send requests to network, etc. Given a state
 * and action, they should always return same next state
 */

// Root Reducer
const Root = (state = {}, action) => ({
   todos: todos(state.todos, action),
   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
   searchQuery: searchQuery(state.searchQuery, action)
});
export default Root;

const todos = (state = [], action) => {
   switch (action.type) {
      case Actions.ADD_TODO:
         return [
            ...state,
            {
               id: action.id,
               title: action.title,
               description: action.description,
               state: TodoStates.ACTIVE
            }
         ];
      case Actions.MARK_TODO:
         Assert(typeof TodoStates[action.state] !== 'undefined');
         console.log('From Reducer - ', action.id);
         return state.map(item => {
            console.log(item);
            if (item.id !== action.id) {
               return item;
            }
            console.log('From Reducer 2');
            console.log(TodoStates[action.state]);
            // we can't modify item and so, we've to create a new object
            return {
               ...item,
               state: TodoStates[action.state]
            };
         });
      default:
         return state;
   }
};

const visibilityFilter = (state = FilterStates.ALL, action) => {
   switch(action.type) {
      case Actions.SET_VISIBILITY_FILTER:
         Assert(typeof FilterStates[action.filter] !== 'undefined');
         return FilterStates[action.filter];
      default:
         return state;
   }
};

const searchQuery = (state = '', action) => {
   switch(action.type) {
      case Actions.SET_SEARCH_QUERY:
         return action.q;
      default:
         return state;
   }
}
