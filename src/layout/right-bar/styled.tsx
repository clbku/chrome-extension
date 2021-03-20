import styled from "styled-components";

export const Container = styled.div`
  width: 33vw;
  height: 90vh;
  background-color: white;
  transition: all 0.25s;

  @media (max-width: 1180px) {
    width: 0;
  }
`;

export const BarHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 20px 10px;
`;
