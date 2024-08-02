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

const Safe = styled.div`
  color: #28BE0F;
`;

const Danger = styled.div`
  color: #f03e3e; /* 강제 사출 상태에 맞는 색상으로 변경 가능 */
`;

const CriticalAreaStatus = () => {
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
        <BorderBoxTitle>Critical Area Status</BorderBoxTitle>
        <Content>
          {status === 0 && <Safe>Safe</Safe>}
          {status === 1 && <Danger>Danger</Danger>}
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default CriticalAreaStatus;
