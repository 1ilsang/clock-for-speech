import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Nav from '~/layout/Nav.jsx';
import { GlobalStyle } from '~/style/global';
import Contents from '~/layout/Contents.jsx';
import WordContainer from '~/container/WordContainer.jsx';
import { useStoreState } from '~/store/index.jsx';

const App = () => {
  const state = useStoreState();

  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyle />
      <MainStyle query={state.searchQuery}>
        <Nav />
        <Contents>
          <WordContainer />
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
