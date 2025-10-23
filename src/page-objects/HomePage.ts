import { BasePage } from "./base/BasePage"

export class HomePage extends BasePage {

    public async clickOnContactButton(): Promise<void> {
        await this.waitAndClickByLocator("#contact-us"); 
    }

    public async clickOnLoginPortalButton(): Promise<void> {
        await this.waitAndClickByLocator("#login-portal"); 
    }

}