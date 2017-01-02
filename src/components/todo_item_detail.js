import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { TodoStates } from '../constants';

export default class TodoItemDetail extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const todo = this.props.todo;
      const btnTitle = 'Mark as ' + ((todo.state === TodoStates.ACTIVE) ?
                                 TodoStates.COMPLETED :
                                 TodoStates.ACTIVE);
      return (
         <Card
            title={ todo.title }
            titleStyle={
               (todo.state === TodoStates.COMPLETED) ?
                  { textDecorationLine: 'line-through', textDecorationStyle: 'solid'} :
                  {}
            }
            containerStyle = {{
               top: 60
            }}
         >
            <Text
               style = {
                  (todo.state === TodoStates.COMPLETED) ?
                     { textDecorationLine: 'line-through', textDecorationStyle: 'solid'} :
                     {}
               }
            >
               { todo.description }
            </Text>
            <Button
               icon={{name: 'done'}}
               backgroundColor='#8BC052'
               buttonStyle={{
                  borderRadius: 0,
                  marginTop: 20,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
               }}
               title={ btnTitle }
               onPress={ this.props.onMarkStateClicked }
            />
         </Card>
      );
   }
}
