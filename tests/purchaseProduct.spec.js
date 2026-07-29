import { test, expect } from '@playwright/test';
import ProductPage from '../pageObjects/ProductPage.js';
import HomePage from '../pageObjects/HomePage.js';
import SearchResult from '../pageObjects/SearchResult.js'
import LoginPage from '../pageObjects/LoginPage.js';
import Cart from '../pageObjects/Cart.js';
import Shipping from '../pageObjects/Shipping.js';

test.describe('Verify a valid purchase', async () => {
  let home, product, searchResult, login, currentUrl, cart, shipping;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.pickaboo.com', { waitUntil: 'domcontentloaded' });
    home = new HomePage(page);
    product = new ProductPage(page);
    searchResult = new SearchResult(page);
    login = new LoginPage(page);
    cart = new Cart(page);
    shipping = new Shipping(page);
  });


  test('Verify that user can search a product and able to buy', async ({ page }) => {
    await page.waitForTimeout(1000);
    await home.makeSearch('Redmi Note 15');
    await searchResult.clickOnFirstResult();
    await product.selectColor();
    await page.waitForTimeout(1000);
    await product.clickBuyNow();
    //await page.waitForLoadState('domcontentloaded');
    const msg = await product.getAlertMessage();
    console.log(msg);

    await page.waitForTimeout(2000);
    currentUrl = page.url();
    //console.log(currentUrl);

    if (currentUrl.includes('https://www.pickaboo.com/login?itemcartguest')) {
      console.log("User is not Logged in , Tring to Login ");

      await login.loginWithEmail("ankanbd2001@gmail.com", "ankandas.pikabo");
      await page.waitForTimeout(500);
      const loginMsg = await login.loginAlertMessage();
      await expect(loginMsg).toContain('Logged in successfully');
      console.log(loginMsg);
      await page.waitForLoadState('domcontentloaded');
    } else {
      console.log("User already logged in, Skip it ");
    }


    
    await page.waitForLoadState('domcontentloaded');

    await cart.clickProceedToCheckout();
 
    await page.waitForLoadState('domcontentloaded');

    await shipping.addShippingAddress();
    await page.waitForLoadState('domcontentloaded');
    await shipping.fillShippingDetails();

  });

}); 