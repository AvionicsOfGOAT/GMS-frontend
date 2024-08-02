import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";
import { useState, useEffect } from "react";

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  
`;
const StatusBox = styled.div`
  border-radius: 7px;
  /* text-align: center; */
  width: 100%;
  background: ${({ isOn }) => (isOn ? '#28BE0F' : '#eeeeee')};
  color: ${({ isOn }) => (isOn ? '#ffffff' : '#a4a4a4')};
`;
const StatusText = styled.div`
  padding: 5px 10px;
  font-weight: 600;
`;

const DescentDetermination = () => {
  const [altitudeBasedStatus, setAltitudeBasedStatus] = useState(0);
  const [angleBasedStatus, setAngleBasedStatus] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/Determination-status");
        setAltitudeBasedStatus(response.data.data.altitudeBasedStatus);
        setAngleBasedStatus(response.data.data.angleBasedStatus);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    getData();
  }, []);

  return (
    <BorderBox>
      <BoxContent>
        <BorderBoxTitle>Descent Determination</BorderBoxTitle>
        <Content>
          <StatusBox isOn={altitudeBasedStatus == 1}>
            <StatusText>
              Altitude-based
            </StatusText>
          </StatusBox>
          <StatusBox isOn={angleBasedStatus == 1}>
            <StatusText>
              Angle-based
            </StatusText>
          </StatusBox>

        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default DescentDetermination;
