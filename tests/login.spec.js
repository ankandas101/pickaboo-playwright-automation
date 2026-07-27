import { test, expect } from '@playwright/test';
import LoginPage from '../pageObjects/LoginPage';

test.describe('Verify Login System', () => {

let login;
    test.beforeEach( async({page}) =>{
    await page.goto('https://www.pickaboo.com/login');
    login = new LoginPage(page);

    });

    test('Verify that user can not login with invalid email and password', async({page}) => {
    login.loginWithEmail("ankan@gmail.com","12345");
    await page.waitForTimeout(2000);
    const msg = await login.getAlertMessage();
    await expect(msg).toContain('The account sign-in was incorrect or your account is disabled temporarily');
    });



});