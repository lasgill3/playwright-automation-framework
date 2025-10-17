import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, chromium } from "playwright";
import { Page } from "playwright";

let browser: Browser; //represents the browser instance e.g. Chrome, Firefox, etc. open by Playwright
let context: any; //represents a browser context (a separate browsing session);  Each contxt has its own cookies, cache, storage, etc.
let page: Page; //represents a single tab or page in the browser context 

const url = "https://www.webdriveruniversity.com";

Given('I navigate to the webdriveruniversity homepage', async () => {
    //setup browser instance:
    browser = await chromium.launch({ headless: false }); 
    context = await browser.newContext({ viewport: { width: 1920, height: 1080 }});
    page = await context.newPage();

    await page.goto(url);  
});

When('I click on the contact us button', async () => {
    // await page.pause(); // Pause for debugging
    // await page.click("#contact-us");

    const contactUs_Button = await page.locator("#contact-us");
    await contactUs_Button.click();
});


When('I switch to the new browser tab', async () => {
    page = await context.waitForEvent('page'); //reinitialize page to the new tab
    await page.bringToFront(); //bring the new tab to the front
}); 

