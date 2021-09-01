import initialState from "../states";
function reducer(state = initialState, action) {
  if (action.type === "ADD_TODO")
    //return state.todoList.concat(action.text)
    return {
      ...state
    };
  else if (action.type === "REMOVE_TODO")
    return state.filter((todo) => !action.text);
  else return state;
}
export default reducer;
