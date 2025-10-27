import { BasePage } from "./base/BasePage";  
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {

    public async typeUserNameAndPassword(username: string, password: string): Promise<void> {
        await this.page.fill('#text', username);
        await this.page.fill('#password', password);
    }

    public async clickLoginButton(): Promise<void> {
        await this.waitAndClickByLocator("#login-button");
    }
}