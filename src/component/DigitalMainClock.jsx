import React from 'react';
import styled from 'styled-components';
import { useDate } from '../hooks/useDate';
const DigitalMainClock = () => {
  const [time, stopTime] = useDate();

  return (
    <MainStyle>
      <ClockStyle onClick={stopTime}>
        {time.year}-{time.month}-{time.date} {time.day}
        <br />
        {time.hour}:{time.minute}:{time.second}
      </ClockStyle>
    </MainStyle>
  );
};

export default DigitalMainClock;

const MainStyle = styled.div`
  width: 50vh;
`;

const ClockStyle = styled.h1`
  &:hover {
    color: #3c99dc;
    cursor: pointer;
  }

  color: ${(props) => props.theme.colors.titleColor};
`;
