import { combineReducers } from 'redux';
import _ from 'lodash';
import todoReducer from './todo-reducer';

const rootReducer = combineReducers({
  todoData: todoReducer
});

export default rootReducer;
