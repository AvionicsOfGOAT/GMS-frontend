import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { Container, Content, Header, Main, BoxLeft, BoxMiddle, BoxRight, BoxMiddleTop, BoxMiddleMiddle, BoxMiddleBottom } from "../components/StyledComponents";
import Altitude from "../components/Altitude";
import Title from "../components/\bTitle";
import ParashuteStatus from "../components/ParashuteStatus";
import MovementStatue from "../components/MovementStatus";
import Location from "../components/Location";
import Pose from "../components/Pose";
import EulerAngles from "../components/Euler Angles";
import RemainingTime from "../components/RemainingTime";
import DescentDetermination from "../components/DescentDetermination";
import CriticalAreaStatus from "../components/CriticalAreaStatus";
import ForcedEjection from "../components/ForcedEjection";
import MaxAltitude from "../components/MaxAltitude";

const Home = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title></Title>
        </Header>
        <Main>
          <BoxLeft>
            <Altitude></Altitude>
          </BoxLeft>
          <BoxMiddle>
            <BoxMiddleTop>
            <MaxAltitude></MaxAltitude>
              <ParashuteStatus></ParashuteStatus>
              <MovementStatue></MovementStatue>
            </BoxMiddleTop>
            <BoxMiddleMiddle>
              <Location></Location>
              <Pose></Pose>
            </BoxMiddleMiddle>
            {/* <BoxMiddleBottom>
              <EulerAngles></EulerAngles>
            </BoxMiddleBottom> */}
          </BoxMiddle>
          <BoxRight>
            <RemainingTime></RemainingTime>
            <DescentDetermination></DescentDetermination>
            <CriticalAreaStatus></CriticalAreaStatus>
            <ForcedEjection></ForcedEjection>
          </BoxRight>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
