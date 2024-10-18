import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 30000,
    testDir: './tests',
    use: {
        baseURL: 'https://www.zara.com',
        locale: 'en-KZ',
        headless: false,
        screenshot: 'only-on-failure'
    },
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        { name: 'firefox', use: { browserName: 'firefox' } },
        { name: 'webkit', use: { browserName: 'webkit' } },
    ],
});
