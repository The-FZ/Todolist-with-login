import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyATzlPgOnAJV_thXHR-DW4X0GwX_TxNgUA",
    authDomain: "todo-app-4af1a.firebaseapp.com",
    databaseURL: "https://todo-app-4af1a.firebaseio.com",
    projectId: "todo-app-4af1a",
    storageBucket: "todo-app-4af1a.appspot.com",
    messagingSenderId: "190261199756"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name:"Todo App",
    version:"1.0"
  },
  isRunning:true,
  user:{
    name:"Zafar",
    age:25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot)=>{
  console.log('child_added',snapshot.key,snapshot.val());
});

var newTodosRef = todosRef.push({
  text:'Todo 1'
});

var newTodosRef = todosRef.push({
  text:'Todo 2'
});
