import {createContext} from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export interface IThemeContextProps {
  theme?: THEME;
  setTheme?: (props: THEME) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const L_S_K_THEME = "theme";