import webpack from "webpack";

export const resolves = (): webpack.ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"]
})