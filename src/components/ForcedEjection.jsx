import styled from "styled-components";
import { BorderBox } from "./StyledComponents";
import { useState } from "react";

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: ${({ isToggleOn }) => (isToggleOn ? '#f03e3e' : '#eeeeee')};
  cursor: pointer; /* 포인터 커서 추가 */
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
  flex: 5;
`;

const ToggleBox = styled.div`
  border-radius: 100px;
  background: #ffffff;
  flex: 1;
  padding: 5px;
  cursor: pointer; /* 포인터 커서 추가 */
  display: flex;
  flex-direction: column; /* 수직 정렬을 위해 flex-direction 추가 */
  z-index: 2;
`;

const ToggleCircle = styled.div`
  width: 100%;
  height: 50%;
  background: ${({ isOn }) => (isOn ? '#ffffff' : '#d8d8d8')}; /* 배경 색상 수정 */
  border-radius: 100px;
  margin-bottom: ${({ isLast }) => (isLast ? '0' : '5px')}; /* 원 사이 간격 추가 */
`;

const ForcedEjection = () => {
  const [isToggleStatus, setIsToggleStatus] = useState(0);

  const handleToggle = () => {
    setIsToggleStatus((prevStatus) => (prevStatus === 0 ? 1 : 0));
  };

  const handleContentClick = () => {
    if (isToggleStatus === 1) {
      alert("Ejected");
    }
  };

  return (
    <BorderBox>
      <Content isToggleOn={isToggleStatus === 1}>
        <Text onClick={handleContentClick}>EJECTION</Text>
        <ToggleBox onClick={handleToggle}>
          <ToggleCircle isOn={isToggleStatus === 0} />
          <ToggleCircle isOn={isToggleStatus === 1} isLast />
        </ToggleBox>
      </Content>
    </BorderBox>
  );
};

export default ForcedEjection;
