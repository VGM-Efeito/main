export const mcpFixture = async ({ page }) => {
    // Setup necessary data or state for the tests
    // This could include mock data or configurations for the MCP integration

    // Example: Mocking an API response
    await page.route('**/api/login', async (route) => {
        const response = {
            success: true,
            token: 'mocked-token',
        };
        await route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(response),
        });
    });

    // Additional setup can be added here
};