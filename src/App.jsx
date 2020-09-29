import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from './layout/Nav.jsx';
import { dark, light } from './style/theme.js';
import { useTheme } from './hooks/useTheme';
import Contents from './layout/Contents.jsx';

const App = () => {
  const [themeMode, toggleTheme] = useTheme();
  const theme = themeMode === 'light' ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainStyle>
        <Nav themeHandler={toggleTheme} />
        <Contents />
      </MainStyle>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  *, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const MainStyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

export default App;
