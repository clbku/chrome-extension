import styled from "styled-components";

type ColorProps = {
  color: string;
};
export const ColorTag = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props: ColorProps) => props.color};
  border: 1px solid black;
  border-radius: 3px;
  display: inline-block;
`;
