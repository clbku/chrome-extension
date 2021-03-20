import { DatePicker } from "antd";
import React, { Component } from "react";

type State = {
  visible: boolean;
};

type Props = {};

class Calendar extends Component<Props, State> {
  readonly state: State = {
    visible: false,
  };

  handleVisibleChange = (visible: boolean) => {
    this.setState({
      visible,
    });
  };

  render() {
    return <DatePicker />;
  }
}

export default Calendar;
