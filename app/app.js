var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');


store.subscribe(()=>{
  var state = store.getState();
  console.log('New State', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//custom scss
require('style-loader!css-loader!sass-loader!applicationStyles');
//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app'));
