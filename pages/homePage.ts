import { selectors } from '../locators/selectors';
import {BasePage} from "./basePage";

export class HomePage extends BasePage {

    async acceptCookiesAndGoToCatalogPage() {
        await this.closeOneTrustBanner();
        await this.openCookiesConfig();
        await this.acceptCookies();
        await this.selectCountry();
        await this.selectLanguage();
        await this.goToCatalog();
    }

    private async closeOneTrustBanner()  {
        const oneTrustBanner = this.page.locator(selectors.homePage.closeOneTrustBanner);
        await oneTrustBanner.click()
        await this.page.waitForTimeout(3000);
    }

    private async openCookiesConfig() {
        const cookiesConfig = this.page.locator(selectors.homePage.cookiesConfig);
        if (await cookiesConfig.isVisible()) {
            await cookiesConfig.click()
            await this.waitForSelector(this.page.locator(selectors.homePage.acceptCookiesButton))
        }
    }

    private async acceptCookies() {
        const acceptCookiesButton = this.page.locator(selectors.homePage.acceptCookiesButton);
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
            await this.waitForSelector(this.page.locator(selectors.homePage.acceptCookiesWindow));
        }
    }

    private async selectCountry(){
        await this.page.locator(selectors.homePage.selectCountry).click()
        await this.page.hover(selectors.homePage.selectCountry)
        await this.page.keyboard.insertText("Kaz")
        await this.waitForSelector(this.page.locator(selectors.homePage.selectCountryDefault))
        await this.page.locator(selectors.homePage.selectCountryDefault).click()
    }

    private async selectLanguage(){
        await this.page.locator(selectors.homePage.selectLanguage).click()
        await this.waitForSelector(this.page.locator(selectors.homePage.englishLanguage))
        await this.page.locator(selectors.homePage.englishLanguage).click()
    }

    private async goToCatalog() {
        await this.page.locator(selectors.homePage.startButton).click()
    }
}
