import { Component } from "react";
import styled from "styled-components";

type Props = {
  active?: boolean;
  onClick?: () => void;
};

export default class NavItem extends Component<Props> {
  render() {
    return (
      <Button active={this.props.active} onClick={this.props.onClick}>
        {this.props.children}
      </Button>
    );
  }
}

const Button = styled.button`
  width: 70px;
  height: 70px;
  margin: 15px;
  border-radius: 20px;
  border: none;
  background-color: ${(props: { active?: boolean }) =>
    props.active ? "#ffffff22" : "transparent"};
  transition: 0.25s;
  color: white;
  outline: none;

  &:hover {
    background-color: #ffffff33;
    /* color: black; */
  }
`;
