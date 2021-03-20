import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
  height: inherit !important;
  margin: auto;
  color: white;
  background-color: #37348e;
  border-radius: 20px;
  padding: 32px;

  & h1 {
    color: white;
    font-size: 24px;
    text-align: center;
  }

  & h2 {
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    justify-content: center;
    font-size: 24px;
  }

  & p {
    text-align: center;
  }
`;
