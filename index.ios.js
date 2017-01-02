'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import App from './src/app';

class TodoListApp extends Component {
   render() {
      return (<App />);
   }
}

AppRegistry.registerComponent('TodoListApp', () => TodoListApp);
