import { Page } from '@playwright/test';

export class PlaywrightPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to the Playwright official website
     */
    async navigateTo(): Promise<void> {
        await this.page.goto('https://playwright.dev/', { waitUntil: 'networkidle' });
    }

    /**
     * Click on the "Get Started" button
     */
    async clickGetStarted(): Promise<void> {
        // Try multiple selectors to locate the "Get Started" button
        const getStartedButton = this.page.locator('a:has-text("Get started")').first();
        
        // Scroll to the button to ensure visibility
        await getStartedButton.scrollIntoViewIfNeeded();
        
        // Click the button
        await getStartedButton.click();
    }

    /**
     * Get the page URL
     */
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    /**
     * Get the page title
     */
    async getPageTitle(): Promise<string> {
        return this.page.title();
    }

    /**
     * Wait for the page to fully load
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Check if the "Get Started" button is visible
     */
    async isGetStartedButtonVisible(): Promise<boolean> {
        const getStartedButton = this.page.locator('a:has-text("Get started")').first();
        return await getStartedButton.isVisible();
    }
}
