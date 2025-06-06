import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        // Navigate to login page
        await loginPage.navigate('/login');
        
        // Verify we're on the login page
        expect(await loginPage.isLoginPage()).toBeTruthy();
        
        // Perform login
        await loginPage.login('test@example.com', 'password123');
        
        // Add assertions here based on your application's behavior
        // For example:
        // await expect(page).toHaveURL('/dashboard');
    });

    test('should show error with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.navigate('/login');
        await loginPage.login('invalid@example.com', 'wrongpassword');
        
        // Add assertions for error message
        // await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    });
}); 