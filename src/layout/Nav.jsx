import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ThemeToggleButton from '../component/themeToggleButton.jsx';

const Nav = ({ themeHandler }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <ThemeToggleButton
        title={themeContext.type === 'light' ? 'Light' : 'Dark'}
        clickHandler={themeHandler}
      />
    </>
  );
};

export default Nav;
