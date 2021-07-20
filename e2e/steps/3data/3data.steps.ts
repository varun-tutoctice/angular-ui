var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("Currently on unit test page", { timeout: 2 * 20000 }, async () => {
  await browser.sleep(2000);
});

When("click on build info in left side nav", { timeout: 2 * 20000 }, async () => {
  await app.s(2000);
});

When("takes to build information page", { timeout: 2 * 20000 }, async () => {

  await browser.sleep(2000);
});

Then(
  "build information with version can be seen",
  { timeout: 2 * 20000 },
  async () => {
 //   await alert(window.location.pathname);
    await browser.sleep(3000);
  }
);
