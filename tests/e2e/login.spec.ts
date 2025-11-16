import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { DashboardPage } from '../../src/pages/DashboardPage';
import { mcpFixture } from '../../src/fixtures/mcpFixture';

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await page.goto('/login'); // Adjust the URL as necessary
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.enterUsername('validUser');
        await loginPage.enterPassword('validPassword');
        await loginPage.submitLogin();
        
        await expect(dashboardPage.getWelcomeMessage()).toBeVisible();
    });

    test('should show error message with invalid credentials', async () => {
        await loginPage.enterUsername('invalidUser');
        await loginPage.enterPassword('invalidPassword');
        await loginPage.submitLogin();
        
        await expect(loginPage.getErrorMessage()).toBeVisible();
    });
});