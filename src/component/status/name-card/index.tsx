import React, { Component } from "react";
import styled from "styled-components";

export default class NameCard extends Component {
  render() {
    return (
      <Container>
        <Name>Ly Hoang</Name>
        <Avatar src="https://i.pravatar.cc/150?img=3"></Avatar>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Avatar = styled.img`
  margin: 10px;
  border-radius: 20px;
  width: 50px;
`;
