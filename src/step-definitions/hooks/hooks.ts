import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture"; 

let browser: Browser; //represents the browser instance e.g. Chrome, Firefox, etc. open by Playwright

//Befare all hook to run once before all scenarios
BeforeAll(async function () {
  console.log("\nExecuting test suite...");
});

//After all hook to run once after all scenarios
AfterAll(async function () {
  console.log("\nFinished exectuion of test suite!");
});

//Before hook to run before each scenario
Before(async function () {
  //setup browser instance:
  browser = await chromium.launch({ headless: false });
  pageFixture.context = await browser.newContext({viewport: { width: 1920, height: 1080 }}); 
  pageFixture.page = await pageFixture.context.newPage();
});

//After hook to run after each scenario
After(async function () {
  await pageFixture.page.close();
  await browser.close();
});

