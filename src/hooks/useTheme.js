import { useState } from 'react';
import { darkTheme, lightTheme } from '~/style/theme';
import { LIGHT, DARK, LOCAL_STORAGE_THEME } from '~/model/theme';

export const useTheme = () => {
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initTheme =
    localStorage.getItem(LOCAL_STORAGE_THEME) || isBrowserDarkMode
      ? DARK
      : LIGHT;

  const [mode, setMode] = useState(initTheme);
  const [theme, setTheme] = useState(
    initTheme === LIGHT ? lightTheme : darkTheme
  );

  const toggleTheme = () => {
    const nextMode = mode === DARK ? LIGHT : DARK;
    const nextTheme = nextMode === LIGHT ? lightTheme : darkTheme;
    setTheme(nextTheme);
    setMode(nextMode);

    window.localStorage.setItem(LOCAL_STORAGE_THEME, nextMode);

    return Promise.resolve(nextTheme);
  };

  return [theme, toggleTheme];
};
