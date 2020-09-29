import React from 'react';
import styled from 'styled-components';

const Contents = () => {
  return (
    <>
      <ClockStyle>{Date.now()}</ClockStyle>
    </>
  );
};

export default Contents;

const ClockStyle = styled.div`
  color: ${(props) => props.theme.colors.titleColor};
`;
