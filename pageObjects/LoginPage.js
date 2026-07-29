import { BasePage } from "./BasePage";

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.inputEmail = this.textboxLocator('Email Address');
        this.inputpassword = this.textboxLocator('Password');
    }

    async loginWithEmail(email, password) {
        await this.page.waitForTimeout(500);
        await this.clickOnText('Login with Email');
        await this.page.waitForTimeout(1000);
        await this.fillInput(this.inputEmail, email);
        await this.fillInput(this.inputpassword, password);
        await this.page.waitForTimeout(300);
        await this.clickOnButton('Login');
    }
    async loginAlertMessage() {
        const alert = this.page.locator("div.MuiAlert-message");
        await alert.waitFor({ state: 'visible', timeout: 10000 });
        return await alert.textContent();
    }

}