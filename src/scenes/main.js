import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, ListView, View } from 'react-native';
import ListItem from '../components/list_item';

export default class Main extends Component {
   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(props.todo_list)
   }

   render() {
      return (
         <View style={{top: 20, flex: 1}}>
            <ListView
               dataSource={this.dataSource}
               renderRow={(rowData) => <ListItem>{rowData}</ListItem>}
               renderSeparator={this._renderSeparator}
            />
         </View>
      );
   }

   _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
      return (
         <View
            key={`${sectionID}-${rowID}`}
            style={{ height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC', }}
         />
      );
   }
}