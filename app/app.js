var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

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
