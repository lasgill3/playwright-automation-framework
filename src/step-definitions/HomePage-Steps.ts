import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

const url = "https://www.webdriveruniversity.com";

Given('I navigate to the webdriveruniversity homepage', async () => {
    await pageFixture.page.goto(url);  
});

When('I click on the contact us button', async () => {
    // await page.pause(); // Pause for debugging
    // await page.click("#contact-us");

    const contactUs_Button = await pageFixture.page.locator("#contact-us");
    await contactUs_Button.click();
});

When('I click on the login portal button', async () => {
    const contactUs_Button = await pageFixture.page.locator("#login-portal");
    await contactUs_Button.click();
});


