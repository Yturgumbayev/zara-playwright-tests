import { selectors } from '../locators/selectors';
import {BasePage} from "./basePage";

export class RegistrationPage extends BasePage {

    async attemptRegistration(
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ) {
        await this.page.locator(selectors.registrationPage.createAccountLink).click();
        await this.page.fill(selectors.registrationPage.emailInput, email);
        await this.page.fill(selectors.registrationPage.passwordInput, password);
        await this.page.fill(selectors.registrationPage.firstName, firstName);
        await this.page.fill(selectors.registrationPage.lastName, lastName);
        await this.page.locator(selectors.registrationPage.privacyCheck).click();
        await this.page.locator(selectors.registrationPage.createAccountButton).click();
    }

    async verifyRegistrationErrors() {
        const emailErrorVisible = await this.page.isVisible(selectors.registrationPage.emailError);
        const passwordErrorVisible = await this.page.isVisible(selectors.registrationPage.passwordError);
        return { emailErrorVisible, passwordErrorVisible };
    }
}
