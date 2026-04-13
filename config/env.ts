type Env = 'local' | 'staging' | 'prod';

const envConfig: Record<Env, string> = {
  local: 'http://localhost:3000/fashionhub/',
  staging: 'http://localhost:3000/fashionhub/', // Assuming staging is the same as local for now
  prod: 'https://pocketaces2.github.io/fashionhub/',
};

const rawEnv = process.env.TEST_ENV;

export function resolveEnv(env?: string): Env {
  return env === 'local' || env === 'staging' || env === 'prod'
    ? env
    : 'local';
}

export function getBaseUrl(env?: Env) {
  return envConfig[resolveEnv(env ?? rawEnv)];
}

export const ENV = resolveEnv(rawEnv);
export const BASE_URL = getBaseUrl();