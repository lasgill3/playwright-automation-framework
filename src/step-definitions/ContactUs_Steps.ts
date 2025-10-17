import { defineStep as And, Given, When, Then, Before, After } from '@cucumber/cucumber';
import { pageFixure } from './hooks/browserContextFixture';
import { Browser, chromium, Page } from "playwright";

let page: Page; 


And('I type a first name', async () => {
    // const firstNameInput = await page.locator('input[name="first_name"]');  
    // await firstNameInput.fill('John');
    await pageFixure.page.locator("input[name='first_name']").fill('Latunji'); 
   
});

And('I type a last name', async () => {
   await page.locator("input[name='last_name']").fill('Latunji'); 
});

And('I enter an email address', async () => {
   

});

And('I type a comment', async () => {

});

And('I click on the submit button', async () => {

});

Then('I should be presented with a successful contact us submission message', async () => {

});