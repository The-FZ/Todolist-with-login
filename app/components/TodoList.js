var React = require('react');
var Todo = require('Todo');

var TodoList =({todos})=>{

  var renderTodos = ()=>{
    return todos.map(todo=>{
      return <Todo key={todo.id} todo={todo}/>
    });
  }
  return (
    <div>
      {renderTodos()}
    </div>
  )
};

module.exports = TodoList;
