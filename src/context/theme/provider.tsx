import React, {useMemo, useState} from "react";
import {L_S_K_THEME, THEME, ThemeContext} from "./context"

const defaultTheme = localStorage.getItem(L_S_K_THEME) as THEME || THEME.LIGHT

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);
  const defaultThemeProps = useMemo(() => ({
    theme, setTheme
  }), [theme]);
  return (
    <ThemeContext.Provider value={defaultThemeProps}>{children}</ThemeContext.Provider>
  );
};
