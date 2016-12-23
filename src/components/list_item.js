'use strict';

import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class ListItem extends Component {
   render() {
      return (
         <View style={styles.item}>
            <Image source={require('../images/round.png')} style={styles.img} />
            <Text style={styles.title}>{this.props.children.title}</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   item: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#F6F6F6'
   },
   img: {
      width: 50,
      height: 50
   },
   title: {
      padding: 15
   }
});