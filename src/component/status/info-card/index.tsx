import Icon from "@mdi/react";
import React, { Component, Fragment } from "react";
import { Container, Data, Title, Unit } from "./styled";

type Props = {
  title: string;
  titleColor?: string;
  data: string;
  unit?: string;
  icon?: string;
};
export default class InfoCard extends Component<Props> {
  renderData = (data: string) => {
    if (data.includes("h")) {
      const ar = data.split(/[h|m|s]/g);
      return (
        <Fragment>
          {ar[0]}
          <Unit>h</Unit>
          {ar[1]}
          <Unit>m</Unit>
          {ar[2]}
          <Unit>s</Unit>
        </Fragment>
      );
    } else return data;
  };
  render() {
    return (
      <Container>
        <Title>
          <span style={{ color: this.props.titleColor }}>
            {this.props.title}
          </span>
          {this.props.icon && (
            <Icon path={this.props.icon} size={0.7} color={"#dbdbdb"}></Icon>
          )}
        </Title>

        <Data>{this.renderData(this.props.data)}</Data>
        {this.props.unit && <Unit>{this.props.unit}</Unit>}
      </Container>
    );
  }
}
