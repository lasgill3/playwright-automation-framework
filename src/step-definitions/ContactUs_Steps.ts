import { defineStep as And, Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CucumberWorld } from './world/CucumberWorld';
import logger from '../looger/logger';


And('I type a first name', async function (this: CucumberWorld) {
    // const firstNameInput = await page.locator('input[name="first_name"]');  
    // await firstNameInput.fill('John');

    logger.info(`Base URL from World: ${this.getURL()}`);
    await pageFixture.page.locator("input[name='first_name']").fill('Latunji'); 
    
});

And('I type a last name', async () => {
   await pageFixture.page.locator("input[name='last_name']").fill('Asgill'); 
   
});

And('I enter an email address', async () => {
    await pageFixture.page.locator("input[name='email']").fill('lasgill@gmail.com');
});

And('I type a comment', async () => {
    await pageFixture.page.locator("textarea[name='message']").fill('This is a test comment for the contact us form.');

});

And('I click on the submit button', async () => {
    await pageFixture.page.locator("input[type='submit']").click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    const successMessage = await pageFixture.page.innerText("#contact_reply h1");
    expect(successMessage).toEqual("Thank You for your Message!");
});

Then('I should be presented with a unsuccessful contact us submission message', async () => {
    await pageFixture.page.waitForSelector("body");
    const bodyElement = await pageFixture.page.locator("body");

    const bodyText = await bodyElement.textContent();
    await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);   
});


And('I type a specific first name {string}', async (fname: string) => {
    await pageFixture.page.locator("input[name='first_name']").fill(fname);
}); 

And('I type a specific last name {string}', async (lname: string) => {
    await pageFixture.page.locator("input[name='last_name']").fill(lname);
}); 

And('I enter a specific email address {string}', async (email: string) => {
    await pageFixture.page.locator("input[name='email']").fill(email);  
}); 

And('I type a specific word {string} and number {int} within the comment input field', async (comment: string, randomNumber: number) => {
    await pageFixture.page.locator("textarea[name='message']").fill(`${comment} ${randomNumber}`);  
}); 

// And('I type a random first name {string}', async (fname: string) => {
//     const randomFirstName = faker.person.firstName();
//     await pageFixture.page.locator("input[name='first_name']").fill(randomFirstName);
// }); 

// And('I type a random last name {string}', async (lname: string) => {
//     const randomLastName = faker.person.lastName();
//     await pageFixture.page.locator("input[name='last_name']").fill(randomLastName);
// });         

// And('I enter a random email address {string}', async (email: string) => {
//     const randomEmail = faker.internet.email();
//     await pageFixture.page.locator("input[name='email']").fill(randomEmail);  
//     await pageFixture.page.pause(); 
// });

// And('I type a random word {string} and number {int} within the comment input field', async (comment: string, randomNumber: number) => {
//     await pageFixture.page.locator("textarea[name='message']").fill(`${comment} ${randomNumber}`);  
// });


And('I type both first name {string} and a last name {string}', async (firstName: string, lastName: string) => {
    await pageFixture.page.locator("input[name='first_name']").fill(firstName);
    await pageFixture.page.locator("input[name='last_name']").fill(lastName);   
});

And('I type an email {string} and a comment {string}', async (emailAdress: string, comment: string) => {   
    await pageFixture.page.locator("input[name='email']").fill(emailAdress);  
    await pageFixture.page.locator("textarea[name='message']").fill(comment);
    // await pageFixture.page.pause();
}); 

And('I should be presented with header text {string}', async (successMessage: string) => {   
    await pageFixture.page.waitForSelector("//h1 | //body", {state: 'visible'});

    //get all elements
    const elements = await pageFixture.page.locator("//h1 | //body").elementHandles();
    
    let foundElementText = '';

    //loop through each of the elements
    for(let element of elements) {
        //get the inner text of the element
        let text = await element.innerText();

        //if statement to check whether text includes expected text
        if(text.includes(successMessage)) {
            foundElementText = text;
            break;
        }
    }
    //perform an assertion
    expect(foundElementText).toContain(successMessage);
}); 