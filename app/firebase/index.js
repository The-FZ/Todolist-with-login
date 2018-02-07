import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyATzlPgOnAJV_thXHR-DW4X0GwX_TxNgUA",
      authDomain: "todo-app-4af1a.firebaseapp.com",
      databaseURL: "https://todo-app-4af1a.firebaseio.com",
      projectId: "todo-app-4af1a",
      storageBucket: "todo-app-4af1a.appspot.com",
      messagingSenderId: "190261199756"
    };

  firebase.initializeApp(config);

}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
