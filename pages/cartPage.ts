import { selectors } from '../locators/selectors';
import {BasePage} from "./basePage";

export class CartPage extends BasePage {

    async selectFirstProduct() {
        await this.page.locator(selectors.productPage.firstProduct).click();
        await this.waitForSelector(this.page.locator(selectors.productPage.addToBasketButton))
    }

    async searchProduct(productName: string) {
        const searchButton = this.page.locator(selectors.homePage.searchBarLink)
        await this.waitForSelector(searchButton)
        await searchButton.click()
        await this.waitForSelector(this.page.locator(selectors.productPage.searchInput))
        await this.page.waitForTimeout(2000);
        await this.page.fill(selectors.productPage.searchInput, productName);
        await this.page.keyboard.press('Enter');
        await this.waitForSelector(this.page.locator(selectors.productPage.filter))
    }

    async addSizesToCart(minSizeCount: number = 5) {
        let addedSizes = 0;
        for (let i = 1; i < minSizeCount; i++) {
            await this.waitForSelector(this.page.locator(selectors.productPage.sizeOption(i.toString())));
            await this.page.locator(selectors.productPage.sizeOption(i.toString())).click();
            await this.page.locator(selectors.productPage.addToBasketButton).click();
            if (await this.page.locator(selectors.productPage.addAnywayButton).isVisible()) {
                await this.clickAndWaitForHide(this.page.locator(selectors.productPage.addAnywayButton));
            }
            if (await this.page.locator(selectors.productPage.closeCartButton)) {
                await this.clickAndWaitForHide(this.page.locator(selectors.productPage.closeCartButton));
            }
            addedSizes++;
        }
    }

    async openCart() {
        await this.page.locator(selectors.cartPage.basketLink).click();
        await this.waitForSelector(this.page.locator(selectors.cartPage.cartItems("1")))
    }

    async removeEverySecondItem() {
        for (let i = 1; i < 4; i += 2) {
            await this.page.locator(selectors.cartPage.cartItems(i.toString()));
            await this.page.locator(selectors.cartPage.deleteButton(i.toString())).click();
        }
    }

    async proceedToCheckout() {
        await this.page.locator(selectors.cartPage.checkoutButton).click();
    }
}
