import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo,
      newTodo: ""
    };
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = newTodoText => {
    const UpdatedTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, UpdatedTodo]
    });
  };

  handleSubmit = e => {
    console.log("app", this);
    e.preventDefault();
    this.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          newTodo={this.state.newTodo}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
        />
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
