import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  background: white;
  padding: 20px;
  max-width: 500px;
  margin: auto;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  align-items: center;

  & span {
    margin-right: 5px;
  }
`;

export const Data = styled.span`
  font-size: 36px;
`;

export const Unit = styled.span`
  color: #ababab;
  margin-left: 5px;
  font-size: 20px;
`;
