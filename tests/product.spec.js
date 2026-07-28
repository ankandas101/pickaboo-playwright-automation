import { test, expect } from '@playwright/test';
import ProductPage from '../pageObjects/ProductPage.js';

test.describe('Verify Product Page', () => {

    let product;
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.pickaboo.com/product-detail/a4tech-op-330-1200dpi-optical-usb-mouse');
        product = new ProductPage(page);

    });

    test('Verify that user can see product details', async ({ page }) => {
        const title = await product.productTitle();
        console.log(title);
        await this.page.waitForTimeout(2000);
        await product.clickAddToCart();

    });

});