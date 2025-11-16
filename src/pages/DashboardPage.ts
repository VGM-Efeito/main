import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardRoot: Locator;

    constructor(page: Page) {
        this.page = page;
        // Ajuste o seletor para o elemento que identifica seu dashboard
        this.dashboardRoot = page.locator('#dashboard, [data-test="dashboard"], .dashboard');
    }

    getDashboardElement() {
        return this.dashboardRoot;
    }
}