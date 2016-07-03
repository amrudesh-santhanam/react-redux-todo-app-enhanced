import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkTodo, archiveTodos, setTodoListType } from '../redux/actions';
import TodoList from './component-todo-list';
import AddTodo from './component-addtodo';
import DumbComp from './component-dumb-test';

class ToDos extends Component {
  getFilteredTodos(todo){
    if (this.props.todoData.todosToShow==='active'){
        return !todo.archived;
    } else {
      return todo.archived;
    }
  }
  setTodoListType(state){
    this.props.setTodoListType(state);
  }
  isActiveOnDisplay(){
    return this.props.todoData.todosToShow==='active';
  }
  getListDescription(){
    const todoListToUse = this.props.todoData.todos
      .filter(todo => this.getFilteredTodos(todo));
    const total = _.size(todoListToUse);
    const remaining = _.reduce(todoListToUse,
      (count, item) => {
        if (!item.completed) return count + 1; else return count;
      }, 0);
    const archived = _.reduce(todoListToUse,
      (count, item) => {
        if (item.archived) return count + 1; else return count;
      }, 0);
    if (!this.isActiveOnDisplay()){
      const archivedTasks = archived===1 ? 'task' : 'tasks';
      return (
        <div>
          {archived!==0 ?
            `${archived} archived ${archivedTasks}` :
            `No archived tasks`
          }
        </div>
      );
    }
    return (
      <div>
        {total===0 ?
          `Add a task` :
          total===1 ?
            `1 task remaining` :
            `${remaining} of ${total} tasks remaining`
        }
        <a onClick={() => this.props.archiveTodos()} style={{color: 'grey'}}>
          {total>remaining ? ` [Archive completed todos]` : ``}
        </a>
      </div>
    );
  }
  render(){
    return (
      <div className="container">
        <Link to={`/`}><div style={{marginBottom: '30px'}}>Back</div></Link>
        <h2>Todo List App</h2>
        <div style={{padding: '10px'}}>
          <button className="btn btn-success"
            onClick={() => this.setTodoListType('active')}
            style={{fontWeight: this.isActiveOnDisplay() ? 'bold' : 'normal'}}>
            Active Tasks
          </button>
          <button className="btn btn-warning"
            onClick={() => this.setTodoListType('archived')}
            style={{fontWeight: this.isActiveOnDisplay() ? 'normal' : 'bold'}}>
            Archived Tasks
          </button>
        </div>
        {this.getListDescription()}
        <TodoList />
        {this.isActiveOnDisplay() ? <AddTodo /> : null}
        <DumbComp data={`some data`} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {todoData: state.todoData};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      checkTodo: checkTodo,
      archiveTodos: archiveTodos,
      setTodoListType: setTodoListType
    }
    ,dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDos);
