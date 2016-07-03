import React, {Component} from 'react';
import { connect } from 'react-redux';
import { checkTodo } from '../redux/actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  todoStyle(status){
    if (status) {
      return {color: 'grey', textDecoration: 'line-through'};
    } else {
      return {color: 'black'};
    }
  }
  getFilteredTodos(todo){
    if (this.props.todoData.todosToShow==='active'){
        return !todo.archived;
    } else {
      return todo.archived;
    }
  }
  showItem(todo){
    return (
      <li key={todo.text}>
        <div style={this.todoStyle(todo.completed)}>
          <input type="checkbox"
            disabled={todo.completed}
            onClick={event => this.props.checkTodo(todo.text)} />
            {` ${todo.text}`}
        </div>
      </li>
    );
  }
  render(){
    return(
      <div>
        <ul>
          {this.props.todoData.todos
            .filter(todo => this.getFilteredTodos(todo))
            .map((todo) => this.showItem(todo))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todoData: state.todoData
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({checkTodo: checkTodo},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
