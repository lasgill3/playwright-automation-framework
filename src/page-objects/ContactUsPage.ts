import { BasePage } from "./base/BasePage";
import { expect } from "@playwright/test";
import { faker } from '@faker-js/faker'; 
import { CucumberWorld } from "../step-definitions/world/CucumberWorld";

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
  
  //Random Data Faker Examples 
  public async typeRandomFirstName(randomFirstName: string): Promise<void> {
    await this.fillByLocator("input[name='first_name']", randomFirstName); 
  }

  public async typeRandomLastName(randomeLastName: string): Promise<void> {
    await this.fillByLocator("input[name='last_name']", randomeLastName);
  }

  public async typeRandomEmailAddress(randomEmailAddress: string): Promise<void> {
    await this.fillByLocator("input[name='email']", randomEmailAddress);
  }

  public async typeRandomComment(randomComment: string): Promise<void> {
    await this.fillByLocator("input[name='message']", randomComment);
  }

  public async clickSubmitButton(): Promise<void> {
    await this.waitAndClickByLocator("input[type='submit']");
  }

  //get success message
  public async verifySuccessfulMessage(successMessage: string): Promise<void> {
    const acutalSuccesssMessage = await this.page.innerText("#contact_reply h1");
    await expect(acutalSuccesssMessage).toEqual(successMessage);
  }

  //get error message
  public async verifyErrorMessage(errorMessage: string): Promise<void> {
    const actualErrorMessage = await this.page.innerText("#contact_reply h1");
    await expect(actualErrorMessage).toMatch(errorMessage);
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

const contactUsPage = new ContactUsPage(); 
export default contactUsPage
