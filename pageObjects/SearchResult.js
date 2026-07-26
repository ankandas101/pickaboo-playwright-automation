import { title } from "node:process";

export default class SearchResult{
    constructor(page){
        this.page = page;
        this.productLinks = page.locator("//div[contains(@class,' product-one')]//a[contains(@href,'product-detail')]");
        this.productNames = page.locator("//div[contains(@class,' product-one')]//a[contains(@href,'product-detail')]//h4[contains(@class,'product-title')]");
        this.resultText = this.page.locator("//h3[contains(@class,'sub-title') and contains(text(),'item')]");

    }n

    async visitResultProducts(){
        const totalProducts = await this.productLinks.count();
        const totalFoundProduct = await this.getResultNumber();

        console.log("Total search products found:" + totalFoundProduct );
        
        if(totalFoundProduct>0){
            console.log("Visit Three search results.");
            for (let i = 0; i < 3; i++) {
                await this.productLinks.nth(i).click();
                await this.page.waitForTimeout(3000); 
                console.log("Going back to all search results.");
                await this.page.goBack();
            }
        }else{
            console.log("No Product Found.");
        }
    }

    async viewResultNames(){
        const titles = await this.productNames.all();
        console.log("Showing all product title founded in first page.");
        for(const title of titles){   
            const realTitle = await title.textContent();
            console.log(realTitle);
        }
    }

    async getResultNumber(){
        const fullText = await this.resultText.textContent();
        const number = parseInt(fullText.match(/\d+/)[0]); 
        console.log("Result Found" + number);
        return number;
    }

}