export default class LoginPage{

    constructor(page){
        this.page = page;
        this.changeLoginMethodBtn = page.locator("//div[contains(text(),'Login with ')]");
        this.inputEmail = page.locator("//input[@name='userEmail']");
        this.inputpassword = page.locator("//input[@name='userPassword' and @type = 'password']");
        this.loginBtn = page.locator("//button[@type='submit' ] /span[contains( text(),'Login')]");
    }

    async loginWithEmail(email,password){
    await this.changeLoginMethodBtn.click();
    await this.inputEmail.fill(`${email}`);
    await this.inputpassword.fill(`${password}`);
    await this.page.waitForTimeout(2000); 
    await this.loginBtn.click();
    }

    async getAlertMessage(){
    const message = await this.page.locator("//div[@class='MuiAlert-message']").textContent();
    return message;
    }

}