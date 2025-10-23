import { When, Given } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { CucumberWorld } from './world/CucumberWorld';


When('I switch to the new browser tab', async function (this: CucumberWorld) {
    await this.basePage.switchToNewTab(); 
}); 

Given('I pause playwright test for debugging', async () => {
    await pageFixture.page.pause(); // Pause for debugging
}); 

