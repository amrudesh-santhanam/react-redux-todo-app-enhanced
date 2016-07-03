import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../redux/actions';

class AddTodo extends Component {

  constructor(props){
    super(props);
    this.state = {newTodo: ''};
  }

  changeState(value){
    this.setState(
      {newTodo: value}
    );
  }

  addTodo(){
    this.props.addTodo(this.state.newTodo);
    this.setState(
      {newTodo: ''}
    );
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="Enter task name"
          style={{border: '1px solid'}}
          value={this.state.newTodo}
          onChange={(event) => this.changeState(event.target.value)} />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTodo},dispatch);
}

export default connect(null,mapDispatchToProps)(AddTodo);
