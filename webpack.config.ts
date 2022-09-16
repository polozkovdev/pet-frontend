import {buildWebpackConfig} from "./config/build";
import {IBuildPaths, IEnv} from "./config/build/types/config";
import path from "path";
import webpack from "webpack";


export default (env: IEnv): webpack.Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  }
  return buildWebpackConfig({
    paths,
    mode,
    port: env.port,
    isDev
  });
};