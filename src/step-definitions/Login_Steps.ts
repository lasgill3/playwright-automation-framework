import { defineStep as And, Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';
import { CucumberWorld } from './world/CucumberWorld';
import logger from "../looger/logger";


let alertText: string;
const url = 'https://www.webdriveruniversity.com/Login-Portal/index.html';

Given('I navigate to the webdriveruniversity login page', async function (this: CucumberWorld) {
   try {
    // await pageFixture.page.goto(url);

    await this.basePage.navigateToURL(url);
    logger.info(`Accessing URL: ${url}`);
    this.setURL(url);
    // throw new Error("Test error logging"); // Test error logging    
  } catch (error) {
    logger.error(`Error navigating to URL: ${url} - ${error}`);
  }
});

And('I type an username {string} and password {string}', async function (this: CucumberWorld, username: string, pwd: string) {
    // await pageFixture.page.fill('#text', username);
    // await pageFixture.page.fill('#password', pwd);
    await this.loginPage.typeUserNameAndPassword(username, pwd); 
}); 

And('I click on the login button', async function (this: CucumberWorld) {
    await  pageFixture.page.on('dialog', async (alert) => {
        alertText = alert.message();
        // console.log(`Alert message: ${alertText}`);
        await alert.accept();
        // await alert.dismiss();
    });
    // await pageFixture.page.click('#login-button', {force: true });
    await this.loginPage.clickLoginButton(); 
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