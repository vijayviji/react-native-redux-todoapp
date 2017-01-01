import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight } from 'react-native'
import TodoList from '../components/todo_list'
import TodoItemDetail from '../components/todo_item_detail'
import styles from '../styles/navbar'

export default class MainScene extends Component {
   constructor(props) {
      super(props);
   }

   _renderScene(route, navigator) {
      switch(route.name) {
         case 'TodoList':
            return (
               <TodoList
                  todo_list = { route.props.todo_list }
                  navigator = { navigator }
               />
            );
         case 'TodoDetail':
            return (
               <TodoItemDetail
                  todo_item = { route.props.todo_item }
                  navigator = { navigator }
               />
            )
      }
   }

   render() {
      return (
         <Navigator
            initialRoute = {{
               name: 'TodoList',
               title: 'Hello world',
               props: {
                  todo_list: this.props.todo_list
               }
            }}
            renderScene = { this._renderScene }
            navigationBar={
               <Navigator.NavigationBar
                  style={ styles.nav } 
                  routeMapper= {this._navigationBarRouteMapper}
               />
            }
         />
      )
   }

   _navigationBarRouteMapper = {
      LeftButton(route, navigator, index, navState) {
         if(index > 0) {
            return (
               <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => { if (index > 0) { navigator.pop() } }}
               >
                  <Text style={ styles.leftNavButtonText }>Back</Text>
               </TouchableHighlight>
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
         return <Text style={ styles.title }>TODO LIST APP</Text>
      }
   }
}