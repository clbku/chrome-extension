import React, { Component } from "react";
import { connect } from "react-redux";
import { FeatureBeingDeveloped } from "../../component/feature-being-developed";
import { RootState } from "../../redux";
import { switchScreen } from "../../redux/actions/app";
import { ScreenType } from "../../redux/definitions/typed";
import AppMonitor from "./monitor";
import NewestPost from "./newest-posts";
import { Container } from "./styled";

const mapStateToProps = (state: RootState) => ({
  screen: state.app.screen,
});

const mapDispatchToProps = { switchScreen };

type Props = {} & ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class ContentArea extends Component<Props> {
  renderContent = () => {
    switch (this.props.screen) {
      case ScreenType.DASHBOARD: {
        return <AppMonitor />;
      }
      case ScreenType.NEWS: {
        return <NewestPost />;
      }
      default: {
        return <FeatureBeingDeveloped />;
      }
    }
  };
  render() {
    return <Container>{this.renderContent()}</Container>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentArea);
