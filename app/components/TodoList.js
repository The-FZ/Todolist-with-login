var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux')


export var TodoList =({todos,onToggle})=>{

  var renderTodos = ()=>{
    if(todos.length===0){
      return (
        <p className='container__message'>
          Nothing to do.
        </p>
      )
    }
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

export default connect(
  (state)=>{
    return {
      todos:state.todos
    }
  }
)(TodoList);
