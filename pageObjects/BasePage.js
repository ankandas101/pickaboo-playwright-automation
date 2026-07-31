const { expect } = require('@playwright/test');

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    linkLocator(linkText) {
        return this.page.getByRole("link", { name: linkText, exact: true });
    }

    async clickOnLink(linkText) {
        await this.linkLocator(linkText).click();
    }

    textLocator(text) {
        return this.page.getByText(text);
    }

    async clickOnText(text) {
        await this.textLocator(text).click({timeout: 2000});
    }

    textboxLocator(name) {
        return this.page.getByRole("textbox", { name: name, exact: true });
    }
    async clickOnTextbox(textBoxName) {
        await this.textboxLocator(textBoxName).click();
    }

    buttonLocator(name) {
        return this.page.getByRole("button", { name: name, exact: true });
    }
    async clickOnButton(name) {
        await this.buttonLocator(name).click();
    }

    passwordLocator() {
        return this.page.locator('//input[type="password"]');
    }

    async fillInput(locator, value) {
       // expect(await locator.toBeVisible());
        await locator.fill(value);
    }

    classLocator(className) {
        return this.page.locator(`//*[contains(@class, '${className}')]`);
    }

    headingLocator(name) {
        return this.page.getByRole("heading", { name: name })
    }



    async getAlertMessage() {
        const alert = this.page.locator("div.MuiAlert-message");
        await expect.soft(alert).toBeVisible({ timeout: 5000 });
        return await alert.textContent();
    }

    async selectOption(name){
    const clk =  await this.page.getByRole('option', { name: name , exact: true});
    await clk.click();
    }


    spanLocator(hasText){
        return this.page.locator('span').filter({ hasText: hasText, exact:true });
    }
}
