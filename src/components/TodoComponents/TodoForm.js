import React from "react";

const TodoForm = props => {
  console.log("form ", props);

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.newTodo}
        name="todo"
        placeholder="new todo"
        onChange={props.handleChanges}
      ></input>
      <button type="submit">Add Todo</button>
      <button onClick={null}>Clear Completed Todos</button>
    </form>
  );
};

export default TodoForm;
