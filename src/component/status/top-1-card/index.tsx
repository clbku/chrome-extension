import React, { Component, Fragment } from "react";
import { ColorTag } from "../../color-tag";
import { Data, Unit } from "../info-card/styled";
import { Container } from "./styled";

type Props = {
  duration: string;
  color: string;
};

export default class TopOneCard extends Component<Props> {
  renderData = (data: string) => {
    const ar = data.split(/[h|m|s]/g);
    return (
      <Fragment>
        {ar[0]}
        <Unit>h</Unit>
        {ar[1]}
        <Unit>m</Unit>
      </Fragment>
    );
  };
  render() {
    return (
      <Container>
        <h1>🏆 TOP Visit</h1>
        <h2>
          <ColorTag color={this.props.color}></ColorTag> {this.props.children}
        </h2>
        <p>
          <Data>{this.renderData(this.props.duration)}</Data>
        </p>
      </Container>
    );
  }
}
