import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
      <RightContents />
    </>
  );
};

const RightContents = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Nav;
