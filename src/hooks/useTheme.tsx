import React, {useContext} from 'react';
import {L_S_K_THEME, THEME, ThemeContext} from "../context/theme/context";

interface IUseTheme {
  theme: THEME;
  toggleTheme: () => void;
}

const useTheme = (): IUseTheme => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    // @ts-ignore
    setTheme(newTheme);
    localStorage.setItem(L_S_K_THEME, newTheme);
  }
// @ts-ignore
  return {theme, toggleTheme};
};

export default useTheme;