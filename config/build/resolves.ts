import { IBuildOptions } from "./types/config";
import webpack from "webpack";

export const resolves = (options: IBuildOptions): webpack.ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  modules: [options.paths.src, "node_modules"],
  mainFiles: ["index"],
  alias: {},
});
