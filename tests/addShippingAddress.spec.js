import { test, expect } from '@playwright/test';
import Shipping from '../pageObjects/Shipping';


test.describe('Verify user shipping address', async () => {
  let shipping;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.pickaboo.com/checkout/shipping', { waitUntil: 'domcontentloaded' });
    shipping = new Shipping(page);
  });

  test('Verify that user can add new shipping address', async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    await shipping.addShippingAddress();
  });

}); 