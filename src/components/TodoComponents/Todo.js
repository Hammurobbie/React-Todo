import React from "react";
import styled from "styled-components";

const TodoDiv = styled.div`
  background-color: white;
  width: 100%;
`;

class Todo extends React.Component {
  render() {
    return (
      <TodoDiv
        // in order to use argument parameters in functions, a callback must be used
        onClick={() => this.props.toggleComplete(this.props.id)}
        // onClick={this.toggle(this.props.index)}
        className={this.props.completed ? "complete" : "incomplete"}
      >
        <p>{this.props.task}</p>
      </TodoDiv>
    );
  }
}

export default Todo;
