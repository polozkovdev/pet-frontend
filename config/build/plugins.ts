import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const plugins = (
  template: string,
  isDev: boolean
): webpack.ProgressPlugin[] => [
  new HTMLWebpackPlugin({
    template,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  }),
  new webpack.DefinePlugin({
    __IS_DEV: JSON.stringify(isDev),
  }),
  new webpack.HotModuleReplacementPlugin(),
];
