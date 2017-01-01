'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import MainScene from './src/scenes/main_scene';
//import ItemDetailScene from './src/scenes/item_detail'
//import AddItemScene from './src/scenes/add_item'

class App extends Component {
   render() {
      return (<MainScene todo_list={this._getTodoList()} />);
      //return (<ItemDetailScene title="First" description="description for First" />)
      //return (<AddItemScene />)
   }

   _getTodoList() {
      return [
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
   }
}

AppRegistry.registerComponent('TodoListApp', () => App);
