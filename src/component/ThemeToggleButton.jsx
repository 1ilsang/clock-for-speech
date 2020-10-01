import React from 'react';
import styled from 'styled-components';

const ThemeToggleButton = ({ clickHandler }) => {
  return <ToggleButtonStyle onClick={clickHandler} />;
};

export default ThemeToggleButton;

const ToggleButtonStyle = styled.button`
  width: 80px;
  height: 12px;
  border: 1px solid ${(props) => props.theme.colors.titleColor};
  background-color: ${(props) => props.theme.colors.titleColor};
  border-radius: 8px;
  cursor: pointer;
`;
