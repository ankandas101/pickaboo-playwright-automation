import { BasePage } from "./BasePage";
const { expect } = require('@playwright/test');

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.inputEmail = this.textboxLocator('Email Address');
        this.inputpassword = this.textboxLocator('Password');
    }

    async loginWithEmail(email, password) {
        this.goToLoginPage();
        await this.page.waitForTimeout(500);

        console.log("Login with email and password");
        await this.clickOnText('Login with Email');
        await this.page.waitForTimeout(200);
        await this.fillInput(this.inputEmail, email);
        await this.fillInput(this.inputpassword, password);
        await this.page.waitForTimeout(100);
        await this.clickOnButton('Login');
        console.log("Login button clicked");

        const loginMsg = await this.loginAlertMessage();
        console.log("Login message: " + loginMsg);
        return loginMsg;
    }
    async loginAlertMessage() {
        const alert = this.page.locator("div.MuiAlert-message");
        await expect.soft(alert).toBeVisible({ timeout: 5000 });
        return await alert.textContent();
    }

    async goToLoginPage() {

        if (await this.checkLogin()) {
            console.log("Checking if user is in Login page..");
            const currentUrl = this.page.url();
            if (currentUrl.includes('https://www.pickaboo.com/login')) {
                console.log("Already in Login page..");
            } else {
                console.log("Navigating Login page..");
                await this.spanLocator('Login').click();
                await this.page.waitForLoadState('domcontentloaded');
            }
        } else {

        }


    }


    async checkLogin() {
        const isLogin = await this.page.locator("//div[contains(@class,'right-menu')]//span[contains(text(),'Login')]");
        if (await isLogin.isVisible()) {
            console.log("User is Not Logged In");
            return isLogin;
        } else {
            console.log("User is Logged In");
            return isLogin;
        }
    }

}