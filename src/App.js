import "./styles.css";
import { React, useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions/index";
const mapStateToProps = (state) => {
  return {
    todos: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
    removeTodo: (id) => dispatch(removeTodo(id))
  };
};

const App = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = (todo) => {
    props.addTodo({
      item: todo,
      id: 1 + Math.random()
    });
    setTodo("");
  };
  const removeTodo = (id) => {
    props.removeTodo({
      id: id
    });
    //setTodo("");
  };
  //console.log(props);
  return (
    <div className="App">
      <h1>Redux Todo</h1>
      <input
        type="text"
        placeholder="Add item"
        onChange={(e) => handleChange(e)}
        value={todo}
        s
      />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <br />
      <ul>
        {props.todos.todoList &&
          props.todos.todoList.length > 0 &&
          props.todos.todoList.map((element) => {
            // console.log(element);
            console.log(props.todos.todoList);
            return (
              <>
                <li key={element.id}>
                  {element.item}{" "}
                  <button onClick={() => removeTodo(element.id)}>x</button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
/*item:{
id:2  
item:"xyz"}*/
