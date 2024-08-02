import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const AltitudeBarBox = styled.div`
  flex:1;
  width: 40px;
  position: relative;
`;

const AltitudeBar = styled.div`
position: absolute;
left: 0;
top: 0;
  /* height: 7; */
  width: 100%;
  height: 100%;
  /* width: 40px; */
  background: #f3f3f3;
  border-radius: 15px;
`;


const AltitudeBarColor = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20%;
  background: #6093FF;
  border-radius: 15px;
  z-index: 1;
`;

const NumberBar = styled.div`
  flex:1;
  height: 100%;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Number = styled.div`
  font-size: 15px;
  color: #b0b0b0;
`;

const AltitudeNumber = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: 800;
text-align: left;
  margin: 10px 0px;
`;




const Altitude = () => {
  return (
    <BorderBox>
      <BoxContent>
        <BorderBoxTitle>Altitude</BorderBoxTitle>
        <AltitudeNumber>70m</AltitudeNumber>
        <Content>
          <NumberBar>
            <Number>400</Number>
            <Number>350</Number>
            <Number>300</Number>
            <Number>250</Number>
            <Number>200</Number>
            <Number>150</Number>
            <Number>100</Number>
            <Number>50</Number>
            <Number>0</Number>
          </NumberBar>
          <AltitudeBarBox>
          <AltitudeBar></AltitudeBar>
          <AltitudeBarColor></AltitudeBarColor>
          </AltitudeBarBox>
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default Altitude;
