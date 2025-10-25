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
  public async typeRandomFirstName(this: CucumberWorld): Promise<void> {
    const randomFirstName = faker.person.firstName(); 
    this.setFirstName(randomFirstName); 
    await this.basePage.fillByLocator("input[name='first_name']", randomFirstName); 
  }

  public async typeRandomLastName(this: CucumberWorld): Promise<void> {
    const randomLastName = faker.person.lastName(); 
    this.setLastName(randomLastName); 
    await this.basePage.fillByLocator("input[name='last_name']", randomLastName);

    // await this.page.locator("input[name='last_name']").fill(lastName);
  }

  public async typeRandomEmailAddress(this: CucumberWorld): Promise<void> {
    const randomEmailAddress = faker.internet.email(); 
    this.setEmailAddress(randomEmailAddress); 
    await this.basePage.fillByLocator("input[name='email']", randomEmailAddress);

    // await this.page.locator("input[name='email']").fill(email);
  }

  public async typeRandomComment(this: CucumberWorld): Promise<void> {
    // const randomComment = faker.word.words(); 
    // this.setFirstName(randomComment); 
    const randomComment = `Please could you contact me? \n Thanks 
        ${this.getFirstName()} ${this.getLastName()} ${this.getEmailAddress()}`
    await this.basePage.fillByLocator("input[name='message']", randomComment);
  
    // await this.page.locator("textarea[name='message'").fill(commentMessage);
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
