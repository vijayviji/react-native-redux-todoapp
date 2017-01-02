import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   mainContainer: {
      flex: 4,
      flexDirection: 'column',
      marginTop:100
   },
   leftNavButtonText: {
      fontSize: 30,
      marginLeft:10,
      marginTop:10,
      color: '#bdc6cf'
   },
   rightNavButtonText: {
      fontSize: 30,
      marginRight:10,
      marginTop:10,
      color: '#adc6cf'
   },
   nav: {
      height: 65,
      backgroundColor: '#efefef'
   },
   title: {
      marginTop:10,
      fontSize:16
   },
   button: {
      height:60,
      marginBottom:10,
      backgroundColor: '#efefef',
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttonText: {
      fontSize:18
   }
});

export default styles;
