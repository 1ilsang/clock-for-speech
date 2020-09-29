import React from 'react';
import ThemeToggleButton from '../component/themeToggleButton.jsx';

const Nav = ({ theme, themeHandler }) => {
  return (
    <>
      <ThemeToggleButton
        title={
          theme === 'light'
            ? '일반모드로 테마 변경하기'
            : '다크모드로 테마 변경하기'
        }
        clickHandler={themeHandler}
      />
    </>
  );
};

export default Nav;
