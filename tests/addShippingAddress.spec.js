import { test, expect } from '@playwright/test';
import Shipping from '../pageObjects/Shipping';
import LoginPage from '../pageObjects/LoginPage';


test.describe('Verify user shipping address', async () => {
  let shipping, login;


  test.beforeEach(async ({ page }) => {

    shipping = new Shipping(page);
    login = new LoginPage(page);
    
   await page.goto('https://www.pickaboo.com/', { waitUntil: 'domcontentloaded' });

    const isLogin = await login.spanLocator('Login');

    if (await isLogin.isVisible()) {
       console.log("User is Not Logged In");
            const msg = await login.loginWithEmail("ankanbd2001@gmail.com", "ankandas.pikabo");
            await expect(msg).toContain('Logged in successfully');
    }

    await page.goto('https://www.pickaboo.com/checkout/shipping', { waitUntil: 'domcontentloaded' });

  });

  test.only('Verify that user can see button Change address', async ({ page }) => {

    await expect(page.locator("//div[@class='buttons-wrap']//p[contains(text(),'Change address')]")).toBeVisible();
  });

  test('Verify that user can see button Add New Address', async ({ page }) => {
    await expect(page.locator("//div[@class='buttons-wrap']//p[contains(text(),'Add New Address')]")).toBeVisible();
  });

}); 