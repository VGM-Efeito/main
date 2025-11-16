import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Ajuste os seletores abaixo conforme seu HTML
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.submitButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.error, .alert, [data-test="error"]');
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async submitLogin() {
        await this.submitButton.click();
    }

    // Retorna um Locator para poder usar expect(...).toBeVisible()
    getErrorMessage() {
        return this.errorMessage;
    }
}