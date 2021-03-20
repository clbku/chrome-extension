import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./App.css";
import ContentArea from "./layout/content";
import LeftBar from "./layout/left-bar";
import RightBar from "./layout/right-bar";
import { RootState } from "./redux";
import { appLaunched } from "./redux/actions/app";

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    fullScreen: state.app.fullScreen,
  };
};

const mapDispatchToProps = { appLaunched };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class App extends Component<Props> {
  render() {
    console.log(this.props);
    return (
      <Container fullScreen={this.props.fullScreen}>
        <LeftBar></LeftBar>
        <ContentArea></ContentArea>
        <RightBar></RightBar>
      </Container>
    );
  }
}

type ContainerProps = {
  fullScreen?: boolean;
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: ${(props: ContainerProps) => (props.fullScreen ? "100vh" : "90vh")};
  width: ${(props: ContainerProps) => (props.fullScreen ? "100vw" : "90vw")};
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  margin-top: 5vh;
  margin-left: 5vw;
  margin: ${(props: ContainerProps) => (props.fullScreen ? 0 : null)};
  border-radius: ${(props: ContainerProps) => (props.fullScreen ? 0 : "30px")};
`;

export default connect(mapStateToProps, mapDispatchToProps)(App);
