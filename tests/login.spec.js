import { test, expect } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import { faker } from '@faker-js/faker';

test.describe('Verify Login System', () => {

    const email = faker.internet.email();
    const password = faker.internet.password();

    let login;
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.pickaboo.com/login', { waitUntil: 'domcontentloaded' });
        login = new LoginPage(page);

    });

    test('Verify that user can not login with invalid email and password', async ({ page }) => {
        await login.loginWithEmail(email, password);
        await page.waitForTimeout(500);
        const msg = await login.loginAlertMessage();
        await expect(msg).toContain('The account sign-in was incorrect or your account is disabled temporarily');
    });

    test('Verify that user can login with valid email and password', async ({ page }) => {
        await login.loginWithEmail("ankanbd2001@gmail.com", "ankandas.pikabo");
        await page.waitForTimeout(500);
        const msg = await login.loginAlertMessage();
        await expect(msg).toContain('Logged in successfully');
    });

});
