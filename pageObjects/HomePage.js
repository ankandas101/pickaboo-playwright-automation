import { BasePage } from "./BasePage";

export default class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.searchBar = this.textboxLocator('Search for products, brands');
        this.firstSlider = page.locator("//div[@class='home-banner__slider']//div[@data-index='0' and contains(@class,'slick-slide')]");
    }

    async makeSearch(productName) {
        await this.searchBar.fill(productName);
        await this.page.waitForTimeout(2000);
        await this.clickOnButton('search for products');
    }

}