import { test, expect } from "@playwright/test";
import { assert } from "node:console";
import HomePage from "../pageObjects/HomePage";

test.describe("Verify HomePage", () => {
  let home;
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.pickaboo.com/', { waitUntil: 'domcontentloaded' });
    home = new HomePage(page);
  });

  test("Load HomePage with correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Pickaboo: The Best E-Commerce Platform in Bangladesh for Hassle-Free Online Shopping");
    await page.waitForTimeout(1000);
  });

  test("verify that Navigate Login button appaare", async ({ page }) => {
    await page.waitForTimeout(500);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator("//span[contains(text(),'Login')]")).toBeVisible();
  });

  test("Verify that Slide load successfull", async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator("//div[@class='home-banner__slider']//div[@data-index='0' and contains(@class,'slick-slide')]")).toBeVisible({ timeout: 10000 });
  });

  test("Verify that homepage load with correct status code", async ({ page }) => {
    const response = await page.goto("https://www.pickaboo.com/", { waitUntil: 'domcontentloaded' });
    expect(response.status()).toBe(200);
  });
});
