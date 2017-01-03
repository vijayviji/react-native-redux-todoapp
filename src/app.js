import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

import TodoList from './containers/todo_list';
import TodoItemDetail from './containers/todo_item_detail';
import TodoAdd from './containers/todo_add';

import styles from './styles/navbar';

import { createStore, applyMiddleware } from 'redux';

import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

import thunkMiddleware from 'redux-thunk';

import RootReducer from './reducers';
import { AddTodo } from './action_creators';

import DBSetup from './firebase_setup';

// Store setup
const store = createStore(
   RootReducer,
   applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
   )
);
// Firebase setup
const firebaseDB = DBSetup(store);

const initialRoute = {
   name: 'TodoList',
   title: 'TODO LIST APP',
   rightIcon: {
      name: 'add',
      onPress: (navigator) => {
         navigator.push({
            name: 'TodoAdd',
            title: 'Add Todo'
         });
      }
   },
   state: store.getState()
}

// App with navigation setup
export default class App extends Component {
   constructor(props) {
      super(props);
   }

   _renderScene(route, navigator) {
      console.log('from _renderScene');
      console.log(store.getState());

      switch(route.name) {
         case 'TodoList':
            return (
               <TodoList
                  navigator = { navigator }
                  store = { store }
               />
            );
         case 'TodoDetail':
            return (
               <TodoItemDetail
                  id = { route.props.id }
                  navigator = { navigator }
                  store = { store }
               />
            )
         case 'TodoAdd':
            return (
               <TodoAdd
                  navigator={ navigator }
                  store={ store }
                  firebaseDB= { firebaseDB }
               />
            )
      }
   }

   render() {
      return (
         <Navigator
            initialRoute = { initialRoute }
            renderScene = { this._renderScene }
            navigationBar= {
               <Navigator.NavigationBar
                  style= { styles.nav }
                  routeMapper= { this._navigationBarRouteMapper }
               />
            }
         />
      )
   }

   _navigationBarRouteMapper = {
      LeftButton(route, navigator, index, navState) {
         if(index > 0) {
            return (
               <Icon
                  name='chevron-left'
                  iconStyle={styles.leftNavButtonText}
                  onPress={() => { if (index > 0) { navigator.pop() } }}
               />
            )
         }
         else {
            return null
         }
      },
      RightButton(route, navigator, index, navState) {
         if (route.rightIcon) {
            return (
               <Icon
                  name={route.rightIcon.name}
                  iconStyle={styles.rightNavButtonText}
                  onPress={ () => { route.rightIcon.onPress(navigator) }}
               />
            );
         } else if (route.rightText) {
            return (
               <TouchableHighlight
                  onPress={ () => { route.onPress() } }
               >
                  <Text style={ styles.rightNavButtonText }>
                     { route.rightText || 'Right Button' }
                  </Text>
               </TouchableHighlight>
            )
         }
      },
      Title(route, navigator, index, navState) {
         return <Text style={ styles.title }>{ route.title }</Text>
      }
   }
}
