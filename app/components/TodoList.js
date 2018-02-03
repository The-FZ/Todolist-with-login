var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux')
var TodoAPI = require('TodoAPI');

export var TodoList =({todos,onToggle,showCompleted,searchText})=>{

  var renderTodos = ()=>{
    if(todos.length===0){
      return (
        <p className='container__message'>
          Nothing to do.
        </p>
      )
    }
    return TodoAPI.filterTodos(todos,showCompleted,searchText).map(todo=>{
      return <Todo key={todo.id} todo={todo}/>
    });
  }
  return (
    <div>
      {renderTodos()}
    </div>
  )
};

export default connect(
  (state)=>{
    return state;
  }
)(TodoList);
