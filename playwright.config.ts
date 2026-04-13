// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { getBaseUrl } from './config/env';

export default defineConfig({
  use: {
    headless: false,
  },

  projects: [
    { name: 'local-chromium', use: { browserName: 'chromium', baseURL: getBaseUrl('local') } },
    { name: 'local-firefox', use: { browserName: 'firefox', baseURL: getBaseUrl('local') } },
    { name: 'local-webkit', use: { browserName: 'webkit', baseURL: getBaseUrl('local') } },
    { name: 'staging-chromium', use: { browserName: 'chromium', baseURL: getBaseUrl('staging') } },
    { name: 'staging-firefox', use: { browserName: 'firefox', baseURL: getBaseUrl('staging') } },
    { name: 'staging-webkit', use: { browserName: 'webkit', baseURL: getBaseUrl('staging') } },
    { name: 'prod-chromium', use: { browserName: 'chromium', baseURL: getBaseUrl('prod') } },
    { name: 'prod-firefox', use: { browserName: 'firefox', baseURL: getBaseUrl('prod') } },
    { name: 'prod-webkit', use: { browserName: 'webkit', baseURL: getBaseUrl('prod') } },
  ],
});