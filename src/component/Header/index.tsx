import { mdiCalendarOutline } from "@mdi/js";
import Icon from "@mdi/react";
import moment from "moment";
import React, { Component } from "react";
import { Container, DateLabel, Intro } from "./styled";

export default class Header extends Component<{}> {
  render() {
    return (
      <Container>
        <Intro>{this.props.children}</Intro>

        <div style={{ flex: "1 1 auto" }}></div>
        <div>
          <DateLabel>
            {moment().format("DD-MM-YYYY")}{" "}
            <Icon path={mdiCalendarOutline} size={1} />
          </DateLabel>
        </div>
      </Container>
    );
  }
}
