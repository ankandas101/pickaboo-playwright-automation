export default class ProductPage {
    constructor(page) {
    //super(page);
    this.page = page;
    this.addToCart = this.page.getByRole('link', { name: 'ADD TO CART' });
}


 async productTitle() {
        return await this.page.locator("h1").textContent();
    }
async productPrice() {
        return await this.page.getByRole("heading", {name}).textContent();
    }

async clickAddToCart(){
    await this.addToCart.click();
}
}