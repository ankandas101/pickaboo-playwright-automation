import { test, expect } from '@playwright/test';
import ProductPage from '../pageObjects/ProductPage.js';

test.describe('Verify Product Page', () => {
    let product, title, offerPrice, regularPrice;
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.pickaboo.com/product-detail/a4tech-op-330-1200dpi-optical-usb-mouse', { waitUntil: 'domcontentloaded' });
        product = new ProductPage(page);
        title = await product.productTitle();
        offerPrice = await product.productPrice();
        regularPrice = await product.regularProductPrice();
    });

    test('Verify that user can see product details', async ({ page }) => {

        console.log(title);
        console.log(offerPrice);
        console.log(regularPrice);
    });

    test('Verify that ADD TO CART button visiable', async ({ page }) => {
        await expect(page.getByRole("link", { name: 'ADD TO CART' })).toBeVisible();
    });

    test('Verify that Buy Now button visiable', async ({ page }) => {
        await expect(page.getByRole("link", { name: 'Buy Now' })).toBeVisible();
    });

    test('Verify that Offer Price less than Regular Price ', async ({ page }) => {
        expect(offerPrice).toBeLessThan(regularPrice);
    });

});