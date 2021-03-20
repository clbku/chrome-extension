import React from "react";
import NameCard from "../../component/status/name-card";
import { NotificationCard } from "../../component/status/notification-card";
import { TodoBox } from "../../component/TodoBox";
import useTodo from "../../hooks/useTodo";
import { BarHeader, Container } from "./styled";

export default function RightBar(props: any) {
  const todos = useTodo();
  console.log(todos.tasks);

  return (
    <Container>
      <BarHeader>
        <NotificationCard />
        <div style={{ flex: "1 1 auto" }} />
        <NameCard />
      </BarHeader>
      <TodoBox tasks={todos.tasks} />
    </Container>
  );
}
