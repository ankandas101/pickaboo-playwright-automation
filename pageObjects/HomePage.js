
export default class HomePage{
    constructor(page){
        this.page = page;
        this.searchBar = page.locator("//div[@class='menu-search col']//input[@type='text' and contains(@class, 'searchInput')]");
        this.searchIcon = page.locator("//div[@class='menu-search col']//button[@type='submit' and contains(@class, 'btn-primary')]");
    }

    
    async makeSearch(productName){
        await this.page.goto('https://www.pickaboo.com/');
        await this.searchBar.fill(productName);
        await this.searchIcon.click();
    }

}