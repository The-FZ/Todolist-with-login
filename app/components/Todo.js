var React = require('react');
var moment = require('moment');

var Todo =({todo,onToggle})=>{
  var {id,text,completed,createdAt,completedAt} = todo;
  var todoClassName = completed ? 'todo todo-completed':'todo';

  var renderDate = () =>{
    var message = 'Created ';
    var timeStamp = createdAt;
    if(completed){
      message = 'Completed ';
      timeStamp = completedAt;
    }

    return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')
  };

  return (
    <div className={todoClassName} onClick={()=>{
      onToggle(id);
    }}>
      <div><input type='checkbox' checked={completed}/></div>
      <div>
      <p>{text}</p>
      <p className='todo__subtext'>{renderDate()}</p>
      </div>
    </div>
  )
};

module.exports = Todo;
