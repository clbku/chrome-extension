import { mdiCogOutline, mdiMonitorDashboard, mdiNewspaper } from "@mdi/js";
import Icon from "@mdi/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import NavItem from "../../component/nav-item";
import { RootState } from "../../redux";
import { switchScreen } from "../../redux/actions/app";
import { ScreenType } from "../../redux/definitions/typed";
import { Action, Container, StatusBox } from "./styled";

const mapStateToProps = (state: RootState) => ({
  screen: state.app.screen,
});

const mapDispatchToProps = { switchScreen };

type Props = {} & ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class LeftBar extends Component<Props> {
  render() {
    return (
      <Container>
        <StatusBox>WORKING</StatusBox>
        <Action>
          <NavItem
            active={this.props.screen === ScreenType.DASHBOARD}
            onClick={() => this.props.switchScreen(ScreenType.DASHBOARD)}
          >
            <Icon path={mdiMonitorDashboard} size={2}></Icon>
          </NavItem>
          <NavItem
            active={this.props.screen === ScreenType.NEWS}
            onClick={() => this.props.switchScreen(ScreenType.NEWS)}
          >
            <Icon path={mdiNewspaper} size={2}></Icon>
          </NavItem>
          <NavItem
            active={this.props.screen === ScreenType.SETTING}
            onClick={() => this.props.switchScreen(ScreenType.SETTING)}
          >
            <Icon path={mdiCogOutline} size={2}></Icon>
          </NavItem>
        </Action>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
