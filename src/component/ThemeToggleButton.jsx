import React from 'react';
import styled from 'styled-components';

const ThemeToggleButton = ({ title, clickHandler }) => {
  return (
    <ToggleButtonStyle onClick={clickHandler}>
      <span>{title}</span>
    </ToggleButtonStyle>
  );
};

export default ThemeToggleButton;

const ToggleButtonStyle = styled.button`
  border: none;
  width: 100px;
  height: 30px;
  background-color: #6e827f;
  color: ${(props) => props.theme.colors.titleColor};
  border-radius: 8px;
  cursor: pointer;
`;
