import { BasePage } from "./BasePage";

export default class Shipping extends BasePage {

  constructor(page) {
    super(page);
    this.addNewShippingBtn = page.getByText('Add New Address');
    this.divisionDropdown = page.getByRole('button', { name: 'Open' }).first();
    this.cityDropdown = page.getByRole('button', { name: 'Open' }).nth(1);
    this.areaDropdown = page.getByRole('button', { name: 'Open' }).nth(2);
    this.deleveryMet = page.getByRole('button', { name: 'Open' }).nth(3);


  }

  async addShippingAddress() {
    await this.addNewShippingBtn.click({ timeout: 10000 });
    await this.page.waitForLoadState('domcontentloaded');
  }


  async fillShippingDetails() {
    await this.fillInput((this.textboxLocator('Enter your first name')), 'ankan');
    await this.fillInput((this.textboxLocator('Enter your last name')), 'das');

    await this.fillInput((this.page.getByRole('spinbutton', { name: 'Enter your number' }) ), '01745009965');

    await this.fillInput((this.textboxLocator('Enter H. no, R. no, block/sector')), 'khulna, sonadanga');

    console.log("Selecting Division...");
    await this.divisionDropdown.click();
    await this.selectOption('Khulna');
    console.log("Selecting City...");

    await this.cityDropdown.click();
    await this.selectOption('Bagerhat');

    console.log("Selecting Delevery Area...");
    await this.areaDropdown.click();
    await this.selectOption('Bagerhat Sadar');

        console.log("Selecting Delevery Method...");

    await this.deleveryMet.click();
    await this.selectOption('Use as default shipping address');

    await this.clickOnButton('Save Address');
    await this.page.waitForLoadState('domcontentloaded');

  }

}
