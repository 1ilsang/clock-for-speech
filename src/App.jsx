import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from './layout/Nav.jsx';
import { dark, light } from './style/theme.js';
import { GlobalStyle } from './style/global';
import { useTheme } from './hooks/useTheme';
import Contents from './layout/Contents.jsx';
import DigitalMainClock from './component/DigitalMainClock.jsx';
import ThemeToggleButton from './component/themeToggleButton.jsx';

const App = () => {
  const [themeMode, toggleTheme] = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const theme = themeMode === 'light' ? light : dark;

  const handleInputKeyPress = (event) => {
    if (event.key !== 'Enter') return;
    setSearchQuery(event.target.value);
    event.target.value = '';
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainStyle query={searchQuery}>
        <Nav />
        <Contents>
          <WordZone>
            <ClockContainer>
              <DigitalMainClock />
              <ThemeToggleButton clickHandler={toggleTheme} />
            </ClockContainer>
            <SearchContainer>
              <SearchIcon>
                <i className="fa fa-search"></i>
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="images..."
                onKeyPress={handleInputKeyPress}
              ></SearchInput>
            </SearchContainer>
          </WordZone>
        </Contents>
      </MainStyle>
    </ThemeProvider>
  );
};

export default App;

const MainStyle = styled.div`
  height: 100vh;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.bgColor}00 10%,
      ${(props) => props.theme.colors.bgColor}80 90%,
      ${(props) => props.theme.colors.bgColor}00
    ),
    url(https://source.unsplash.com/random/1920x1080?${(props) => props.query});
  background-size: cover;
`;

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.titleColor};
  width: 25vh;
  font-size: 20pt;
  margin-left: 35px;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.colors.titleColor};

  &::placeholder {
    color: ${(props) => props.theme.colors.titleColor}70;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  font-size: 20pt;
  z-index: 1;
  color: ${(props) => props.theme.colors.titleColor};
`;

const SearchContainer = styled.div`
  margin-left: 5%;
`;

const ClockContainer = styled.div``;

const WordZone = styled.div`
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
