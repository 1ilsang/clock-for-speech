import React from 'react';
import styled from 'styled-components';
import { useDate } from '../hooks/useDate';
const DigitalMainClock = () => {
  const [time, toggleTime, isStop] = useDate();

  return (
    <ClockStyle isStop={isStop} onClick={toggleTime}>
      {time.year}-{time.month}-{time.date} {time.day}
      <br />
      {time.hour}:{time.minute}:{time.second}
    </ClockStyle>
  );
};

export default DigitalMainClock;

const ClockStyle = styled.h1`
  &:hover {
    color: #3c99dc;
    cursor: pointer;
  }

  color: ${({ theme, isStop }) => {
    return isStop ? '#0F5298' : theme.colors.titleColor;
  }};
`;
