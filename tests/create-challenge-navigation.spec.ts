import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { DashboardSidebarPage } from '../pages/DashboardSidebarPage';
import { CreateChallengePage } from '../pages/CreateChallengePage';

// Main suite for Create Challenge tests
test.describe('Create Challenge Flow', () => {
    let adminPage: Page; // To store the new tab/page reference

    // This hook runs before each test, handling login and navigation
    test.beforeEach(async ({ page, context }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const adminDashboardPage = new AdminDashboardPage(page);
        const sidebar = new DashboardSidebarPage(page);

        // 1. Login and navigate to home
        await loginPage.navigate();
        await loginPage.login('johnmclane@jsdemo.com', 'welcome');
        await page.waitForURL('**/ng/home', { timeout: 15000 });

        // 2. Open Admin Dashboard in a new tab
        const [newAdminPage] = await Promise.all([
            context.waitForEvent('page'),
            dashboardPage.navigateToAdminDashboard(),
        ]);
        adminPage = newAdminPage; // Assign the new page to the outer scope

        // 3. Navigate to Vantage Fit and then to the Create Challenge page
        const newAdminDashboardPage = new AdminDashboardPage(adminPage);
        await adminPage.waitForURL('**/yearbook/insights', { timeout: 15000 });
        await newAdminDashboardPage.navigateToVantageFitOverview();
        const newSidebar = new DashboardSidebarPage(adminPage);
        await newSidebar.navigateToCreateChallenge();
    });

    // This hook runs after each test, ensuring the new tab is closed
    test.afterEach(async () => {
        if (adminPage) {
            await adminPage.close();
        }
    });

    // Test cases for each challenge type
    test('should navigate to Custom Challenge page', async () => {
        const createChallengePage = new CreateChallengePage(adminPage);
        await createChallengePage.selectChallengeType('Custom');
        await adminPage.waitForURL('**/create-challenge/custom-challenge', { timeout: 10000 });
        expect(adminPage.url()).toContain('/fit/create-challenge/custom-challenge');
    });

    test('should navigate to Race Challenge page', async () => {
        const createChallengePage = new CreateChallengePage(adminPage);
        await createChallengePage.selectChallengeType('Race');
        await adminPage.waitForURL('**/create-challenge/race-challenge', { timeout: 10000 });
        expect(adminPage.url()).toContain('/fit/create-challenge/race-challenge');
    });

    test('should navigate to Journey Challenge page', async () => {
        const createChallengePage = new CreateChallengePage(adminPage);
        await createChallengePage.selectChallengeType('Journey');
        await adminPage.waitForURL('**/create-challenge/journey-challenge', { timeout: 10000 });
        expect(adminPage.url()).toContain('/fit/create-challenge/journey-challenge');
    });

    test('should navigate to E-Marathon Challenge page', async () => {
        const createChallengePage = new CreateChallengePage(adminPage);
        await createChallengePage.selectChallengeType('E-Marathon');
        await adminPage.waitForURL('**/create-challenge/e-marathon-challenge', { timeout: 10000 });
        expect(adminPage.url()).toContain('/fit/create-challenge/e-marathon-challenge');
    });

    test('should navigate to Streak Challenge page', async () => {
        const createChallengePage = new CreateChallengePage(adminPage);
        await createChallengePage.selectChallengeType('Streak');
        await adminPage.waitForURL('**/create-challenge/streak-challenge', { timeout: 10000 });
        expect(adminPage.url()).toContain('/fit/create-challenge/streak-challenge');
    });
}); 