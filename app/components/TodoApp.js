var React = require('react');
var createReactClass = require('create-react-class');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = createReactClass({
  getInitialState:function(){
    return {
      todos:[
        {
          id:1,
          text:'Walk the cat'
        },
        {
          id:2,
          text:'Clean  the Yard'
        },
        {
          id:3,
          text:'Clean  the Bike'
        },
        {
          id:4,
          text:'Clean  the Clothes'
        }
      ]
    };
  },

  handleAddTodo:function(text){
    alert('new Todo '+text);
  },

  render:function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
