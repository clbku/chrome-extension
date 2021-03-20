import { mdiTimer } from "@mdi/js";
import { Button, Col, Row } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React, { Fragment } from "react";
import Header from "../../../component/Header";
import TimeChart from "../../../component/status/chart";
import InfoCard from "../../../component/status/info-card";
import TopOneCard from "../../../component/status/top-1-card";
import { CardContainer, ChartContainer } from "../styled";

export default function AppMonitor(props: any) {
  return (
    <Fragment>
      <Header>
        <h1>Hello, Ly 👋</h1>
        <p>Here is your daily statistics</p>
      </Header>
      <CardContainer>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
          style={{ width: "100%" }}
        >
          <Col sm={24} md={8}>
            <InfoCard
              data={"12h12m12s"}
              title="Visit duration"
              icon={mdiTimer}
              titleColor={"red"}
            ></InfoCard>
          </Col>
          <Col sm={24} md={8}>
            <InfoCard
              data={"1234"}
              title="Visit time"
              icon={mdiTimer}
              titleColor={"green"}
              unit="times"
            ></InfoCard>
          </Col>
          <Col sm={24} md={8}>
            <InfoCard
              data={"123"}
              title="Visit website"
              icon={mdiTimer}
              titleColor={"blue"}
              unit="website"
            ></InfoCard>
          </Col>
        </Row>
      </CardContainer>
      <ChartContainer>
        <ButtonGroup>
          <Button>Visit duration</Button>
          <Button>Visit Time</Button>
        </ButtonGroup>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
          style={{ flex: "1 1 auto" }}
        >
          <Col sm={24} md={16}>
            <TimeChart />
          </Col>
          <Col sm={24} md={8}>
            <TopOneCard color="red" duration="12h34m56s">
              Youtube
            </TopOneCard>
          </Col>
        </Row>
      </ChartContainer>
    </Fragment>
  );
}
