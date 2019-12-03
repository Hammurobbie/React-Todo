import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
    console.log("super", props);
  }
  toggleComplete = index => {
    return this.setState({ completed: !this.state.completed });
  };

  render() {
    console.log("exact todo", this.props.completed);
    return (
      <div>
        <p
          onClick={this.toggleComplete}
          // onClick={this.toggle(this.props.index)}
          className={this.props.completed ? "complete" : "suckMyDick"}
        >
          {this.props.task}
        </p>
      </div>
    );
  }
}

export default Todo;
