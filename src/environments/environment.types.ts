export enum EnvironmentType {
  production = 'production',
  development = 'development',
}

export interface Environment {
  type: EnvironmentType;
  graphqlUrl: string;
  apiBase: string;
}
