'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, ListView, View } from 'react-native';
import ListItem from './src/components/list_item';
import MainScene from './src/scenes/main';

class App extends Component {
   render() {
      return (<MainScene todo_list={this._getTodoList()} />);
   }

   _getTodoList() {
      return [
         {
            title: "First",
            description: "description for second"
         },
         {
            title: "Second",
            description: "description for second"
         },
         {
            title: "Third",
            description: "description for third"
         }
      ];
   }
}

AppRegistry.registerComponent('TodoListApp', () => App);
