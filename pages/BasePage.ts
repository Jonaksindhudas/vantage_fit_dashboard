import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;
    protected readonly baseUrl = 'https://api.vantagecircle.com';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string = '') {
        const url = path.startsWith('http') ? path : `${this.baseUrl}${path}`;
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitForElement(selector: string, timeout: number = 10000) {
        await this.page.waitForSelector(selector, { timeout });
    }

    async clickElement(selector: string) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    async fillInput(selector: string, value: string) {
        await this.waitForElement(selector);
        await this.page.fill(selector, value);
    }
} 