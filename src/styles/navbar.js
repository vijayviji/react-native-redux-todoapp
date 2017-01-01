import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
   flex: 4, 
    flexDirection: 'column', 
    marginTop:100
  },
  leftNavButtonText: {
   fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
   fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
   height: 60,
    backgroundColor: '#efefef'
  },
  title: {
   marginTop:4,
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