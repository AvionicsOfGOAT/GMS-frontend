import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";
import { useState, useEffect } from "react";

const { kakao } = window;

const Content = styled.div`
  flex: 1;
  background: #eeeeee;
  border-radius: 20px;
  overflow: hidden;
  /* align-items: center; */
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

const Map = styled.div`
  height: 100%;

`;



const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    if (document.getElementById('map') != null) {
      var container = document.getElementById('map');
      var options = {
        // center: new kakao.maps.LatLng(councilData.latitude, councilData.longitude),
        center: new kakao.maps.LatLng(37.45218283, 127.133048),
        level: 3
      };
      var map = new kakao.maps.Map(container, options);
      var mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      var circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(37.45218283, 127.133048),
        radius: 1,
        strokeWeight: 5, 
        strokeColor: '#ff3232', 
        strokeOpacity: 1, 
      });

      // 지도에 원을 표시합니다 
      circle.setMap(map);
    }
  },)
  return (
    <BorderBox>
      <BoxContent>
        <BorderBoxTitle>Location</BorderBoxTitle>
        <Content>
          <Map id="map" ></Map>
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default Location;
