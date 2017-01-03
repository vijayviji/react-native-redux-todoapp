import React, { Component } from 'react';
import { Alert } from 'react-native';
import TodoAddComp from '../components/todo_add';
import { ResetSaveTodoStatus, SaveTodo } from '../action_creators';
import { SaveTodoStatus } from '../constants';

console.log(SaveTodoStatus);

export default class TodoAdd extends Component {
   constructor(props) {
      super(props);
      this.lastStatusTimestamp = 0;
   }

   componentDidMount() {
      const { store } = this.props;

      this.unsubscribe = store.subscribe(() => {
         this._displayAddTodoStatus(store);
      });
   }

   componentWillUnmount() {
      this.unsubscribe();
   }

   render() {
      const { firebaseDB, store } = this.props
      return (
         <TodoAddComp
            onAdd={(title, description) => {
               store.dispatch(SaveTodo(firebaseDB, title, description));
            }}
         />
      );
   }

   _displayAddTodoStatus(store) {
      const status = store.getState().saveTodoStatus;

      if (typeof status.state === "undefined" ||
          status.state.timestamp === this.lastStatusTimestamp) {
         return;
      }

      switch (status.state) {
         case SaveTodoStatus.SUCCESS:
            Alert.alert("SUCCESS", "Successfully Saved - ID: " + status.context);
            break;
         case SaveTodoStatus.ERROR:
            Alert.alert("FAILURE", "Sorry! Something went wrong!");
            break;
         default:
            return;
      }

      store.dispatch(ResetSaveTodoStatus());
   }
}
