var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');


var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Go for yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//custom scss
require('style-loader!css-loader!sass-loader!applicationStyles');
//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(<TodoApp/>,document.getElementById('app'));
