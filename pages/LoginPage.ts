import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // Locators
    private readonly emailInput = '[data-testid="email-input"]';
    private readonly passwordInput = '[data-testid="password-input"]';
    private readonly loginButton = '[data-testid="login-button"]';

    constructor(page: Page) {
        super(page);
    }

    async login(email: string, password: string) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        await this.waitForPageLoad();
    }

    async isLoginPage() {
        return await this.page.isVisible(this.emailInput);
    }
} 