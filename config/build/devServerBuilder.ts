import {IBuildOptions} from "./types/config";
import path from "path";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export const devServerBuilder = ({port}: IBuildOptions): DevServerConfiguration => {
  return {
    port,
    open: true,
    static: {
      directory: path.join(__dirname, "dev"),
    },
    historyApiFallback: true,
  }
}