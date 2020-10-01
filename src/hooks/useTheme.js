import { useState } from 'react';
import { darkTheme, lightTheme } from '~/style/theme';
import { useStoreDispatch } from '~/store/index.jsx';
import { LIGHT, DARK, LOCAL_STORAGE_THEME } from '~/model/theme';
import { TOGGLE_THEME } from '~/model/actionType';

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
  const dispatch = useStoreDispatch();

  const toggleTheme = () => {
    const nextMode = mode === DARK ? LIGHT : DARK;
    const nextTheme = nextMode === LIGHT ? lightTheme : darkTheme;
    setTheme(nextTheme);
    setMode(nextMode);
    dispatch({
      type: TOGGLE_THEME,
      payload: nextTheme,
    });

    window.localStorage.setItem(LOCAL_STORAGE_THEME, nextMode);
  };

  return [theme, toggleTheme];
};
