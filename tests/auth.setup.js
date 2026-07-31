import { test as setup, expect } from '@playwright/test';
import path from 'path';
import LoginPage from '../pageObjects/LoginPage';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. 
        const login = new LoginPage(page);
        
        await page.goto('https://www.pickaboo.com/login', { waitUntil: 'domcontentloaded' });
        await login.loginWithEmail("ankanbd2001@gmail.com", "ankandas.pikabo");
        await page.waitForTimeout(500);

  await page.context().storageState({ path: authFile });
});