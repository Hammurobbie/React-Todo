import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

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
      newTodo: "",
      completed: false
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

  toggleComplete = todoId => {
    // return this.setState({ completed: !this.state.completed });
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  checkifComplete = todo => {
    console.log(todo.completed);
    if (todo.completed === false) {
      return todo;
    }
  };

  clearCompleted = () => {
    const completedFilter = this.state.todo.filter(
      task => task.completed === false
    );
    this.setState({ todo: completedFilter });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          newTodo={this.state.newTodo}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          todo={this.state.todo}
          clear={this.clearCompleted}
        />
        <button onClick={this.clearCompleted}>Clear Completed Todos</button>
        <TodoList todo={this.state.todo} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
