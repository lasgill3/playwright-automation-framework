import { BasePage } from "./base/BasePage";  

const url = 'https://www.webdriveruniversity.com/Login-Portal/index.html';


export class LoginPage extends BasePage {

    public async navigateToLoginPage(): Promise<void> {
        // await this.basePage.navigateToURL(url)
        await this.page.goto(url); 
    }

    public async typeUserNameAndPassword(username: string, password: string): Promise<void> {
        await this.page.fill('#text', username);
        await this.page.fill('#password', password);
    }

    public async clickLoginButton(): Promise<void> {
        await this.waitAndClickByLocator("#login-button");
    }
}