import styled from "styled-components";

const Button = styled.button`
  background: #e5e5e5;
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  transition: all 0.1s;
  outline: none;

  &:hover {
    background: #d5d5d5;
  }
`;

export const ButtonGroup = styled.div`
  margin: 5px 0;
  > * {
    margin-right: 5px;
  }
  &:nth-last-child() {
    margin-right: 0;
  }
`;

export default Button;
