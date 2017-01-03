import React, { Component } from 'react';
import TodoListComp from '../components/todo_list';

export default class TodoList extends Component {
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
      const todos = this.props.store.getState().todos;
      console.log('Rerendering TodoList Container')
      return (
         <TodoListComp
            todos = { todos }
            onItemClick = { (id) => { this._navigate(id) } }
         />
      );
   }

   _navigate(id) {
      this.props.navigator.push({
         name: 'TodoDetail',
         title: 'Todo Item',
         props: {
            id: id
         }
      });
   }
}
