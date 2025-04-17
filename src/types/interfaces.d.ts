export interface IConfig {
  port: number;
  nodeEnv: string;
}

export interface IAppError extends Error {
    status?: number;
}
