import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  height: 100%;
  background: #FBFBFB;
`;

export const Content = styled.div`
  margin: 0px auto;
  height: 100vh; 
  padding: 0px 20px;
  /* max-width: 1400px; */
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  /* background: #eeeeee; */
  flex: 1;
`;
export const Main = styled.div`
  /* background: #dddddd; */
  flex: 8;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BoxLeft = styled.div`
  height: 100%;
  flex: 1;
  
`;

export const BoxMiddle = styled.div`
  height: 100%;
  flex:7;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BoxMiddleTop = styled.div`
  flex:1;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BoxMiddleMiddle = styled.div`
  flex:4;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BoxMiddleBottom = styled.div`
  flex:1;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const BoxRight = styled.div`
  height: 100%;
  flex:2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BorderBox = styled.div`
  height: 100%;
  width: 100%;
  flex:1;
  border: 1px solid #e3e3e3;
  border-radius: 30px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  overflow: hidden;
`;

export const BorderBoxTitle = styled.div`
  width: 100%;
  margin: 5px 0px;
  color: #acacac;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  
`;

