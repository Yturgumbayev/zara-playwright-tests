import {Locator, Page} from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('/');
    }

    async clickAndWaitForHide(locator: Locator, timeout: number = 15000) {
        await locator.click();
        await locator.waitFor({ state: 'detached', timeout });
    }

    async waitForSelector(locator: Locator, timeout: number = 15000) {
        await locator.waitFor({ state: 'visible', timeout });
    }
}
