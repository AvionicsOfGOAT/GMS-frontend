import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { BorderBox, BorderBoxTitle, BoxContent } from "./StyledComponents";

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-weight: 800;
`;

const calculateTimeLeft = () => {
  const now = new Date();
  const target = new Date("2024-08-10T13:00:00");
  const difference = target - now;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    const elapsed = now - target;
    timeLeft = {
      days: -Math.floor(elapsed / (1000 * 60 * 60 * 24)),
      hours: -Math.floor((elapsed / (1000 * 60 * 60)) % 24),
      minutes: -Math.floor((elapsed / 1000 / 60) % 60),
      seconds: -Math.floor((elapsed / 1000) % 60)
    };
  }

  return timeLeft;
};

const RemainingTime = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <BorderBox>
      <BoxContent>
        <BorderBoxTitle>Remaining Time</BorderBoxTitle>
        <Content>
          {`${Math.abs(timeLeft.days * 24 + timeLeft.hours).toString().padStart(2, '0')}:${Math.abs(timeLeft.minutes).toString().padStart(2, '0')}:${Math.abs(timeLeft.seconds).toString().padStart(2, '0')}`}
        </Content>
      </BoxContent>
    </BorderBox>
  );
};

export default RemainingTime;
