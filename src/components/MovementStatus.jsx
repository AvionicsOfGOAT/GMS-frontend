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

const Stop = styled.div`
  color: #FFA551;
`;

const Up = styled.div`
  color: #28BE0F;
`;

const Down = styled.div`
  color: #FF0000; /* 강제 사출 상태에 맞는 색상으로 변경 가능 */
`;

const MovementStatues = () => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/Movement-status");
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
        <BorderBoxTitle>Movement Statues</BorderBoxTitle>
        <Content>
          {status === 0 && <Stop>Stop</Stop>}
          {status === 1 && <Up>Up</Up>}
          {status === 2 && <Down>Down</Down>}
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default MovementStatues;
