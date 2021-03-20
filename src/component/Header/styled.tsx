import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;
  /* align-items: center; */
  padding: 30px 40px 10px 40px;
`;

export const DateLabel = styled.label`
  background: #e5e5e5;
  color: #37348e;
  font-weight: bold;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;

  > * {
    margin-left: 5px;
  }
  width: 166px;
`;

export const Intro = styled.label`
  & h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 0;
  }
  & p {
    font-size: 20px;
    color: #d2d2d2;
  }
`;
