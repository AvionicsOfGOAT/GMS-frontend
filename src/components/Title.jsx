import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";

const TitleTextBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const TitleText= styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #858585;
`;

const Title = () => {
  return (
    <TitleTextBox>
      <TitleText>GOAT Rocket GMS</TitleText>
    </TitleTextBox>
  );
};

export default Title;
