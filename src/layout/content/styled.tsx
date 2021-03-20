import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #f9fafc;
  display: flex;
  flex-direction: column;
  /* width: calc(90vw - 100px - 33vw);
  transition: all 0.25s;

  @media (max-width: 1180px) {
    width: calc(90vw - 100px);
  } */
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
`;

export const ChartContainer = styled.div`
  margin: 20px 40px;
  background: white;
  height: 33vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
`;
