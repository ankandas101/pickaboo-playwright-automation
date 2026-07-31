import { test, expect } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';
import { faker } from '@faker-js/faker';

test.describe('Verify Login System', () => {
    
    
    test.use({ storageState: { cookies: [], origins: [] } });

    const email = faker.internet.email();
    const password = faker.internet.password();

    let login, isLogin;
    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.pickaboo.com/login', { waitUntil: 'domcontentloaded' });
        login = new LoginPage(page);
        isLogin = await page.locator("//div[contains(@class,'right-menu')]//span[contains(text(),'Login')]");
    });

    test('Verify that user can not login with invalid email and password', async ({ page }) => {

        const msg = await login.loginWithEmail(email, password);
        await expect(msg).toContain('The account sign-in was incorrect or your account is disabled temporarily');
    });

    test('Verify that user can login with valid email and password', async ({ page }) => {
        test.setTimeout(50000);

        if (await isLogin.isVisible()) {
            console.log("User is Not Logged In");
            const msg = await login.loginWithEmail("ankanbd2001@gmail.com", "ankandas.pikabo");
            await expect(msg).toContain('Logged in successfully');
        } else {
            console.log("User Logged In..");
        }


    });



});
