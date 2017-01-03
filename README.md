#Todo list app using React Native, Redux and Firebase
This app is a simple todo list app that uses React Native, Redux and Firebase (backend). As apps can very easily be created using these three, this repo will be useful as a reference and boilerplate for such apps.

#App Status
Add Todo, View todo list work fine. Add Todo will add todos in firebase also. Only "Mark as completed" won't get updated in firebase. Everything else works perfect.

#What has to be added in the source?
Add a file called firebase.config.js in 'src' folder. It should export firebase web config. E.g content:
```
const config = {
  apiKey: "demo-key",
  authDomain: "demoapp.firebaseapp.com",
  databaseURL: "https://demoapp.firebase.com",
  messagingSenderId: "0000000"
};
export default config;
```
#How to Run?
* Clone the repository to TodoListApp folder which should contain all the contents
* Run "npm install" inside the TodoListApp
* Now, run "react-native run-ios" (for this, react-native-cli and xcode should have been installed)
