import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixure } from "./hooks/browserContextFixture";

const url = "https://www.webdriveruniversity.com";

Given('I navigate to the webdriveruniversity homepage', async () => {
    await pageFixure.page.goto(url);  
});

When('I click on the contact us button', async () => {
    // await page.pause(); // Pause for debugging
    // await page.click("#contact-us");

    const contactUs_Button = await pageFixure.page.locator("#contact-us");
    await contactUs_Button.click();
});


When('I switch to the new browser tab', async () => {
    await pageFixure.context.waitForEvent('page'); //reinitialize page to the new tab

    //retrieve all open pages (tabs) in the browser context
    const allPage = await pageFixure.context.pages();

    //assign the most recent tab to pageFixure.page
    pageFixure.page = allPage[allPage.length - 1];

    //Bring the newly assinged tabv to the front and make it active
    await pageFixure.page.bringToFront();

    //ensure the newly assigned tab is fully maximized
    await pageFixure.page.setViewportSize({ width: 1920, height: 1080});
}); 

