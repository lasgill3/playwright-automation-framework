import { defineStep as And, Given, When, Then, Before, After } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

And('I type a first name', async () => {
    // const firstNameInput = await page.locator('input[name="first_name"]');  
    // await firstNameInput.fill('John');
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