import { mdiClock } from "@mdi/js";
import Icon from "@mdi/react";
import { Moment } from "moment";
import React, { Component } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  description: string;
  from?: Moment;
  to?: Moment;
};
export default class TodoItem extends Component<Props> {
  render() {
    return (
      <Container>
        <Color color="red" />
        <Task>
          <span className="p">{this.props.name}</span>
          <br></br>
          <span>{this.props.description}</span>
        </Task>
        {/* <Spanner></Spanner> */}
        <Time>
          {this.props.from && <From>{this.props.from.format("HH:mm")}</From>}
          {this.props.to && <To>{this.props.to.format("HH:mm")}</To>}
          {!this.props.from && !this.props.to ? <From>Today</From> : null}
          <CustomIcon path={mdiClock} size={1} color="#37348e"></CustomIcon>
        </Time>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background: #f9fafc;
  border-radius: 20px;
  margin: 10px;
  margin-top: 0;
`;

const Color = styled.div`
  background-color: ${(props: { color: string }) => props.color};
  width: 8px;
  height: 50px;
  border-radius: 3px;
  margin: 10px;
`;

const Task = styled.span`
  /* width: calc(33vw - 148px); */
  color: black;
  flex: 1 1 auto;
  span {
    font-size: 16px;
    color: #333333;
    font-style: italic;
  }
  & span.p {
    font-weight: bold;
  }
`;

const Time = styled.div`
  flex: 0 0 80px;
  background-color: #e5e5e5;
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const From = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const To = styled.div`
  color: #b1b1b1;
  font-size: 18px;
  font-weight: bold;
`;

const CustomIcon = styled(Icon)`
  position: absolute;
  left: -15px;
`;
