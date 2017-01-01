import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class TodoItemDetail extends Component {
   constructor(props) {
      super(props);
      console.log(props);
   }

   render() {
      return (
         <Card
            title={ this.props.todo_item.title }
            containerStyle = {{
               top: 60
            }}
         >
            <Text> { this.props.todo_item.description } </Text>
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
               title='Mark As Completed' />
         </Card>
      );
   }
}