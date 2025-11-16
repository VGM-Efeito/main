import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';

test.describe('Example Test Suite', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await page.goto('https://example.com/login'); // Replace with your login URL
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.enterUsername('validUser'); // Replace with valid username
        await loginPage.enterPassword('validPassword'); // Replace with valid password
        await loginPage.submitLogin();
        
        // Assert that the dashboard is displayed after login
        await expect(dashboardPage.getDashboardElement()).toBeVisible(); // Replace with actual dashboard element
    });

    test('should show error message with invalid credentials', async () => {
        await loginPage.enterUsername('invalidUser'); // Replace with invalid username
        await loginPage.enterPassword('invalidPassword'); // Replace with invalid password
        await loginPage.submitLogin();
        
        // Assert that the error message is displayed
        await expect(loginPage.getErrorMessage()).toBeVisible(); // Replace with actual error message element
    });
});