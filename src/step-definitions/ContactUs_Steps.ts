import { defineStep as And, Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CucumberWorld } from './world/CucumberWorld';
import logger from '../looger/logger';
import contactUsPage from '../page-objects/ContactUsPage';


And('I type a first name', async function (this: CucumberWorld) {
    // const firstNameInput = await page.locator('input[name="first_name"]');  
    // await firstNameInput.fill('John');

    // logger.info(`Base URL from World: ${this.getURL()}`);
    // await pageFixture.page.locator("input[name='first_name']").fill('Latunji'); 
    
    await this.contactUsPage.typeFirstName("Latunji");
});

And('I type a last name', async function (this: CucumberWorld) {
//    await pageFixture.page.locator("input[name='last_name']").fill('Asgill'); 
    await this.contactUsPage.typeLastName('Asgill');
});

And('I enter an email address', async function (this: CucumberWorld) {
    // await pageFixture.page.locator("input[name='email']").fill('fakeEmail@gmail.com');
    await this.contactUsPage.typeEmailAddress('fakeEmail@gmail.com'); 
});

And('I type a comment', async function (this: CucumberWorld) {
    // await pageFixture.page.locator("textarea[name='message']").fill('This is a test comment for the contact us form.');
    await this.contactUsPage.typeComment('This is a test comment for the contact us form.');

});

And('I click on the submit button', async function (this: CucumberWorld) {
    // await pageFixture.page.locator("input[type='submit']").click();
    await this.contactUsPage.clickSubmitButton(); 
});

Then('I should be presented with a successful contact us submission message', async function(this: CucumberWorld) {
    // const successMessage = await pageFixture.page.innerText("#contact_reply h1");
    
    // const succesMessage = await this.contactUsPage.getSuccessfulMessage(); 
    // await expect(successMessage).toEqual("Thank You for your Message!");

    await this.contactUsPage.verifySuccessfulMessage('hank You for your Message!'); 
});

Then('I should be presented with a unsuccessful contact us submission message', async function (this: CucumberWorld) {
    // await pageFixture.page.waitForSelector("body");
    // const bodyElement = await pageFixture.page.locator("body");

    // const bodyText = await bodyElement.textContent();
    // await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);   

    await this.contactUsPage.verifyErrorMessage('/Error: (all fields are required|Invalid email address)/');
});


And('I type a specific first name {string}', async function (this: CucumberWorld, fname: string ) {
    // await pageFixture.page.locator("input[name='first_name']").fill(fname);
    await this.contactUsPage.typeFirstName(fname); 
}); 

And('I type a specific last name {string}', async function (this: CucumberWorld, lname: string) {
    // await pageFixture.page.locator("input[name='last_name']").fill(lname);
    await this.contactUsPage.typeLastName(lname); 
}); 

And('I enter a specific email address {string}', async function (this: CucumberWorld, email: string) {
    // await pageFixture.page.locator("input[name='email']").fill(email);  
    await this.contactUsPage.typeEmailAddress(email); 
}); 

And('I type a specific word {string} and number {int} within the comment input field', async function (this: CucumberWorld, comment: string, randomNumber: number) {
    // await pageFixture.page.locator("textarea[name='message']").fill(`${comment} ${randomNumber}`);  
    await this.contactUsPage.typeComment(comment + " " + randomNumber);
}); 

//Random Data Faker Example 
And('I type a random first name', async function (this: CucumberWorld) {
    // const randomFirstName = faker.person.firstName();
    // this.setFirstName(randomFirstName);
    // await pageFixture.page.locator("input[name='first_name']").fill(randomFirstName);
    
    const randomFirstName = faker.person.firstName(); 
    this.setFirstName(randomFirstName); 
    await this.contactUsPage.typeRandomFirstName(randomFirstName); 
}); 

And('I type a random last name', async function (this: CucumberWorld) {
    const randomLastName = faker.person.lastName();
    this.setLastName(randomLastName);
    // await pageFixture.page.locator("input[name='last_name']").fill(randomLastName);
});         

And('I enter a random email address', async function (this: CucumberWorld) {
    const randomEmail = faker.internet.email();
    this.setEmailAddress(randomEmail);
    await pageFixture.page.locator("input[name='email']").fill(randomEmail);  
});

And('I type a random comment', async function (this: CucumberWorld) {
    // await pageFixture.page.locator("textarea[name='message']").fill(`Please could you contact me? \n Thanks 
    //     ${this.getFirstName()} ${this.getLastName()} ${this.getEmailAddress()}`);  
        // await pageFixture.page.pause();

    const randomComment = `Please could you contact me? \n Thanks ${this.getFirstName()} ${this.getLastName()} ${this.getEmailAddress()}`;
    await this.contactUsPage.typeRandomComment(randomComment); 
});


//secnario outlines: )
And('I type both first name {string} and a last name {string}', async function (this: CucumberWorld, firstName: string, lastName: string) {
    // await pageFixture.page.locator("input[name='first_name']").fill(firstName);
    // await pageFixture.page.locator("input[name='last_name']").fill(lastName);   

    await this.contactUsPage.typeFirstName(firstName);
    await this.contactUsPage.typeLastName(lastName);
});

And('I type an email {string} and a comment {string}', async function (emailAdress: string, comment: string) {   
    // await pageFixture.page.locator("input[name='email']").fill(emailAdress);  
    // await pageFixture.page.locator("textarea[name='message']").fill(comment);

    await this.contactUsPage.typeEmailAddress(emailAdress);
    await this.contactUsPagae.typeComment(comment); 
}); 

And('I should be presented with header text {string}', async function (successMessage: string) {   
    const foundElementText: string = this.contactusPage(successMessage); 
    //perform an assertion
    expect(foundElementText).toContain(successMessage);
}); 