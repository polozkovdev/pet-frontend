type TBuildMode = "production" | "development";

export interface IEnv {
  mode: TBuildMode,
  port: number
}

export interface IBuildPaths {
  entry: string,
  build: string,
  html: string,
}

export interface IBuildOptions {
  mode: TBuildMode,
  paths: IBuildPaths,
  port: number,
  isDev: boolean
}