var React = require('react');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = createReactClass({
handleSubmit:function(event){
  event.preventDefault();
  var {dispatch} = this.props;
  var todoText = this.refs.todoText.value;
  if(todoText.length>0){
    this.refs.todoText.value='';
    dispatch(actions.addTodo(todoText));
  }else{
    this.refs.todoText.focus();
  }
},

render:function(){
  return (
    <div className='container__footer'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref ='todoText' placeholder='What do you need to do ?'/>
        <button className='button expanded'>Add Todo</button>
      </form>
    </div>
  )
}
});

export default connect()(AddTodo);
