import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { TodoStates } from '../constants';

export default class TodoList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const todos = this.props.todos;

      return (
            <View style={{top: 40, flex: 1}}>
               <List>
                  {
                     todos.map(item => (
                        <ListItem
                           key={ item.id }
                           title={ item.title }
                           titleStyle={
                              (item.state === TodoStates.COMPLETED) ?
                                 { textDecorationLine: 'line-through', textDecorationStyle: 'solid'} :
                                 {}
                           }
                           onPress = { () => { this.props.onItemClick(item.id) }}
                        />
                     ))
                  }
               </List>
            </View>
      );
   }
}