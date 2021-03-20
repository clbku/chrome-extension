import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  /* height: 90vh; */
  background-color: #37348e;
  transition: all 0.25s;

  @media (max-width: 880px) {
    width: 0;
  }
`;

export const StatusBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background-color: white;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 12px;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
