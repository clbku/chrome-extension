import { mdiBell } from "@mdi/js";
import Icon from "@mdi/react";
import React, { Component } from "react";
import styled from "styled-components";

export class NotificationCard extends Component {
  render() {
    return (
      <Container>
        <Icon path={mdiBell} size={1} color="#37348e" />
        <UnRead status={true}></UnRead>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const UnRead = styled.div`
  width: 8px;
  height: 8px;
  background-color: red;
  border: none;
  position: absolute;
  border-radius: 5px;
  top: 15px;
  right: 15px;
  display: ${(props: { status: boolean }) => (!props.status ? "none" : "")};
`;
