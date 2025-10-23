import { BasePage } from "./base/BasePage";

export class ContactUsPage extends BasePage {

  public async typeFirstName(firstName: string): Promise<void> {
    await this.page.locator("input[name='first_name']").fill(firstName);
  }

  public async typeLastName(lastName: string): Promise<void> {
    await this.page.locator("input[name='last_name']").fill(lastName);
  }

  public async typeEmailAddress(email: string): Promise<void> {
    await this.page.locator("input[name='email']").fill(email);
  }

  public async typeComment(commentMessage: string): Promise<void> {
    await this.page.locator("textarea[name='message'").fill(commentMessage);
  }

  public async clickSubmitButton(): Promise<void> {
     await this.waitAndClickByLocator("input[type='submit']"); 
  }


}
