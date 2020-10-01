import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './layout/Nav.jsx';
import { dark, light } from './style/theme.js';
import { useTheme } from './hooks/useTheme';
import Contents from './layout/Contents.jsx';
import DigitalMainClock from './component/DigitalMainClock.jsx';
import ThemeToggleButton from './component/themeToggleButton.jsx';

const App = () => {
  const [themeMode, toggleTheme] = useTheme();
  const theme = themeMode === 'light' ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainStyle>
        <Nav />
        <Contents>
          <DigitalMainClock />
          <ThemeToggleButton clickHandler={toggleTheme} />
        </Contents>
      </MainStyle>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
`;

const MainStyle = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

export default App;
