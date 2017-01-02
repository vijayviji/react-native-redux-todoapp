import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import TodoList from './containers/todo_list';
import TodoItemDetail from './containers/todo_item_detail';
import styles from './styles/navbar';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import RootReducer from './reducers';
import { AddTodo } from './action_creators';

const loggerMiddleware = createLogger();

const _tmp = [
   {
      id: 1,
      title: "First",
      description: "description for first"
   },
   {
      id: 2,
      title: "Second",
      description: "description for second"
   },
   {
      id: 3,
      title: "Third",
      description: "description for third"
   }
];

const store = createStore(RootReducer, applyMiddleware(loggerMiddleware));

_tmp.map(item => {
   console.log(item);
   store.dispatch(AddTodo(item.id, item.title, item.description));
});

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
      }
   }

   render() {
      return (
         <Navigator
            initialRoute = {{
               name: 'TodoList',
               title: 'TODO LIST APP',
               state: store.getState()
            }}
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
         if (route.onPress) {
            return (
               <TouchableHighlight
                  onPress={ () => route.onPress() }
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