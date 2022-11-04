import About from "pages/about/ui";
import Main from "pages/main/ui";
import { RouteProps } from "react-router-dom";

export enum ERouters {
  MAIN = "main",
  ABOUT = "about",
}

export const ROUTERS: Record<ERouters, string> = {
  [ERouters.MAIN]: "/",
  [ERouters.ABOUT]: "/about",
};

export const ROUTERS_CONFIG: RouteProps[] = [
  {
    path: ROUTERS.main,
    element: <Main />,
  },
  {
    path: ROUTERS.about,
    element: <About />,
  },
];
