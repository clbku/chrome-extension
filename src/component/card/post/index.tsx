import styled from "styled-components";

type Props = {
  id: number;
  title: string;
  published_at: string;
  url: string;
  onClick: () => void;
};

export default function PostCard(props: Props) {
  return (
    <Container onClick={props.onClick}>
      <Title>{props.title}</Title>
      <Time>{props.published_at}</Time>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Time = styled.span`
  font-size: 18px;
  font-style: italic;
  color: gray;
`;
