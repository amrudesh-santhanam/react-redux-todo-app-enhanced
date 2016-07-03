export function checkTodo(item){
  return {
    type: 'CHECK_TODO',
    payload: item
  }
}

export function addTodo(item){
  return {
    type: 'ADD_TODO',
    payload: item
  }
}

export function archiveTodos(){
  return {
    type: 'ARCHIVE_TODOS'
  }
}

export function setTodoListType(state){
  return {
    type: 'SET_TODO_LIST_TYPE',
    payload: state
  }
}
