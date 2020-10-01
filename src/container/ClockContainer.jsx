import React from 'react';
import styled from 'styled-components';
import DigitalMainClock from '../component/DigitalMainClock.jsx';
import ThemeToggleButton from '../component/ThemeToggleButton.jsx';
import { useTheme } from '~/hooks/useTheme.js';
import { useStoreDispatch } from '~/store/index.jsx';
import { TOGGLE_THEME } from '~/model/actionType';

const ClockContainer = () => {
  const [, setTheme] = useTheme();
  const dispatch = useStoreDispatch();

  const onToggle = () => {
    setTheme().then((theme) => {
      dispatch({
        type: TOGGLE_THEME,
        payload: theme,
      });
    });
  };

  return (
    <ClockContainerStyle>
      <DigitalMainClock />
      <ThemeToggleButton clickHandler={onToggle} />
    </ClockContainerStyle>
  );
};

export default ClockContainer;

const ClockContainerStyle = styled.div``;
