import { BasePage } from "./base/BasePage";
import { expect } from "@playwright/test";

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

  //get success message
  public async getSuccessfulMessage(successMessage: string): Promise<void> {
    successMessage = await this.page.innerText("#contact_reply h1");
    await expect(successMessage).toEqual("Thank You for your Message!");
  }

  //get error message
  public async getErrorMessage(errorMessage: string): Promise<void> {
    errorMessage = await this.page.innerText("#contact_reply h1");
    await expect(errorMessage).toEqual("Thank You for your Message!");
  }

  //get header text
  public async getHeaderText(headerMessage: string): Promise<string> {
    await this.page.waitForSelector("//h1 | //body", { state: "visible" });

    //get all elements
    const elements = await this.page.locator("//h1 | //body").elementHandles();

    let foundElementText = "";

    //loop through each of the elements
    for (let element of elements) {
      //get the inner text of the element
      let text = await element.innerText();

      //if statement to check whether text includes expected text
      if (text.includes(headerMessage)) {
        foundElementText = text;
        break;
      }
    }
    return foundElementText;
  }
}
