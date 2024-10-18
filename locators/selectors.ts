export const selectors = {
    homePage: {
        closeOneTrustBanner: '//button[@class="onetrust-close-btn-handler banner-close-button ot-close-icon"]',
        cookiesConfig: '//span[@class="worldwide__cookies-text"]',
        acceptCookiesButton: '//button[@class="save-preference-btn-handler onetrust-close-btn-handler"]',
        acceptCookiesWindow: '//span[@class="ot-scrn-rdr" and @aria-atomic="true" and @aria-live="polite" and contains(text(), "Your Privacy")]',
        startButton: '//div[@class="zds-button__lines-wrapper"]',
        selectCountry: '//button[@id="downshift-0-toggle-button"]',
        selectCountryDefault: '//span[text()="Kazakhstan"]',
        selectLanguage: '//button[@id="downshift-1-toggle-button"]',
        englishLanguage: '//span[text()="English"]',
        searchBarLink: '//a[@data-qa-id="header-search-bar-link"]'
    },
    productPage: {
        searchInput: '//input[@class="search-home-input search-home-paragraph-xl"]',
        filter: '//span[text()="Filters"]',
        firstProduct: '//li[contains(@class,"product-grid-product")][1]//div[@class="product-grid-product__figure"]',
        sizeOption: (index: string) => `//li[@class="size-selector-list__item"][${index}]`,
        closeCartButton: '//*[@class="zds-dialog-icon-button__icon zds-dialog-close-button__icon"]',
        addAnywayButton: '//span[text()="ADD ANYWAY"]',
        addToBasketButton: '//div[@class="product-detail-info__buttons"]//span[text()="Add"]'
    },
    cartPage: {
        basketLink: '//span[text()="Shopping bag"]',
        cartItems: (index: string) => `//div[@class="shop-cart-item shop-cart-item--is-vertical"][${index}]`,
        deleteButton: (index: string) => `//div[@class="shop-cart-item shop-cart-item--is-vertical"][${index}]//button[@aria-label="Remove item"]`,
        checkoutButton: '//span[text()="CONTINUE"]'
    },
    registrationPage: {
        createAccountLink: '//span[text()="Register"]',
        emailInput: '//input[@data-qa-input-qualifier="email"]',
        passwordInput: '//input[@data-qa-input-qualifier="password"]',
        firstName: '//input[@data-qa-input-qualifier="firstName"]',
        lastName: '//input[@data-qa-input-qualifier="lastName"]',
        privacyCheck: '//div[@data-name="privacyCheck"]//span[@class="zds-checkbox-control"]',
        createAccountButton: '//button[@data-qa-action="sign-up-submit"]',
        emailError: '//div[@class="form-input-error" and contains(text(), "Enter a valid e-mail address.")]',
        passwordError: '//div[@class="form-input-error" and contains(text(), "Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.")]'
    }
};
