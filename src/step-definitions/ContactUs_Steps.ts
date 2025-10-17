import { defineStep as And, Given, When, Then } from '@cucumber/cucumber';
import { Browser, chromium } from "playwright";
import { Page } from "playwright";

let browser: Browser; //represents the browser instance e.g. Chrome, Firefox, etc. open by Playwright
let context: any; //represents a browser context (a separate browsing session);  Each contxt has its own cookies, cache, storage, etc.
let page: Page; 


And('I type a first name', async () => {
   
});

And('I type a last name', async () => {
   
});

And('I enter an email address', async () => {
   

});

And('I type a comment', async () => {

});

And('I click on the submit button', async () => {

});1


Then('I should be presented with a successful contact us submission message', async () => {

});