import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.offerPriceLocator = page.locator("//div[@class='price-view']/h2[1]");
        this.regularPriceLocator = page.locator("//div[@class='price-view']/h2[@text-decoration='line-through']");
    }

    async productTitle() {
        return await this.page.locator("h1").textContent();
    }
    async productPrice() {
        const priceText = await this.offerPriceLocator.textContent();
        const price = priceText.split(" ")[1];
        return parseFloat(price.replace(/[^0-9.]/g, ''));;
    }
    async regularProductPrice() {
        const priceRText = await this.regularPriceLocator.textContent();
        const priceRegular = priceRText.split(" ")[1];
        return parseFloat(priceRegular.replace(/[^0-9.]/g, ''));;
    }


    async clickAddToCart() {
        await this.clickOnText('ADD TO CART');
    }

    async clickBuyNow() {
        await expect(this.linkLocator('Buy Now')).toBeVisible();
        await this.clickOnLink('Buy Now');
    } 





    async selectColor() {
        const selectColorVarient = this.page.locator("//div[@id='variant']//div[@class='parent-row']//span[contains(text(),'Color')]");

        if (await selectColorVarient.isVisible()) {
            await this.page.locator("//div[@class='color-box'][1]").click();
            console.log("Color varient found and clicked!");
        } else {
            console.log("Color varient not found, skipped clicking.");
        }
    }

    async getMessage() {
        return this.getAlertMessage();
    }
}