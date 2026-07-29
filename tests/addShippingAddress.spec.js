import { test, expect } from '@playwright/test';
import Shipping from '../pageObjects/Shipping';


test.describe('Verify user shipping address', async () => {
  let shipping;
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.pickaboo.com/checkout/shipping', { waitUntil: 'domcontentloaded' });
    shipping = new Shipping(page);
  });

  test('Verify that user can see button Change address', async ({ page }) => {
    await expect(page.locator("//div[@class='buttons-wrap']//p[contains(text(),'Change address')]")).toBeVisible();
  });

  test('Verify that user can see button Add New Address', async ({ page }) => {
    await expect(page.locator("//div[@class='buttons-wrap']//p[contains(text(),'Add New Address')]")).toBeVisible();
  });

}); 