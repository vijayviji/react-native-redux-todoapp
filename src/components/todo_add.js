import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export default class TodoAdd extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <View
            style = {{
               top: 60
            }}
         >
            <FormLabel>Title</FormLabel>
            <FormInput
               onChangeText={title => { this.setState({title}) }}
            />

            <FormLabel>Description</FormLabel>
            <FormInput
               onChangeText={description => { this.setState({description}) }}
            />

            <Button
               icon={{name: 'add'}}
               title='ADD'
               buttonStyle = {{
                  top:10
               }}
               onPress={() => {
                  const { title, description } = this.state;
                  this.props.onAdd(title, description);
               }}
            />
         </View>
      );
   }
}
