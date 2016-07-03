const initialState = {
  todosToShow: 'active', // can be changed to 'archived'
  todos: []
};

function todoReducer(state = initialState,action){
  switch (action.type) {
    case 'CHECK_TODO':
      var id = _.findIndex(state.todos,{'text':action.payload});
      var newState = _.clone(state);
      newState.todos[id].completed = !newState.todos[id].completed;
      return newState;
    case 'ADD_TODO':
      // If action is empty, just return state. No change
      if (_.isEmpty(action.payload)) {
        return state;
      }
      // If action already found, then, just return state. No change.
      if (_.findIndex(state.todos,{text: action.payload}) >= 0) {
        return state;
      }
      var newTodo = [{text: action.payload, completed: false, archived: false}];
      var newTodoList = _.union(state.todos,newTodo);
      var newState = _.clone(state);
      newState.todos = newTodoList;
      return newState;
    case 'ARCHIVE_TODOS':
    var newTodoList = [];
      state.todos.map(item => {
        item.archived = item.completed;
        newTodoList = _.union(newTodoList,[item]);
      });
      var newState = _.clone(state);
      newState.todos = newTodoList;
      return newState;
    case 'SET_TODO_LIST_TYPE':
      var newState = _.clone(state);
      newState.todosToShow = action.payload;
      return newState;
    default:
      return state;
  }
}

export default todoReducer;
