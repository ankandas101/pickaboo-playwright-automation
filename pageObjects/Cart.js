import { BasePage } from "./BasePage";

export default class Cart extends BasePage {
  constructor(page) {
    super(page);
  }

  async clickProceedToCheckout() {
    await this.page.pause();
    this.page.waitForTimeout(2000);
    const isQuantifyUnavailable = this.textLocator('Some of the products are out');

    if (isQuantifyUnavailable.isVisible()) {
      console.log("Some of the products are out of stoke");
    } else {

    console.log("All Product Available..we proceed to check out");
    await this.clickOnText('Proceed to checkout');
    await this.page.waitForLoadState('domcontentloaded');
    }


  }


}