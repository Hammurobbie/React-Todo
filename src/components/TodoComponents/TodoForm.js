import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.newTodo}
        name="todo"
        placeholder="new todo"
        onChange={props.handleChanges}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
