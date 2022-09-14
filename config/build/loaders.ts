import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {IBuildOptions} from "./types/config";

export const loaders = ({isDev}: IBuildOptions): webpack.RuleSetRule[] => {
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (path: string) => path.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:5]",
          },
        }
      },
      "sass-loader",
    ],
  }
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }
  return [typescriptLoader, styleLoader]
}