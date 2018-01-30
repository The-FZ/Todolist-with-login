var React = require('react');
var createReactClass = require('create-react-class');
var uuid = require('uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = createReactClass({
  getInitialState:function(){
    return {
      showCompleted:false,
      searchText:'',
      todos:[
        {
          id:uuid(),
          text:'Walk the cat'
        },
        {
          id:uuid(),
          text:'Clean  the Yard'
        },
        {
          id:uuid(),
          text:'Clean  the Bike'
        },
        {
          id:uuid(),
          text:'Clean  the Clothes'
        }
      ]
    };
  },

  handleAddTodo:function(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text:text
        }
      ]
    });
  },

  handleSearch:function(showCompleted, searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },


  render:function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
