import { BasePage } from "./BasePage";

export default class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.firstSlider = page.locator("//div[@class='home-banner__slider']//div[@data-index='0' and contains(@class,'slick-slide')]");
    }

    async makeSearch(productName) {
        await this.page.getByRole("textbox", { name: 'Search for products, brands'}).fill(productName);
        await this.page.waitForTimeout(1000);
        await this.clickOnButton('search for products');
        await this.page.waitForTimeout(1000);
    }
}