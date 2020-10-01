import React from 'react';
import styled from 'styled-components';
import DigitalMainClock from '../component/DigitalMainClock.jsx';
import ThemeToggleButton from '../component/themeToggleButton.jsx';
import { useTheme } from '~/hooks/useTheme.js';

const ClockContainer = () => {
  const [, setTheme] = useTheme();
  const onToggle = () => setTheme();

  return (
    <ClockContainerStyle>
      <DigitalMainClock />
      <ThemeToggleButton clickHandler={onToggle} />
    </ClockContainerStyle>
  );
};

export default ClockContainer;

const ClockContainerStyle = styled.div``;
