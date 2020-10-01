import React from 'react';
import styled from 'styled-components';
import ClockContainer from './ClockContainer.jsx';
import SearchContainer from './SearchContainer.jsx';

const WordContainer = () => {
  return (
    <WordContainerStyle>
      <ClockContainer />
      <SearchContainer />
    </WordContainerStyle>
  );
};

export default WordContainer;

const WordContainerStyle = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgColor}00 10%,
    ${(props) => props.theme.colors.bgColor}80 90%,
    ${(props) => props.theme.colors.bgColor}00
  );
`;
