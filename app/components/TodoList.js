var React = require('react');
var Todo = require('Todo');

var TodoList =({todos,onToggle})=>{

  var renderTodos = ()=>{
    if(todos.length===0){
      return (
        <p className='container__message'>
          Nothing to do.
        </p>
      )
    }
    return todos.map(todo=>{
      return <Todo key={todo.id} todo={todo} onToggle={onToggle}/>
    });
  }
  return (
    <div>
      {renderTodos()}
    </div>
  )
};

module.exports = TodoList;
