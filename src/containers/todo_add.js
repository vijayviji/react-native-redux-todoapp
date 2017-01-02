import React, { Component } from 'react';
import TodoAddComp from '../components/todo_add';
import { AddTodo } from '../action_creators';
import { NewUUID } from '../utils';

export default class TodoAdd extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <TodoAddComp
            onAdd={(title, description) => {
               this.props.store.dispatch(AddTodo(NewUUID(), title, description));
            }}
         />
      );
   }
}
