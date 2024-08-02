import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";
import { useState, useEffect } from "react";
import axios from "axios"; 

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 800;
`;

const Altitude = styled.div`
  color: #000000;
`;


const MaxAltitude = () => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/parashute-status");
        setStatus(response.data.data.status);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    getData();
  }, []);

  return (
    <BorderBox>
      <BoxContent>
        <BorderBoxTitle>Max Altitude</BorderBoxTitle>
        <Content>
         <Altitude>400m</Altitude>
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default MaxAltitude;
