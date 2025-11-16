import { test, expect } from '@playwright/test';
import { PlaywrightPage } from '../../src/pages/PlaywrightPage';

test.describe('Playwright.dev Website Tests', () => {
    let playwrightPage: PlaywrightPage;

    test.beforeEach(async ({ page }) => {
        playwrightPage = new PlaywrightPage(page);
    });

    test('should navigate to Playwright.dev and click Get Started button', async ({ page }) => {
        // Navigate to the Playwright website
        await playwrightPage.navigateTo();

        // Verify the page loaded successfully
        const title = await playwrightPage.getPageTitle();
        expect(title).toContain('Playwright');

        // Verify the "Get Started" button is visible
        const isVisible = await playwrightPage.isGetStartedButtonVisible();
        expect(isVisible).toBeTruthy();

        // Click the "Get Started" button
        await playwrightPage.clickGetStarted();

        // Wait for navigation to complete
        await page.waitForLoadState('networkidle');

        // Verify we navigated to the Getting Started page
        const currentUrl = await playwrightPage.getCurrentUrl();
        expect(currentUrl).toContain('docs');
    });

    test('should verify Playwright homepage is accessible', async ({ page }) => {
        // Navigate to the Playwright website
        await playwrightPage.navigateTo();

        // Wait for the page to fully load
        await playwrightPage.waitForPageLoad();

        // Verify the page title
        const title = await playwrightPage.getPageTitle();
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(0);

        // Verify the URL is correct
        const url = await playwrightPage.getCurrentUrl();
        expect(url).toBe('https://playwright.dev/');
    });

    test('should click Get Started and verify navigation', async ({ page }) => {
        // Navigate to Playwright website
        await playwrightPage.navigateTo();

        // Take a screenshot before clicking
        await page.screenshot({ path: 'before-click.png', fullPage: true });

        // Click Get Started button
        await playwrightPage.clickGetStarted();

        // Wait for the page to load
        await playwrightPage.waitForPageLoad();

        // Take a screenshot after clicking
        await page.screenshot({ path: 'after-click.png', fullPage: true });

        // Verify the URL changed
        const finalUrl = await playwrightPage.getCurrentUrl();
        expect(finalUrl).not.toBe('https://playwright.dev/');
        expect(finalUrl).toContain('playwright.dev');
    });
});
