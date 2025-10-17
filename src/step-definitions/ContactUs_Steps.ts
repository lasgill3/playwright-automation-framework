import { defineStep as And, Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

And('I type a first name', async () => {
    // const firstNameInput = await page.locator('input[name="first_name"]');  
    // await firstNameInput.fill('John');
    await pageFixture.page.locator("input[name='first_name']").fill('Latunji'); 
    // await pageFixture.page.getByPlaceholder('First Name').fill("Joe");
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
    // const errorMessage = await pageFixture.page.innerText("body");
    await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);   
});