import webpack from "webpack";
import {devServerBuilder} from "./devServerBuilder";
import {loaders} from "./loaders";
import {plugins} from "./plugins";
import {resolves} from "./resolves";
import {IBuildOptions} from "./types/config";

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const {paths, mode, isDev} = options;
  const {entry, build, html} = paths;
  return {
    mode,
    entry,
    output: {
      path: build,
      filename: "[name].[contenthash].js",
      clean: true
    },
    module: {
      rules: loaders(options),
    },
    plugins: plugins(html),
    resolve: resolves(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? devServerBuilder(options) : undefined
  }
}