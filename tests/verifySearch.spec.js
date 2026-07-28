import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/HomePage.js';
import SearchResult from '../pageObjects/SearchResult.js';

test.describe("Product Search Verify", () => {
    let searchResult, homePage;
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.pickaboo.com/search-result/phone");
        homePage = new HomePage(page);
        searchResult = new SearchResult(page);
    });

    test("Verify that Search Results appare and visit product", async ({ page }) => {
        await page.waitForTimeout(3000);
        await searchResult.visitSearchResult(3);
        await page.waitForTimeout(3000);
    });

    test("Verify that Search Results number Geater than Zero", async ({ page }) => {
        await page.waitForTimeout(1000);
        const resultCount = await searchResult.getNumberOfResult();
        expect(resultCount).toBeGreaterThan(0);
    });

});