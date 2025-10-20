import { defineStep as And, Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

let alertText: string;

Given('I navigate to the webdriveruniversity login page', async () => {
    await pageFixture.page.goto('https://www.webdriveruniversity.com/Login-Portal/index.html'); 
});

And('I type an username {string} and password {string}', async (username: string, pwd: string) => {
    await pageFixture.page.fill('#text', username);
    await pageFixture.page.fill('#password', pwd);
}); 

And('I click on the login button', async () => {
    await  pageFixture.page.on('dialog', async (alert) => {
        alertText = alert.message();
        // console.log(`Alert message: ${alertText}`);
        await alert.accept();
        // await alert.dismiss();
    });
    await pageFixture.page.click('#login-button', {force: true });
});

Then('I should be presented with an alert box which contains text {string}', async (expectedAlertMessage: string) => {
    // pageFixture.page.on('dialog', async dialog => {
    //     expect(dialog.message()).toBe(expectedAlertMessage);
    //     await dialog.dismiss();
    // });
    expect(alertText).toEqual(expectedAlertMessage);
}); 

When('I click on the alert ok button', async () => {
    // The alert is handled in the previous step
});