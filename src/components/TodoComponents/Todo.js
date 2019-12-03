import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
    console.log("super", props);
  }
  toggle = () =>
    !this.state.completed
      ? this.setState({ completed: true })
      : this.setState({ completed: false });

  render() {
    console.log("exact todo", this.props.completed);
    return (
      <div
        onClick={this.toggle}
        className={this.props.completed ? "completed" : ""}
      >
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
