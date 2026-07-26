import { test, expect } from '@playwright/test';
import HomePage  from '../pageObjects/HomePage.js';
import SearchResult from '../pageObjects/SearchResult.js';

test.describe("Product Search Verify Test",() =>{

    test("Search and visit 3 result", async({page}) =>{
    const homePage = new HomePage(page);
    await homePage.makeSearch("phone");
    await page.waitForTimeout(3000);

    const searchResult = new SearchResult(page);

    await searchResult.visitResultProducts();
    await page.waitForTimeout(3000);
    });

    test("Verify search results", async({page}) =>{
    const homePage = new HomePage(page);
    await homePage.makeSearch("phone");
    const searchResult = new SearchResult(page);    
    await page.waitForTimeout(1000);
    const resultCount = await searchResult.getResultNumber();
    expect(resultCount).toBeGreaterThan(0);    
    });

});