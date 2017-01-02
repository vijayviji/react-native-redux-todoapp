import React, { Component } from 'react';
import TodoItemDetailComp from '../components/todo_item_detail'
import { MarkTodo } from '../action_creators';
import { TodoStates } from '../constants';

export default class TodoItemDetail extends Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.unsubscribe = this.props.store.subscribe(() => {
         this.forceUpdate();
      });
   }

   componentWillUnmount() {
      this.unsubscribe();
   }

   render() {
      const todo = this._getTodo(this.props.id, this.props.store.getState().todos);

      return (
         <TodoItemDetailComp
            todo = { todo }
            onMarkStateClicked = {() => {
               const next_todo_state = (todo.state === TodoStates.ACTIVE) ?
                                          TodoStates.COMPLETED :
                                          TodoStates.ACTIVE;
               this._markState(todo.id, next_todo_state);
            }}
         />
      );
   }

   _getTodo(id, todos) {
      return todos.filter(item => {
         if (id === item.id) {
            return item;
         }
      })[0];
   }

   _markState(id, todo_state) {
      this.props.store.dispatch(
         MarkTodo(id, todo_state)
      );
   }
}
