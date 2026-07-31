import { title } from "node:process";
import { BasePage } from "./BasePage";

export default class SearchResult extends BasePage {
    constructor(page) {
        super(page);

        this.productLinks = page.locator("//div[contains(@class,' product-one')]//a[contains(@href,'product-detail')]");
        this.productNames = page.locator("//div[contains(@class,' product-one')]//a[contains(@href,'product-detail')]//h4[contains(@class,'product-title')]");
        this.resultText = this.page.locator("//h3[contains(@class,'sub-title') and contains(text(),'item')]");
    }

    async visitSearchResult(number_of_visit) {
        const NumOfProducts = await this.productLinks.count();
        console.log("products found on first page:" + NumOfProducts);

        if (NumOfProducts > 0) {
            console.log(`Visit ${number_of_visit} search results.`);

            for (let i = 0; i < number_of_visit; i++) {

                await this.productLinks.nth(i).click();
                await this.page.waitForTimeout(3000);
                console.log("Going back to all search results.");
                await this.page.goBack();
            }
        } else {
            console.log("No Product Found.");
        }
    }

    async getResultTitle() {
        const titles = await this.productNames.all();
        console.log("Showing all product title founded in first page.");
        for (const title of titles) {
            const realTitle = await title.textContent();
            console.log(realTitle);
        }
    }

    async getNumberOfResult() {
        const fullText = await this.resultText.textContent();
        const number = parseInt(fullText.match(/\d+/)[0]);
        console.log("Total Result Found: " + number);
        return number;
    }



    async clickOnFirstResult(){
    await this.productLinks.nth(0).click();
    //await this.page.waitForTimeout(3000);
    }

} 