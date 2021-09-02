import initialState from "../states";
function reducer(state = initialState, action) {
  if (action.type === "ADD_TODO") {
    console.log(JSON.stringify(state));

    return { todoList: [...state.todoList, action.text] };
  } else if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todoList: state.todoList.filter((id) => id.id !== action.id.id)
    };

    /*return {
      todoList
    };*/
  } else return state;
}
export default reducer;
//case DELETE_TODO:
/*return {
  iteams: {
    todos: state.iteams.todos.filter(iteam => iteam.id !== parseInt(action.id)),
    buttons: state.iteams.buttons.filter(button => button.id !== parseInt(action.id))
  }
}*/

//todoList:{object1: todo   ,Object2:...}
//todos: Object
//todoList: Array(0)
/*(state, action) => ({
  ...state,
  messages: state.messages.filter((item, index) => index !== action.index)
})*/
/*(state, action) => ({
  ...state,
  messages: state.messages.filter((item, index) => index !== action.index)
})*/
