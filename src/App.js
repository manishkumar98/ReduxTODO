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
    removeTodo: (item) => dispatch(removeTodo(item))
  };
};

const App = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodod = () => {
    props.addTodo({
      item: todo
    });
    setTodo("");
  };
  console.log(props);
  return (
    <div className="App">
      <h1>Redux Todo</h1>
      <input
        type="text"
        placeholder="Add item"
        onChange={(e) => handleChange(e)}
        value={todo}
      />
      <button onClick={() => addTodod()}>Add Todo</button>
      <br />
      <br />
      <ul>
        {props.todos.todoList.length > 0 &&
          props.todos.todoList.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
