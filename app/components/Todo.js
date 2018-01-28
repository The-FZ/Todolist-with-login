var React = require('react');

var Todo =({todo})=>{
  var {id,text} = todo;
  return (
    <div>
      {id}.{text}
    </div>
  )
};

module.exports = Todo;
