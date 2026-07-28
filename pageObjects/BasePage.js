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
        await this.textLocator(text).click();
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
        await locator.fill(value);
    }

    classLocator(className) {
        return this.page.locator(`//*[contains(@class, '${className}')]`);
    }

}
