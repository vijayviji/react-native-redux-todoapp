import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class TodoList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
            <View style={{top: 40, flex: 1}}>
               <List>
                  {
                     this.props.todo_list.map(item => (
                        <ListItem
                           key={ item.id }
                           title={ item.title }
                           onPress = { () => { this._navigate(item) } }
                        />
                     ))
                  }
               </List>
            </View>
      );
   }

   _navigate(item) {
      this.props.navigator.push({
         name: 'TodoDetail',
         props: {
            todo_item: item
         }
      });
   }
}