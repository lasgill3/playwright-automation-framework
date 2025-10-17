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


When('I switch to the new browser tab', async () => {
    await pageFixture.context.waitForEvent('page'); //reinitialize page to the new tab

    //retrieve all open pages (tabs) in the browser context
    const allPage = await pageFixture.context.pages();

    //assign the most recent tab to pageFixtre.page
    pageFixture.page = allPage[allPage.length - 1];

    //Bring the newly assinged tabv to the front and make it active
    await pageFixture.page.bringToFront();

    //ensure the newly assigned tab is fully maximized
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080});
}); 

