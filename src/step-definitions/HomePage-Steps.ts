import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import logger from "../looger/logger";
import { CucumberWorld } from "./world/CucumberWorld";  

const url = "https://www.webdriveruniversity.com";

Given("I navigate to the webdriveruniversity homepage", async function (this: CucumberWorld) {
  try {
    await pageFixture.page.goto(url);
    logger.info(`Accessing URL: ${url}`);
    this.setURL(url);
    // throw new Error("Test error logging"); // Test error logging    
  } catch (error) {
    logger.error(`Error navigating to URL: ${url} - ${error}`);
  }
});

When("I click on the contact us button", async () => {
  // await page.click("#contact-us");

  const contactUs_Button = await pageFixture.page.locator("#contact-us");
  await contactUs_Button.click();
});

When("I click on the login portal button", async () => {
  const contactUs_Button = await pageFixture.page.locator("#login-portal");
  await contactUs_Button.click();
});
