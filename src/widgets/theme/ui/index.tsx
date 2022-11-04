import { useTheme } from "app/providers/theme";
import { THEME } from "app/providers/theme/ui/context";
import React from "react";
import Light from "shared/assets/icons/theme-light.svg";
import Dark from "shared/assets/icons/theme-dark.svg";

interface IThemeSwitcherProps extends React.PropsWithChildren {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={className}>
      {theme === THEME.LIGHT ? <Dark /> : <Light />}
    </button>
  );
};
