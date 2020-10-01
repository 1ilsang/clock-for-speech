import React from 'react';
import styled from 'styled-components';
import { useStoreState } from '~/store/index.jsx';

const ThemeToggleButton = ({ clickHandler }) => {
  const state = useStoreState();

  return (
    <ToggleButtonStyle onClick={clickHandler}>
      {state.theme.type}
    </ToggleButtonStyle>
  );
};

export default ThemeToggleButton;

const ToggleButtonStyle = styled.button`
  width: 80px;
  height: 14px;
  border: 1px solid ${(props) => props.theme.colors.titleColor};
  background-color: ${(props) => props.theme.colors.titleColor};
  font-size: 2px;
  color: ${(props) => props.theme.colors.bgColor};
  border-radius: 8px;
  cursor: pointer;
`;
