import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pageFixure } from "./browserContextFixture"; 

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
  pageFixure.context = await browser.newContext({viewport: { width: 1920, height: 1080 }}); 
  pageFixure.page = await pageFixure.context.newPage();
});

//After hook to run after each scenario
After(async function () {
  await pageFixure.page.close();
  await browser.close();
});

