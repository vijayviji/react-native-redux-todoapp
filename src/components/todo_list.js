import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { TodoStates } from '../constants';


/**
 * If this comes as part of class, then somehow the ListView is not showing any data.
 * Keeping it oustide solves the issue.
 * Also check out https://github.com/reactjs/redux/issues/683#issuecomment-156225544
 */
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2} });

export default class TodoList extends Component {

   constructor(props) {
      super(props);
      this.state = {
         dataSource: ds.cloneWithRows(this.props.todos)
      }
      console.log('Rerendering TodoList Component constructor')
   }

   componentWillReceiveProps (newProps) {
      console.log("Receiving new props from TodoList");
      console.log(newProps);
      this.setState({
         dataSource: ds.cloneWithRows(newProps.todos)
      });
   }

   render() {
      console.log('Rerendering TodoList Component', this.props.todos);
      return (
            <View style={{top: 40, flex: 1}}>
               <List>
                  <ListView
                     dataSource={this.state.dataSource}
                     renderRow={ (rowData) => this._renderRow(rowData) }
                     enableEmptySections={true}
                  />
               </List>
            </View>
      );
   }

   _renderRow (rowData) {
      console.log('rendering rowData', rowData);
      return (
         <ListItem
            key={ rowData.id }
            title={ rowData.title }
            titleStyle={
               (rowData.state === TodoStates.COMPLETED) ?
                  { textDecorationLine: 'line-through', textDecorationStyle: 'solid'} :
                  {}
            }
            onPress = { () => { this.props.onItemClick(rowData.id) }}
         />
      );
   }
}
