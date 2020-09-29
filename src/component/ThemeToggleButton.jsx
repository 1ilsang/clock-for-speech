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
  margin: 5rem;
  width: 20rem;
  height: 20rem;
  border: none;
  background-color: #6e827f;
  color: ${(props) => props.theme.colors.titleColor};
  border-radius: 8px;
  cursor: pointer;

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
