import { Component } from "react";
import styled from "styled-components";
import { Task } from "../../redux/definitions/todo";
import TodoItem from "./Item";

type Props = {
  tasks: Task[];
};
export class TodoBox extends Component<Props> {
  render() {
    return (
      <Container>
        <h1>Todo</h1>
        {this.props.tasks.map((task, index) => (
          <TodoItem
            key={index}
            name={task.name}
            description={task.description}
            from={task.from}
            to={task.to}
          />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
  }
`;
