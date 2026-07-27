
export default class HomePage{
    constructor(page){
        this.page = page;
        this.searchBar = page.locator("//div[@class='menu-search col']//input[@type='text' and contains(@class, 'searchInput')]");
        this.searchIcon = page.locator("//div[@class='menu-search col']//button[@type='submit' and contains(@class, 'btn-primary')]");
        this.firstSlider = page.locator("//div[@class='home-banner__slider']//div[@data-index='0' and contains(@class,'slick-slide')]");
    }

    async makeSearch(productName){
        await this.searchBar.fill(productName);
        await this.page.waitForTimeout(2000);
        await this.searchIcon.click();
    }

}