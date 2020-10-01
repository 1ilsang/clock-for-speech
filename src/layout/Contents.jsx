import React from 'react';
import styled from 'styled-components';

const Contents = ({ children }) => {
  return <ContentsStyle>{children}</ContentsStyle>;
};

export default Contents;

const ContentsStyle = styled.div`
  height: 80vh;
  padding: 10vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.titleColor};
`;
