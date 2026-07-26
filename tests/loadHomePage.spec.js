import { test, expect } from '@playwright/test';
import { assert } from 'node:console';

test.describe('Load HomePage', () => {

test('Load Home page', async ({ page }) => {
  await page.goto('https://www.pickaboo.com/');
  await page.waitForTimeout(1000);
});

test('Navigate Login Page', async ({page}) => {
await page.goto('https://www.pickaboo.com/');
await page.locator("//span[contains(text(),'Login')]").click();
});

});