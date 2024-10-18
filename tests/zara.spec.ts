import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import { RegistrationPage } from '../pages/registrationPage';

test.describe('Zara E2E Test Suite', () => {

    test('Full user journey test', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const registrationPage = new RegistrationPage(page);

        await homePage.navigate();
        await homePage.acceptCookiesAndGoToCatalogPage();
        await cartPage.searchProduct('jacket');
        await cartPage.selectFirstProduct();
        await cartPage.addSizesToCart();
        await cartPage.openCart();
        await cartPage.removeEverySecondItem();
        await cartPage.proceedToCheckout();
        await registrationPage.attemptRegistration(
            'invalid-email', 'short', 'firstName', 'lastName'
        );

        const { emailErrorVisible, passwordErrorVisible } = await registrationPage.verifyRegistrationErrors();
        expect(emailErrorVisible).toBe(true);
        expect(passwordErrorVisible).toBe(true);
    });
});
